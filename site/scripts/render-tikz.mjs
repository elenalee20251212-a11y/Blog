import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import tikzjax from 'node-tikzjax'
import { CONTENT_ROOT, SITE_ROOT } from './site-lib.mjs'

const cacheDir = path.join(SITE_ROOT, '.cache', 'tikz')
const tex2svg = tikzjax.default
fs.mkdirSync(cacheDir, { recursive: true })

// —— TikZ 渲染机制与 Markdown Preview Enhanced 对齐 ——
// MPE 的 tikz 渲染由 crossnote（src/renderers/tikz.ts 的 renderTikz）完成，
// 它无条件加载以下基础宏包，并按代码内容自动检测需要加载的宏包，
// 再把 texPackages / tikzLibraries / addToPreamble 作为选项交给
// node-tikzjax 的 getTexPreamble 拼装。本站使用同一机制，保证同一段
// tikz 代码在 MPE 预览与网站构建中编译出相同结果（包括 amsmath 提供的
// \text、\operatorname 等命令）。
const BASE_TEX_PACKAGES = { amsmath: '', amstext: '', amsfonts: '', amssymb: '', array: '' }

const DETECTED_TEX_PACKAGES = [
  { pattern: /\\begin\{tikzcd\}/, pkg: 'tikz-cd' },
  { pattern: /\\begin\{axis\}|\\begin\{semilogxaxis\}|\\begin\{semilogyaxis\}|pgfplots/, pkg: 'pgfplots' },
  { pattern: /\\begin\{circuitikz\}/, pkg: 'circuitikz' },
  { pattern: /\\chemfig|\\schemestart/, pkg: 'chemfig' },
  { pattern: /\\tdplotsetmaincoords|tdplot_/, pkg: 'tikz-3dplot' }
]

function normalizeTikzSource(source) {
  return source.replace(/\r\n?/g, '\n').trim()
}

// 与 crossnote 的围栏信息解析一致：```tikz {attr="value"} 中，
// 花括号按配对计数提取，多个花括号段落与花括号外文字以空格合并成属性串。
function parseFenceInfo(info) {
  const text = String(info ?? '').trim()
  let language = ''
  let attributesText = ''
  if (text.includes('{')) {
    const match = text.match(/^([^\s{]*)/)
    if (match?.[1]) language = match[1]
    let rest = text.slice(language.length).trim()
    const parts = []
    while (rest.length) {
      const open = rest.indexOf('{')
      if (open === -1) {
        const trailing = rest.trim()
        if (trailing) parts.push(trailing)
        break
      }
      const before = rest.slice(0, open).trim()
      if (before) parts.push(before)
      let depth = 1
      let cursor = open + 1
      while (cursor < rest.length && depth > 0) {
        if (rest[cursor] === '{') depth += 1
        else if (rest[cursor] === '}') depth -= 1
        cursor += 1
      }
      const inner = rest.slice(open + 1, cursor - 1).trim()
      if (inner) parts.push(inner)
      rest = rest.slice(cursor).trim()
    }
    attributesText = parts.join(' ')
  } else {
    const match = text.match(/^([^\s]+)\s+(.+?)$/)
    if (match) {
      language = match[1]
      attributesText = match[2]
    } else {
      language = text
    }
  }
  return { language, attributes: parseAttributes(attributesText) }
}

const CLOSING_QUOTES = { '"': '"', "'": "'", '“': '”', '`': '`' }
const WORD_STOP = /[,;=\s]/

// 属性值词元转换，与 crossnote 的 SM 一致："true"→true、"false"→false、
// 数字字符串→数值、其余保持字符串。
function scalarToken(token) {
  const lower = token.toLowerCase()
  if (lower === 'true') return true
  if (lower === 'false') return false
  return Number.isNaN(Number(token)) ? token : Number(token)
}

// 属性串分词与 crossnote 的 ca 一致：k="v"、k=v 键值对（值为词元时按
// SM 转换，引号字符串保持原样，支持 " ' “ ` 四种引号与反斜杠转义），
// 裸词作为 { word: true } 标志。
function parseAttributes(raw) {
  let text = String(raw ?? '').trim()
  if (text.startsWith('{') && text.endsWith('}')) text = text.slice(1, -1)
  const result = {}
  let pendingKey
  let index = 0
  while (index < text.length) {
    const char = text[index]
    let token
    let type
    if (CLOSING_QUOTES[char]) {
      const closing = CLOSING_QUOTES[char]
      const chars = []
      let cursor = index + 1
      while (cursor < text.length) {
        if (text[cursor] === '\\') {
          if (cursor + 1 < text.length) chars.push(text[cursor + 1])
          cursor += 2
          continue
        }
        if (text[cursor] === closing) {
          cursor += 1
          break
        }
        chars.push(text[cursor])
        cursor += 1
      }
      token = chars.join('')
      type = 'quoted'
      index = cursor
    } else if (!WORD_STOP.test(char)) {
      let cursor = index
      while (cursor < text.length && !WORD_STOP.test(text[cursor])) cursor += 1
      token = text.slice(index, cursor)
      type = 'word'
      index = cursor
    } else {
      index += 1
      continue
    }
    if (pendingKey !== undefined) {
      result[pendingKey] = type === 'word' ? scalarToken(token) : token
      pendingKey = undefined
    } else if (text[index] === '=') {
      pendingKey = token
      index += 1
    } else if (type === 'word') {
      result[token] = true
    }
  }
  return result
}

// 从围栏属性提取渲染选项；属性名与 MPE 相同，同时接受 camelCase 与
// snake_case。texPackages 是 JSON 字符串。embedFontCss / showConsole /
// fontCssUrl 不参与本站渲染：字体由生成的 tikz-fonts.generated.css 统一
// 提供（本地字体、可离线构建），与 MPE 的逐图 CDN @import 效果一致。
function extractTikzOptions(attributes) {
  const rawPackages = attributes.texPackages ?? attributes.tex_packages
  const options = {}
  if (typeof rawPackages === 'string') {
    try {
      options.texPackages = JSON.parse(rawPackages)
    } catch (error) {
      throw new Error(`TikZ 围栏属性 texPackages 必须是 JSON 字符串：${error.message}`)
    }
  }
  const tikzLibraries = attributes.tikzLibraries ?? attributes.tikz_libraries
  if (typeof tikzLibraries === 'string') options.tikzLibraries = tikzLibraries
  const addToPreamble = attributes.addToPreamble ?? attributes.add_to_preamble
  if (typeof addToPreamble === 'string') options.addToPreamble = addToPreamble
  return options
}

// 与 crossnote 的 detectPackages 一致：按代码内容自动检测需要加载的宏包。
function detectPackages(source) {
  const packages = {}
  for (const { pattern, pkg } of DETECTED_TEX_PACKAGES) {
    if (pattern.test(source)) packages[pkg] = ''
  }
  return packages
}

// 缓存键 = 规范化源码；带编译相关围栏属性（texPackages / tikzLibraries /
// addToPreamble）时属性以固定键序并入键，使同图不同属性编译出不同缓存。
// embedFontCss 等不影响编译的属性不进键，现有缓存保持有效。
export function tikzCacheKey(source, info) {
  const normalized = normalizeTikzSource(source)
  const options = extractTikzOptions(parseFenceInfo(info).attributes)
  const canonical = {
    texPackages: options.texPackages,
    tikzLibraries: options.tikzLibraries,
    addToPreamble: options.addToPreamble
  }
  const hasOptions = canonical.texPackages !== undefined
    || canonical.tikzLibraries !== undefined
    || canonical.addToPreamble !== undefined
  const input = hasOptions ? JSON.stringify([canonical, normalized]) : normalized
  return crypto.createHash('sha256').update(input).digest('hex').slice(0, 20)
}

// 与 crossnote renderTikz 相同的输入构造：基础宏包 + 内容检测宏包 + 用户
// 属性作为选项交给 node-tikzjax 拼装 preamble；代码已含 \begin{document}
// 时不重复包裹（宏包仍然注入）。
async function renderBlock(source, info) {
  const options = extractTikzOptions(parseFenceInfo(info).attributes)
  const input = source.includes('\\begin{document}')
    ? source
    : `\\begin{document}\n${source}\n\\end{document}`
  return tex2svg(input, {
    texPackages: { ...BASE_TEX_PACKAGES, ...detectPackages(input), ...(options.texPackages ?? {}) },
    tikzLibraries: options.tikzLibraries,
    addToPreamble: options.addToPreamble
  })
}

function markdownFiles(dir) {
  const result = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory() && entry.name !== '.vitepress') result.push(...markdownFiles(full))
    else if (entry.isFile() && entry.name.endsWith('.md')) result.push(full)
  }
  return result
}

export async function renderAllTikz({ quiet = false } = {}) {
  const blocks = new Map()
  for (const file of markdownFiles(CONTENT_ROOT)) {
    const source = fs.readFileSync(file, 'utf8')
    for (const match of source.matchAll(/^```tikz[^\n]*\n([\s\S]*?)^```\s*$/gm)) {
      const info = match[0].slice(3).trim()
      const tex = normalizeTikzSource(match[1])
      const hash = tikzCacheKey(tex, info)
      if (!blocks.has(hash)) blocks.set(hash, { tex, info, files: [file] })
      else blocks.get(hash).files.push(file)
    }
  }

  let rendered = 0
  for (const [hash, block] of blocks) {
    const output = path.join(cacheDir, `${hash}.svg`)
    if (fs.existsSync(output)) continue
    if (!quiet) process.stdout.write(`Rendering TikZ ${hash} ... `)
    try {
      const svg = await renderBlock(block.tex, block.info)
      fs.writeFileSync(output, svg, 'utf8')
      rendered += 1
      if (!quiet) console.log('done')
    } catch (error) {
      if (!quiet) console.error('failed')
      console.error(`TikZ source: ${block.files[0]}`)
      throw error
    }
  }
  const fontNames = new Set()
  for (const hash of blocks.keys()) {
    const svg = fs.readFileSync(path.join(cacheDir, `${hash}.svg`), 'utf8')
    for (const match of svg.matchAll(/font-family="([a-z0-9]+)"/gi)) fontNames.add(match[1])
  }
  const fontCss = [...fontNames]
    .sort()
    .map((font) => `@font-face { font-family: ${font}; src: url('../../../node_modules/node-tikzjax/css/bakoma/ttf/${font}.ttf'); font-display: swap; }`)
    .join('\n')
  const fontCssFile = path.join(CONTENT_ROOT, '.vitepress', 'theme', 'tikz-fonts.generated.css')
  fs.writeFileSync(fontCssFile, `${fontCss}\n`, 'utf8')
  if (!quiet) console.log(`TikZ ready: ${blocks.size} diagram(s), ${rendered} newly rendered.`)
  return { diagrams: blocks.size, rendered, fonts: fontNames.size }
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
  await renderAllTikz()
}

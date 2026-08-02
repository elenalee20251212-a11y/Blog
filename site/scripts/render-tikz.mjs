import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import tikzjax from 'node-tikzjax'
import { CONTENT_ROOT, SITE_ROOT } from './site-lib.mjs'

const cacheDir = path.join(SITE_ROOT, '.cache', 'tikz')
const tex2svg = tikzjax.default
fs.mkdirSync(cacheDir, { recursive: true })

function normalizeTex(source) {
  if (/\\begin\{document\}/.test(source)) return source
  const packages = /\\begin\{tikzcd\}/.test(source) ? '\\usepackage{tikz-cd}\n' : ''
  return `${packages}\\begin{document}\n${source}\n\\end{document}`
}

function normalizeTikzSource(source) {
  return source.replace(/\r\n?/g, '\n').trim()
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
      const tex = normalizeTikzSource(match[1])
      const hash = crypto.createHash('sha256').update(tex).digest('hex').slice(0, 20)
      if (!blocks.has(hash)) blocks.set(hash, { tex, files: [file] })
      else blocks.get(hash).files.push(file)
    }
  }

  let rendered = 0
  for (const [hash, block] of blocks) {
    const output = path.join(cacheDir, `${hash}.svg`)
    if (fs.existsSync(output)) continue
    if (!quiet) process.stdout.write(`Rendering TikZ ${hash} ... `)
    try {
      const svg = await tex2svg(normalizeTex(block.tex))
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

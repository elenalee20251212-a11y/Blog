import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import {
  ARTICLE_ROOT,
  CATEGORY_ROOT,
  CONTENT_ROOT,
  SITE_ROOT,
  categoryRoute,
  posixPath,
  readAllArticles,
  readCategoryDefinitions,
  rebaseMarkdownResources
} from '../../scripts/site-lib.mjs'
import {
  findMpeFragmentTargetLine,
  formatMpeWikilinkDisplay,
  processMpeWikilink,
  resolveMpeWikilink,
  resolvedReference
} from '../../scripts/internal-references.mjs'
import { markdownPreviewEnhancedSlugify } from './markdown-mpe-core.mjs'

const MAX_EMBED_DEPTH = 3
const IMAGE_EXTENSIONS = /^\.(apng|avif|gif|jpeg|jpg|png|svg|bmp|webp|emf)$/
const BINARY_EXTENSIONS = new Set([
  '.pdf', '.zip', '.tar', '.gz', '.tgz', '.7z', '.rar', '.exe', '.dll', '.so', '.dylib', '.bin', '.dmg', '.iso',
  '.mp3', '.mp4', '.mov', '.wav', '.flac', '.ogg', '.webm', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
  '.odt', '.ods', '.odp'
])
const MARKDOWN_EXTENSIONS = new Set(['.md', '.markdown', '.mdown', '.mkdn', '.mkd', '.rmd', '.qmd', '.mdx'])

function sameFile(left, right) {
  return path.resolve(left).toLocaleLowerCase('en-US') === path.resolve(right).toLocaleLowerCase('en-US')
}

function sourceFileFromEnvironment(env) {
  if (env.__mpeSourceFile) return env.__mpeSourceFile
  const articleId = String(env.frontmatter?.articleId ?? '')
  if (articleId) return path.join(ARTICLE_ROOT, articleId, `${articleId}.md`)
  const categoryPath = String(env.frontmatter?.category ?? '')
  if (categoryPath) {
    const id = categoryPath.split('/').at(-1)
    return path.join(CATEGORY_ROOT, ...categoryPath.split('/'), `${id}.md`)
  }
  const environmentPath = String(env.path ?? '')
  return path.resolve(CONTENT_ROOT, environmentPath)
}

function dynamicPageForSource(sourceFile) {
  const article = readAllArticles().find((item) => sameFile(item.file, sourceFile))
  if (article) return `articles/${article.id}/index.md`
  const category = readCategoryDefinitions().definitions.find((item) => sameFile(item.file, sourceFile))
  if (category) return `categories/${category.path}/index.md`
  return posixPath(path.relative(CONTENT_ROOT, sourceFile))
}

function publishedTarget(targetFile) {
  const article = readAllArticles().find((item) => sameFile(item.file, targetFile))
  if (article) return { route: `/articles/${article.id}/`, markdown: article.content }
  const category = readCategoryDefinitions().definitions.find((item) => sameFile(item.file, targetFile))
  if (category) return { route: categoryRoute(category.path), markdown: category.content }
  return null
}

function decodeFragment(value) {
  try { return decodeURIComponent(value) } catch { return value }
}

function fragmentAnchor(markdown, reference, owner) {
  if (reference.blockRef) return reference.blockRef.slice(1)
  if (!reference.hash) return ''
  const fragment = decodeFragment(reference.hash.slice(1))
  let lineIndex = findMpeFragmentTargetLine(markdown, fragment, markdownPreviewEnhancedSlugify)
  if (lineIndex < 0) {
    lineIndex = findMpeFragmentTargetLine(markdown, markdownPreviewEnhancedSlugify(fragment), markdownPreviewEnhancedSlugify)
  }
  // MPE keeps a wikilink clickable even when its target fragment does not
  // currently exist.  The browser then opens the page without finding an
  // element to scroll to.  A static build must preserve that behavior rather
  // than turning an unfinished note reference into a build failure.
  if (lineIndex < 0) return markdownPreviewEnhancedSlugify(fragment)
  const line = markdown.split('\n')[lineIndex]
  const explicit = line.match(/\{([^}]+)\}\s*$/)?.[1]?.match(/(?:^|\s)#([a-zA-Z][\w-]*)/)?.[1]
  if (explicit) return explicit
  return markdownPreviewEnhancedSlugify(line.replace(/^#{1,6}\s+/, '').replace(/\s*\{[^}]+\}\s*$/, '').trim())
}

function inferredPageRoute(targetFile) {
  const articleRelative = path.relative(ARTICLE_ROOT, targetFile)
  if (!articleRelative.startsWith('..') && !path.isAbsolute(articleRelative)) {
    const [articleId] = articleRelative.split(path.sep)
    if (articleId) return `/articles/${articleId}/`
  }

  const categoryRelative = path.relative(CATEGORY_ROOT, targetFile)
  if (!categoryRelative.startsWith('..') && !path.isAbsolute(categoryRelative)) {
    const categoryPath = posixPath(path.dirname(categoryRelative))
    if (categoryPath && categoryPath !== '.') return categoryRoute(categoryPath)
  }
  return ''
}

function assetHref(targetFile, sourceFile, dynamicPage) {
  const dynamicDirectory = path.posix.dirname(dynamicPage)
  const sourceDirectory = posixPath(path.relative(CONTENT_ROOT, path.dirname(targetFile)))
  const prefix = path.posix.relative(dynamicDirectory, sourceDirectory)
  return path.posix.join(prefix, path.basename(targetFile))
}

function publishedHref(targetRoute, dynamicPage) {
  const currentDirectory = path.posix.dirname(dynamicPage)
  const targetDirectory = targetRoute.replace(/^\/+|\/+$/g, '')
  const relative = path.posix.relative(currentDirectory, targetDirectory)
  return `${relative || '.'}/`
}

function resolveReference(content, env) {
  const sourceFile = sourceFileFromEnvironment(env)
  const reference = processMpeWikilink(content)
  return {
    sourceFile,
    reference: resolvedReference(reference, sourceFile, SITE_ROOT),
    dynamicPage: env.__mpeDynamicPage ?? dynamicPageForSource(sourceFile)
  }
}

function renderLink(md, content, env) {
  const { reference, sourceFile, dynamicPage } = resolveReference(content, env)
  const published = publishedTarget(reference.targetFile)
  let href
  if (published) {
    const anchor = fragmentAnchor(published.markdown, reference, reference.targetRelative)
    href = publishedHref(published.route, dynamicPage) + (anchor ? `#${anchor}` : '')
  }
  else if (MARKDOWN_EXTENSIONS.has(path.extname(reference.targetFile).toLowerCase())) {
    const route = inferredPageRoute(reference.targetFile)
    href = route ? publishedHref(route, dynamicPage) : assetHref(reference.targetFile, sourceFile, dynamicPage)
    const anchor = reference.blockRef
      ? reference.blockRef.slice(1)
      : reference.hash
        ? markdownPreviewEnhancedSlugify(decodeFragment(reference.hash.slice(1)))
        : ''
    if (anchor) href += `#${anchor}`
  } else {
    href = assetHref(reference.targetFile, sourceFile, dynamicPage) + (reference.hash || '') + (reference.blockRef || '')
  }
  const display = content.includes('|') ? reference.text : formatMpeWikilinkDisplay(reference.text)
  const missing = !fs.existsSync(reference.targetFile) ? ' is-missing' : ''
  return `<a class="internal-reference${missing}" href="${md.utils.escapeHtml(href)}">${md.utils.escapeHtml(display)}</a>`
}

function extractFragment(markdown, reference) {
  let fragment = reference.blockRef ? reference.blockRef : reference.hash ? reference.hash.slice(1) : ''
  fragment = decodeFragment(fragment)
  if (!fragment) return markdown
  let lineIndex = findMpeFragmentTargetLine(markdown, fragment, markdownPreviewEnhancedSlugify)
  if (lineIndex < 0 && !fragment.startsWith('^')) {
    lineIndex = findMpeFragmentTargetLine(markdown, markdownPreviewEnhancedSlugify(fragment), markdownPreviewEnhancedSlugify)
  }
  if (lineIndex < 0) throw new Error(`${fragment.startsWith('^') ? 'Block reference' : 'Heading'} not found: ${fragment.replace(/^\^/, '')}`)
  const lines = markdown.split('\n')
  if (fragment.startsWith('^')) {
    let start = lineIndex
    while (start > 0 && lines[start - 1].trim() !== '') start -= 1
    let end = lineIndex
    while (end < lines.length - 1 && lines[end + 1].trim() !== '') end += 1
    const paragraph = lines.slice(start, end + 1)
    paragraph[lineIndex - start] = paragraph[lineIndex - start].replace(/\s\^[a-zA-Z0-9_-]+\s*$/, '')
    return paragraph.join('\n')
  }
  const level = lines[lineIndex].match(/^(#{1,6})\s/)?.[1].length ?? 1
  let end = lines.length
  for (let index = lineIndex + 1; index < lines.length; index += 1) {
    const heading = lines[index].match(/^(#{1,6})\s/)
    if (heading && heading[1].length <= level) {
      end = index
      break
    }
  }
  return lines.slice(lineIndex, end).join('\n')
}

function renderEmbed(md, content, env, block) {
  const depth = Number(env.__mpeEmbedDepth ?? 0)
  if (depth >= MAX_EMBED_DEPTH) {
    return `<div class="wikilink-embed-content wikilink-embed-error">Maximum embed depth (${MAX_EMBED_DEPTH}) reached: ${md.utils.escapeHtml(content)}</div>`
  }
  const { reference, sourceFile, dynamicPage } = resolveReference(content, env)
  if (/^https?:\/\//.test(reference.filePart)) {
    return `<div class="wikilink-embed-content wikilink-embed-error">Remote content embedding is not supported: ${md.utils.escapeHtml(reference.filePart)}</div>`
  }
  const extension = path.extname(reference.targetFile).toLowerCase()
  const wrapper = block ? 'div' : 'span'
  if (IMAGE_EXTENSIONS.test(extension)) {
    const src = assetHref(reference.targetFile, sourceFile, dynamicPage)
    return `<${wrapper} class="wikilink-embed-content"><img src="${md.utils.escapeHtml(src)}" alt="${md.utils.escapeHtml(reference.text)}"></${wrapper}>`
  }
  if (BINARY_EXTENSIONS.has(extension)) {
    return `<${wrapper} class="wikilink-embed-content wikilink-embed-error">Cannot embed binary file: ${md.utils.escapeHtml(reference.targetRelative)}</${wrapper}>`
  }
  if (!fs.existsSync(reference.targetFile)) {
    return `<${wrapper} class="wikilink-embed-content wikilink-embed-error">File not found: ${md.utils.escapeHtml(reference.targetRelative)}</${wrapper}>`
  }
  const contentText = fs.readFileSync(reference.targetFile, 'utf8')
  if (!MARKDOWN_EXTENSIONS.has(extension)) {
    return `<${wrapper} class="wikilink-embed-content"><pre class="language-text"><code>${md.utils.escapeHtml(contentText)}</code></pre></${wrapper}>`
  }
  try {
    const fragment = extractFragment(matter(contentText).content, reference)
    const rebased = rebaseMarkdownResources(fragment, dynamicPage, reference.targetFile)
    const childEnvironment = {
      ...env,
      __mpeSourceFile: reference.targetFile,
      __mpeDynamicPage: dynamicPage,
      __mpeEmbedDepth: depth + 1,
      frontmatter: matter(contentText).data
    }
    return `<${wrapper} class="wikilink-embed-content">${md.render(rebased, childEnvironment)}</${wrapper}>`
  } catch (error) {
    return `<${wrapper} class="wikilink-embed-content wikilink-embed-error">Error rendering embed: ${md.utils.escapeHtml(String(error))}</${wrapper}>`
  }
}

function findClosingDelimiter(source, start) {
  let index = start
  while (index < source.length) {
    if (source[index] === '\\') index += 1
    else if (source.startsWith(']]', index)) return index
    index += 1
  }
  return -1
}

export function internalReferences(md) {
  // VitePress reserves [[toc]] as a table-of-contents block. MPE 0.8.30 does
  // not: its wikilink rule wins and treats it as toc.md. Catch every
  // stand-alone wikilink before VitePress's toc rule so the same source keeps
  // MPE semantics on the website.
  md.block.ruler.before('toc', 'mpe_wikilink_block', (state, startLine, _endLine, silent) => {
    const start = state.bMarks[startLine] + state.tShift[startLine]
    const end = state.eMarks[startLine]
    const match = state.src.slice(start, end).match(/^\[\[([^\]]+)\]\]\s*$/)
    if (!match) return false
    if (silent) return true
    const token = state.push('mpe_wikilink_block', '', 0)
    token.content = match[1]
    token.block = true
    token.map = [startLine, startLine + 1]
    state.line = startLine + 1
    return true
  })

  md.block.ruler.before('paragraph', 'mpe_wikilink_embed_block', (state, startLine, _endLine, silent) => {
    const start = state.bMarks[startLine] + state.tShift[startLine]
    const end = state.eMarks[startLine]
    const match = state.src.slice(start, end).match(/^!\[\[([^\]]+)\]\](?:\{([^}]*)\})?\s*$/)
    if (!match) return false
    if (silent) return true
    const token = state.push('mpe_wikilink_embed_block', '', 0)
    token.content = match[1]
    token.block = true
    token.map = [startLine, startLine + 1]
    state.line = startLine + 1
    return true
  })

  md.inline.ruler.before('autolink', 'wikilink', (state, silent) => {
    if (!state.src.startsWith('[[', state.pos)) return false
    const close = findClosingDelimiter(state.src, state.pos + 2)
    if (close < 0) return false
    const content = state.src.slice(state.pos + 2, close)
    if (!content) return false
    if (!silent) state.push('mpe_wikilink', 'a', 0).content = content
    state.pos = close + 2
    return true
  })

  md.inline.ruler.before('wikilink', 'mpe_wikilink_embed_inline', (state, silent) => {
    if (!state.src.startsWith('![[', state.pos)) return false
    const close = findClosingDelimiter(state.src, state.pos + 3)
    if (close < 0) return false
    const content = state.src.slice(state.pos + 3, close)
    if (!content) return false
    if (!silent) state.push('mpe_wikilink_embed_inline', '', 0).content = content
    state.pos = close + 2
    return true
  })

  md.core.ruler.after('inline', 'mpe_block_ids', (state) => {
    for (const token of state.tokens) {
      if (token.type !== 'inline' || !token.children?.length) continue
      const last = token.children.at(-1)
      if (last.type !== 'text') continue
      const match = last.content.match(/^(.*?)\s+\^([a-zA-Z0-9_-]+)\s*$/s)
      if (!match) continue
      last.content = match[1]
      const anchor = new state.Token('html_inline', '', 0)
      anchor.content = ` <span id="${md.utils.escapeHtml(match[2])}" class="block-id"></span>`
      token.children.push(anchor)
    }
  })

  md.renderer.rules.mpe_wikilink = (tokens, index, _options, env) => renderLink(md, tokens[index].content, env)
  md.renderer.rules.mpe_wikilink_block = (tokens, index, _options, env) => `<p>${renderLink(md, tokens[index].content, env)}</p>\n`
  md.renderer.rules.mpe_wikilink_embed_inline = (tokens, index, _options, env) => renderEmbed(md, tokens[index].content, env, false)
  md.renderer.rules.mpe_wikilink_embed_block = (tokens, index, _options, env) => renderEmbed(md, tokens[index].content, env, true)
}

import katex from 'katex'
import 'katex/contrib/mhchem'

// Parser and renderer semantics are ported from Crossnote 0.9.31, the exact
// engine used by Markdown Preview Enhanced 0.8.30. MPE's default renderer is
// KaTeX; rendering it during the static build preserves fast, script-free
// GitHub Pages output while matching the local preview engine.

const BLOCK_DELIMITERS = [
  ['$$', '$$']
]

const INLINE_DELIMITERS = [
  ['$', '$']
]

function findDelimiter(source, delimiter, from) {
  let position = from
  while (position < source.length) {
    if (source.startsWith(delimiter, position)) return position
    if (source[position] === '\\') position += 1
    position += 1
  }
  return -1
}

function delimiterAt(source, position) {
  for (const [openTag, closeTag] of BLOCK_DELIMITERS) {
    if (source.startsWith(openTag, position)) {
      return { openTag, closeTag, displayMode: true }
    }
  }
  for (const [openTag, closeTag] of INLINE_DELIMITERS) {
    if (source.startsWith(openTag, position)) {
      return { openTag, closeTag, displayMode: false }
    }
  }
  return null
}

function mpeMathInline(state, silent) {
  const delimiter = delimiterAt(state.src, state.pos)
  if (!delimiter) return false

  const contentStart = state.pos + delimiter.openTag.length
  const contentEnd = findDelimiter(state.src, delimiter.closeTag, contentStart)
  if (contentEnd < 0) return false

  const content = state.src.slice(contentStart, contentEnd)
  if (!content) return false

  if (!silent) {
    // Crossnote deliberately keeps display math found inside a paragraph in
    // the inline token stream. Turning it into a Markdown block token here
    // breaks surrounding paragraphs, list items and blockquotes.
    // Keep the standard math_inline token type. VitePress's attrs plugin
    // explicitly excludes this type from its `{...}` attribute syntax; using
    // a custom type makes `\end{aligned}` lose its `{aligned}` argument.
    const token = state.push('math_inline', 'math', 0)
    token.content = content.trim()
    token.meta = {
      openTag: delimiter.openTag,
      closeTag: delimiter.closeTag,
      displayMode: delimiter.displayMode
    }
  }

  state.pos = contentEnd + delimiter.closeTag.length
  return true
}

function mpeMathBlock(state, startLine, endLine, silent) {
  const position = state.bMarks[startLine] + state.tShift[startLine]
  const delimiter = BLOCK_DELIMITERS.find(([openTag]) =>
    state.src.startsWith(openTag, position)
  )
  if (!delimiter) return false

  const [openTag, closeTag] = delimiter
  const contentStart = position + openTag.length
  const contentEnd = findDelimiter(state.src, closeTag, contentStart)
  if (contentEnd < 0) return false

  let nextLine = startLine
  const closingEnd = contentEnd + closeTag.length
  while (nextLine < endLine && state.bMarks[nextLine] <= closingEnd) nextLine += 1

  if (silent) return true

  const token = state.push('math_block', 'div', 0)
  token.block = true
  token.content = state.src.slice(contentStart, contentEnd).trim()
  token.map = [startLine, nextLine]
  token.markup = openTag
  state.line = nextLine
  return true
}

export function markdownPreviewEnhancedMath(md) {
  const renderMath = (content, displayMode) => {
    try {
      const html = katex.renderToString(content, {
        macros: {},
        displayMode
      })
      // KaTeX preserves the source TeX inside a MathML <annotation>. Vue
      // otherwise interprets `{{` in expressions such as `{{{\to}}}` as a
      // template interpolation while compiling the generated VitePress page.
      // HTML entities keep the annotation's decoded text unchanged.
      return html.replace(
        /(<annotation\b[^>]*>)([\s\S]*?)(<\/annotation>)/gi,
        (_, open, source, close) =>
          `${open}${source.replaceAll('{', '&#123;').replaceAll('}', '&#125;')}${close}`
      )
    } catch (error) {
      return `<span class="mpe-math-error" style="color: #ee7f49; font-weight: 500;">${md.utils.escapeHtml(String(error))}</span>`
    }
  }

  md.inline.ruler.before('escape', 'math_inline', mpeMathInline)
  md.block.ruler.before('lheading', 'mpe_math_block', mpeMathBlock, {
    alt: ['paragraph', 'reference', 'blockquote', 'list']
  })

  md.renderer.rules.math_inline = (tokens, index) =>
    renderMath(tokens[index].content ?? '', Boolean(tokens[index].meta?.displayMode))
  md.renderer.rules.math_block = (tokens, index) =>
    renderMath(tokens[index].content ?? '', true)

  // Crossnote 0.9.31 also scans top-level HTML blocks because markdown-it
  // otherwise treats their contents as verbatim and skips all inline rules.
  const defaultHtmlBlock = md.renderer.rules.html_block
  md.renderer.rules.html_block = (tokens, index, options, env, self) => {
    const html = defaultHtmlBlock
      ? defaultHtmlBlock(tokens, index, options, env, self)
      : tokens[index].content
    return renderMathInHtml(html, renderMath)
  }
}

function replaceDelimited(html, openTag, closeTag, displayMode, render) {
  let output = ''
  let position = 0
  while (position < html.length) {
    if (!html.startsWith(openTag, position)) {
      output += html[position]
      position += 1
      continue
    }

    const contentStart = position + openTag.length
    const contentEnd = findDelimiter(html, closeTag, contentStart)
    if (contentEnd < 0) {
      output += openTag
      position = contentStart
      continue
    }

    output += render(html.slice(contentStart, contentEnd).trim(), displayMode)
    position = contentEnd + closeTag.length
  }
  return output
}

function renderMathInHtml(html, render) {
  const protectedValues = []
  let output = html.replace(
    /<(code|pre|script|style)\b[^>]*>[\s\S]*?<\/\1>/gi,
    (value) => {
      const marker = `\u0000MPE_PROTECTED_${protectedValues.length}\u0000`
      protectedValues.push(value)
      return marker
    }
  )

  // Crossnote deliberately tries block delimiters before inline delimiters.
  for (const [openTag, closeTag] of BLOCK_DELIMITERS) {
    output = replaceDelimited(output, openTag, closeTag, true, render)
  }

  const renderedBlocks = []
  output = output.replace(
    /<(div|span)\b[^>]*class\s*=\s*"[^"]*\b(mathjax-exps|math-display|katex-display)\b[^"]*"[^>]*>[\s\S]*?<\/\1>/gi,
    (value) => {
      const marker = `\u0000MPE_RENDERED_${renderedBlocks.length}\u0000`
      renderedBlocks.push(value)
      return marker
    }
  )
  for (const [openTag, closeTag] of INLINE_DELIMITERS) {
    output = replaceDelimited(output, openTag, closeTag, false, render)
  }

  output = output.replace(/\u0000MPE_RENDERED_(\d+)\u0000/g, (_, index) =>
    renderedBlocks[Number(index)]
  )
  return output.replace(/\u0000MPE_PROTECTED_(\d+)\u0000/g, (_, index) =>
    protectedValues[Number(index)]
  )
}

export const mathCompatibilityInternals = {
  delimiterAt,
  findDelimiter,
  renderMathInHtml,
  mpeMathBlock,
  mpeMathInline
}

function findUnescapedDelimiter(source, delimiter, from) {
  let position = from
  while (position < source.length) {
    if (source.startsWith(delimiter, position)) return position
    if (source[position] === '\\') position += 1
    position += 1
  }
  return -1
}

function containsUnescapedDollar(source) {
  for (let position = 0; position < source.length; position += 1) {
    if (source[position] === '\\') {
      position += 1
      continue
    }
    if (source[position] === '$') return true
  }
  return false
}

function mpeMathInline(state, silent) {
  const delimiter = state.src.startsWith('$$', state.pos) ? '$$' : '$'
  if (!state.src.startsWith(delimiter, state.pos)) return false

  const contentStart = state.pos + delimiter.length
  const contentEnd = findUnescapedDelimiter(state.src, delimiter, contentStart)
  if (contentEnd < 0) return false

  const source = state.src.slice(contentStart, contentEnd)
  if (!source) return false

  if (!silent) {
    const token = state.push(delimiter === '$$' ? 'math_block' : 'math_inline', 'math', 0)
    token.block = delimiter === '$$'
    token.markup = delimiter
    token.content = source.trim()
  }

  state.pos = contentEnd + delimiter.length
  return true
}

function mpeMathBlock(state, startLine, endLine, silent) {
  const start = state.bMarks[startLine] + state.tShift[startLine]
  if (!state.src.startsWith('$$', start)) return false

  const contentStart = start + 2
  const contentEnd = findUnescapedDelimiter(state.src, '$$', contentStart)
  if (contentEnd < 0) return false

  const source = state.src.slice(contentStart, contentEnd)
  if (!source.trim()) return false

  // A display formula containing unescaped inline-math delimiters is almost
  // certainly an unmatched `$$` fence around prose. MPE leaves this prose to
  // the inline parser instead of turning the whole paragraph into one SVG.
  if (containsUnescapedDollar(source)) return false

  let nextLine = startLine
  const closingEnd = contentEnd + 2
  while (nextLine < endLine && state.bMarks[nextLine] <= closingEnd) nextLine += 1

  if (silent) return true

  const token = state.push('math_block', 'math', 0)
  token.block = true
  token.content = source.trim()
  token.map = [startLine, nextLine]
  token.markup = '$$'
  state.line = nextLine
  return true
}

export function markdownPreviewEnhancedMath(md) {
  // VitePress installs markdown-it-mathjax3 first. Replacing only its parser
  // rules keeps the existing MathJax renderer while matching MPE delimiters.
  md.inline.ruler.at('math_inline', mpeMathInline)
  md.block.ruler.at('math_block', mpeMathBlock, {
    alt: ['paragraph', 'reference', 'blockquote', 'list']
  })
}

export const mathCompatibilityInternals = {
  containsUnescapedDollar,
  findUnescapedDelimiter,
  mpeMathBlock,
  mpeMathInline
}

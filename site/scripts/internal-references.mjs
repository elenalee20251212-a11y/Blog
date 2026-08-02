export const INTERNAL_REFERENCE_ID_RE = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/

function isEscaped(source, index) {
  let slashes = 0
  for (let cursor = index - 1; cursor >= 0 && source[cursor] === '\\'; cursor -= 1) slashes += 1
  return slashes % 2 === 1
}

export function parseInternalReference(value) {
  const separator = value.indexOf('|')
  const destination = (separator < 0 ? value : value.slice(0, separator)).trim()
  const label = separator < 0 ? '' : value.slice(separator + 1).trim()
  const hash = destination.indexOf('#')
  const id = (hash < 0 ? destination : destination.slice(0, hash)).trim()
  const fragment = hash < 0 ? '' : destination.slice(hash + 1).trim()
  if (!INTERNAL_REFERENCE_ID_RE.test(id)) return null
  if (hash >= 0 && !fragment) return null
  if (separator >= 0 && !label) return null
  return { id, fragment, label: label || id }
}

function fenceAt(source, index) {
  const lineStart = index === 0 || source[index - 1] === '\n'
  if (!lineStart) return null
  const line = source.slice(index, source.indexOf('\n', index) < 0 ? source.length : source.indexOf('\n', index))
  const match = line.match(/^ {0,3}(`{3,}|~{3,})/)
  return match?.[1] ?? null
}

function skipFence(source, index, marker) {
  const character = marker[0]
  const minimum = marker.length
  let cursor = source.indexOf('\n', index)
  if (cursor < 0) return source.length
  cursor += 1
  while (cursor < source.length) {
    const end = source.indexOf('\n', cursor)
    const lineEnd = end < 0 ? source.length : end
    const line = source.slice(cursor, lineEnd)
    const match = line.match(new RegExp(`^ {0,3}(${character === '`' ? '`' : '~'}{${minimum},})\\s*$`))
    if (match) return end < 0 ? source.length : end + 1
    cursor = end < 0 ? source.length : end + 1
  }
  return source.length
}

function skipCodeSpan(source, index) {
  let length = 1
  while (source[index + length] === '`') length += 1
  const marker = '`'.repeat(length)
  const close = source.indexOf(marker, index + length)
  return close < 0 ? index + length : close + length
}

function skipMath(source, index) {
  const length = source[index + 1] === '$' ? 2 : 1
  let cursor = index + length
  while (cursor < source.length) {
    if (length === 1 && source[cursor] === '\n') return index + 1
    if (source.startsWith('$'.repeat(length), cursor) && !isEscaped(source, cursor)) return cursor + length
    cursor += 1
  }
  return index + 1
}

export function findInternalReferences(markdown) {
  const references = []
  let cursor = 0
  while (cursor < markdown.length) {
    const fence = fenceAt(markdown, cursor)
    if (fence) {
      cursor = skipFence(markdown, cursor, fence)
      continue
    }
    if (markdown[cursor] === '`' && !isEscaped(markdown, cursor)) {
      cursor = skipCodeSpan(markdown, cursor)
      continue
    }
    if (markdown[cursor] === '$' && !isEscaped(markdown, cursor)) {
      cursor = skipMath(markdown, cursor)
      continue
    }
    if (markdown.startsWith('[[', cursor) && markdown[cursor - 1] !== '!' && !isEscaped(markdown, cursor)) {
      const close = markdown.indexOf(']]', cursor + 2)
      if (close >= 0) {
        const parsed = parseInternalReference(markdown.slice(cursor + 2, close))
        if (parsed) references.push({ ...parsed, start: cursor, end: close + 2, raw: markdown.slice(cursor, close + 2) })
        cursor = close + 2
        continue
      }
    }
    cursor += 1
  }
  return references
}

export function replaceInternalReferenceTarget(markdown, oldId, newId) {
  const references = findInternalReferences(markdown).filter((reference) => reference.id === oldId)
  if (!references.length) return markdown
  let output = markdown
  for (const reference of references.reverse()) {
    const destination = newId + (reference.fragment ? `#${reference.fragment}` : '')
    const label = reference.label !== reference.id ? `|${reference.label}` : ''
    output = output.slice(0, reference.start) + `[[${destination}${label}]]` + output.slice(reference.end)
  }
  return output
}

export function internalReferencesToText(markdown) {
  const references = findInternalReferences(markdown)
  if (!references.length) return markdown
  let output = markdown
  for (const reference of references.reverse()) {
    output = output.slice(0, reference.start) + reference.label + output.slice(reference.end)
  }
  return output
}


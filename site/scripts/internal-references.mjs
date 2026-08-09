import path from 'node:path'

// These defaults are Crossnote 0.9.31's defaults, which are also MPE 0.8.30's
// behavior when no workspace or user override exists.
export const MPE_WIKILINK_DEFAULTS = Object.freeze({
  markdownFileExtensions: ['.md', '.markdown', '.mdown', '.mkdn', '.mkd', '.rmd', '.qmd', '.mdx'],
  resolution: 'relative',
  targetFileExtension: '.md',
  useGitHubStylePipedLink: false
})

function normalizeOptions(options = {}) {
  return { ...MPE_WIKILINK_DEFAULTS, ...options }
}

// Equivalent to Crossnote 0.9.31 Notebook.processWikilink().
export function processMpeWikilink(content, options = {}) {
  const config = normalizeOptions(options)
  const splits = String(content).split('|')
  let link
  let text
  if (splits.length === 1) {
    text = splits[0].trim()
    link = text
  } else if (config.useGitHubStylePipedLink) {
    text = splits[0].trim()
    link = splits[1].trim()
  } else {
    text = splits[1].trim()
    link = splits[0].trim()
  }

  const hashIndex = link.lastIndexOf('#')
  const blockRefIndex = link.lastIndexOf('^')
  let hash = ''
  let blockRef = ''
  if (hashIndex >= 0 && blockRefIndex >= 0 && blockRefIndex > hashIndex) {
    hash = link.slice(hashIndex, blockRefIndex)
    blockRef = link.slice(blockRefIndex)
    link = link.slice(0, hashIndex)
  } else if (hashIndex >= 0) {
    hash = link.slice(hashIndex)
    link = link.slice(0, hashIndex)
  } else if (blockRefIndex >= 0) {
    blockRef = link.slice(blockRefIndex)
    link = link.slice(0, blockRefIndex)
  }

  const parsed = path.parse(link)
  let fileName = parsed.name
  let fileExtension = parsed.ext
  if (/^\.\d+$/.test(fileExtension)) {
    fileName += fileExtension
    fileExtension = ''
  }
  if (!fileExtension) fileExtension = config.targetFileExtension
  link = path.join(parsed.dir, fileName + fileExtension)
  if (hash) link += hash
  if (blockRef) link += blockRef
  return { link, text, hash, blockRef }
}

// Equivalent to Crossnote 0.9.31 Notebook.resolveWikilink(). Paths returned by
// this function are relative to notebookRoot, just as they are in MPE.
export function resolveMpeWikilink(link, currentNoteFilePath, notebookRoot, options = {}) {
  const config = normalizeOptions(options)
  if (!path.extname(link)) link += config.targetFileExtension
  if (link.startsWith('/')) {
    return path.relative(notebookRoot, path.join(notebookRoot, '.' + link))
  }
  if (config.resolution === 'absolute') {
    return path.relative(notebookRoot, path.join(notebookRoot, link))
  }
  if (config.resolution === 'shortest') {
    const normalizedLink = link.replace(/\\/g, '/')
    const candidates = (config.notePaths ?? []).filter((notePath) => {
      const normalizedNote = notePath.replace(/\\/g, '/')
      return normalizedNote === normalizedLink || normalizedNote.endsWith('/' + normalizedLink)
    })
    if (candidates.length === 1) return candidates[0]
    if (candidates.length > 1) {
      const normalize = (value) => value.replace(/\\/g, '/')
      candidates.sort((a, b) => normalize(a).split('/').length - normalize(b).split('/').length || a.localeCompare(b))
      const bestDepth = normalize(candidates[0]).split('/').length
      const shortest = candidates.filter((candidate) => normalize(candidate).split('/').length === bestDepth)
      const normalizedDirectory = normalize(path.dirname(currentNoteFilePath))
      const inDirectory = shortest.find((candidate) => {
        const normalized = normalize(candidate)
        return normalizedDirectory === '.' ? !normalized.includes('/') : normalized.startsWith(normalizedDirectory + '/')
      })
      return inDirectory || shortest[0]
    }
  }
  const noteDirectory = currentNoteFilePath
    ? path.dirname(path.join(notebookRoot, currentNoteFilePath))
    : notebookRoot
  return path.relative(notebookRoot, path.join(noteDirectory, link))
}

export function formatMpeWikilinkDisplay(raw) {
  const hashIndex = raw.indexOf('#')
  const blockIndex = raw.indexOf('^')
  let parts
  if (hashIndex === -1 && blockIndex === -1) parts = [raw]
  else if (hashIndex === -1) parts = [raw.slice(0, blockIndex), raw.slice(blockIndex)]
  else if (blockIndex === -1) parts = [raw.slice(0, hashIndex), raw.slice(hashIndex + 1)]
  else if (blockIndex < hashIndex) parts = [raw.slice(0, blockIndex), raw.slice(blockIndex, hashIndex), raw.slice(hashIndex + 1)]
  else parts = [raw.slice(0, hashIndex), raw.slice(hashIndex + 1, blockIndex), raw.slice(blockIndex)]
  return parts.filter(Boolean).join(' > ')
}

function isEscaped(source, index) {
  let slashes = 0
  for (let cursor = index - 1; cursor >= 0 && source[cursor] === '\\'; cursor -= 1) slashes += 1
  return slashes % 2 === 1
}

function fenceAt(source, index) {
  if (index !== 0 && source[index - 1] !== '\n') return null
  const end = source.indexOf('\n', index)
  return source.slice(index, end < 0 ? source.length : end).match(/^ {0,3}(`{3,}|~{3,})/)?.[1] ?? null
}

function skipFence(source, index, marker) {
  let cursor = source.indexOf('\n', index)
  if (cursor < 0) return source.length
  cursor += 1
  while (cursor < source.length) {
    const end = source.indexOf('\n', cursor)
    const lineEnd = end < 0 ? source.length : end
    const line = source.slice(cursor, lineEnd)
    const character = marker[0] === '`' ? '`' : '~'
    if (line.match(new RegExp(`^ {0,3}${character}{${marker.length},}\\s*$`))) return end < 0 ? source.length : end + 1
    cursor = end < 0 ? source.length : end + 1
  }
  return source.length
}

function skipCodeSpan(source, index) {
  let length = 1
  while (source[index + length] === '`') length += 1
  const close = source.indexOf('`'.repeat(length), index + length)
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

// Source-preserving scan used by validation and atomic rename operations. Its
// closing-delimiter walk is the same as Crossnote's inline wikilink rule.
export function findInternalReferences(markdown, options = {}) {
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
    const embedded = markdown.startsWith('![[', cursor) && !isEscaped(markdown, cursor + 1)
    const opening = embedded ? cursor + 1 : cursor
    if (markdown.startsWith('[[', opening) && !isEscaped(markdown, opening)) {
      let end = -1
      let index = opening + 2
      while (index < markdown.length) {
        if (markdown[index] === '\\') index += 1
        else if (markdown.startsWith(']]', index)) {
          end = index
          break
        }
        index += 1
      }
      if (end >= 0) {
        const content = markdown.slice(opening + 2, end)
        if (content) references.push({
          ...processMpeWikilink(content, options),
          content,
          embedded,
          start: cursor,
          end: end + 2,
          raw: markdown.slice(cursor, end + 2)
        })
        cursor = end + 2
        continue
      }
    }
    cursor += 1
  }
  return references
}

export function resolvedReference(reference, sourceFile, notebookRoot, options = {}) {
  const fragment = (reference.hash || '') + (reference.blockRef || '')
  const filePart = fragment ? reference.link.slice(0, -fragment.length) : reference.link
  const currentRelative = path.relative(notebookRoot, sourceFile)
  const targetRelative = resolveMpeWikilink(filePart, currentRelative, notebookRoot, options)
  return {
    ...reference,
    filePart,
    targetRelative,
    targetFile: path.resolve(notebookRoot, targetRelative)
  }
}

function rawDestination(content, options = {}) {
  const config = normalizeOptions(options)
  const splits = content.split('|')
  return (splits.length === 1
    ? splits[0]
    : config.useGitHubStylePipedLink ? splits[1] : splits[0]).trim()
}

function rawDestinationWithoutFragment(content, options = {}) {
  let destination = rawDestination(content, options)
  const hashIndex = destination.lastIndexOf('#')
  const blockIndex = destination.lastIndexOf('^')
  if (hashIndex >= 0 && blockIndex > hashIndex) destination = destination.slice(0, hashIndex)
  else if (hashIndex >= 0) destination = destination.slice(0, hashIndex)
  else if (blockIndex >= 0) destination = destination.slice(0, blockIndex)
  return destination
}

export function replaceReferencesToMovedFile(markdown, sourceFile, oldTargetFile, newTargetFile, notebookRoot, options = {}, outputSourceFile = sourceFile) {
  const references = findInternalReferences(markdown, options)
    .map((reference) => resolvedReference(reference, sourceFile, notebookRoot, options))
    .filter((reference) => path.resolve(reference.targetFile) === path.resolve(oldTargetFile))
  if (!references.length) return markdown
  let output = markdown
  for (const reference of references.reverse()) {
    const originalDestination = rawDestinationWithoutFragment(reference.content, options)
    const hadExtension = Boolean(path.extname(originalDestination)) && !/^\.\d+$/.test(path.extname(originalDestination))
    const rootRelative = originalDestination.startsWith('/')
    let nextDestination = rootRelative
      ? '/' + path.relative(notebookRoot, newTargetFile).replace(/\\/g, '/')
      : path.relative(path.dirname(outputSourceFile), newTargetFile).replace(/\\/g, '/')
    if (!hadExtension && nextDestination.endsWith(MPE_WIKILINK_DEFAULTS.targetFileExtension)) {
      nextDestination = nextDestination.slice(0, -MPE_WIKILINK_DEFAULTS.targetFileExtension.length)
    }
    const fragment = (reference.hash || '') + (reference.blockRef || '')
    const label = reference.content.includes('|') ? `|${reference.text}` : ''
    const replacement = `${reference.embedded ? '!' : ''}[[${nextDestination}${fragment}${label}]]`
    output = output.slice(0, reference.start) + replacement + output.slice(reference.end)
  }
  return output
}

export function internalReferencesToText(markdown, options = {}) {
  const references = findInternalReferences(markdown, options)
  let output = markdown
  for (const reference of references.reverse()) {
    const display = reference.content.includes('|') ? reference.text : formatMpeWikilinkDisplay(reference.text)
    output = output.slice(0, reference.start) + display + output.slice(reference.end)
  }
  return output
}

// Equivalent to Crossnote 0.9.31 note-fragments.ts. The slug generator is
// supplied by the host so the website uses the same HeadingIdGenerator port
// that it already uses for rendered heading ids.
export function extractMpeBlockIds(text) {
  const output = []
  const seen = new Set()
  const marker = /\s\^([a-zA-Z0-9_-]+)\s*$/
  for (const line of text.split('\n')) {
    const match = marker.exec(line)
    if (!match || seen.has(match[1])) continue
    seen.add(match[1])
    output.push({ id: match[1], body: line.slice(0, match.index).trim() })
  }
  return output
}

export function extractMpeHeadings(text, slugify) {
  const output = []
  let inFence = false
  let fenceMarker = ''
  for (const line of text.split('\n')) {
    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})/)
    if (fenceMatch) {
      const marker = fenceMatch[1]
      if (!inFence) {
        inFence = true
        fenceMarker = marker[0]
      } else if (marker[0] === fenceMarker) {
        inFence = false
        fenceMarker = ''
      }
      continue
    }
    if (inFence) continue
    const headingMatch = line.match(/^(#{1,6})\s+(.+?)\s*$/)
    if (!headingMatch) continue
    const headingText = headingMatch[2].replace(/\s*\{[^}]+\}\s*$/, '').trim()
    if (headingText) output.push({ level: headingMatch[1].length, text: headingText, slug: slugify(headingText) })
  }
  return output
}

export function findMpeFragmentTargetLine(text, fragment, slugify) {
  if (!fragment) return -1
  const lines = text.split('\n')
  const blockMatch = fragment.match(/\^([a-zA-Z0-9_-]+)$/)
  if (blockMatch) {
    const marker = new RegExp(`\\s\\^${blockMatch[1]}\\s*$`)
    for (let index = 0; index < lines.length; index += 1) {
      if (marker.test(lines[index])) return index
    }
  }
  for (let index = 0; index < lines.length; index += 1) {
    if (!lines[index].match(/^#{1,6}\s+/)) continue
    const attributes = lines[index].match(/\{([^}]+)\}\s*$/)?.[1]
    const explicitId = attributes?.match(/(?:^|\s)#([a-zA-Z][\w-]*)/)?.[1]
    if (explicitId === fragment) return index
  }
  for (let index = 0; index < lines.length; index += 1) {
    if (!lines[index].match(/^#{1,6}\s+/)) continue
    const heading = lines[index]
      .replace(/^#+\s+/, '')
      .replace(/\s*\{[^}]+\}\s*$/, '')
      .trim()
    if (slugify(heading) === fragment) return index
  }
  return -1
}

// Kept as a narrow compatibility export for callers/tests while the public
// meaning is now MPE's target|alias syntax, not a global article identifier.
export const parseInternalReference = processMpeWikilink

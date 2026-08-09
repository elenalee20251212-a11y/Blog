import MarkdownItAbbr from 'markdown-it-abbr'
import MarkdownItDeflist from 'markdown-it-deflist'
import MarkdownItFootnote from 'markdown-it-footnote'
import MarkdownItMark from 'markdown-it-mark'
import MarkdownItSub from 'markdown-it-sub'
import MarkdownItSup from 'markdown-it-sup'
import uslug from 'uslug'

// This is the always-on markdown-it plugin chain in Crossnote 0.9.31.
export function markdownPreviewEnhancedCore(md) {
  md.use(MarkdownItFootnote)
  md.use(MarkdownItSub)
  md.use(MarkdownItSup)
  md.use(MarkdownItDeflist)
  md.use(MarkdownItAbbr)
  md.use(MarkdownItMark)
}

// Ported from Crossnote 0.9.31 HeadingIdGenerator. VitePress itself handles
// duplicate suffixes, so this function only computes the base slug.
export function markdownPreviewEnhancedSlugify(heading) {
  const replacement = (match, capture) => {
    const sanitized = capture
      .replace(/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g, '')
      .replace(/^\s/, '')
      .replace(/\s$/, '')
      .replace(/`/g, '~')
    return (capture.match(/^\s+$/) ? '~' : sanitized)
      + (match.endsWith(' ') && !sanitized.endsWith('~') ? '~' : '')
  }

  const normalized = String(heading)
    .trim()
    .replace(/~|。/g, '')
    .replace(/``(.+?)``\s?/g, replacement)
    .replace(/`(.*?)`\s?/g, replacement)
    .replace(/(^|\s|(?!_)[\p{P}\p{S}])___([^\s_](?:[^_]*[^\s_])?)___(?=$|\s|(?!_)[\p{P}\p{S}])/gu, '$1$2')
    .replace(/(^|\s|(?!_)[\p{P}\p{S}])__([^\s_](?:[^_]*[^\s_])?)__(?=$|\s|(?!_)[\p{P}\p{S}])/gu, '$1$2')
    .replace(/(^|\s|(?!_)[\p{P}\p{S}])_([^\s_](?:[^_]*[^\s_])?)_(?=$|\s|(?!_)[\p{P}\p{S}])/gu, '$1$2')

  return uslug(normalized.replace(/\s/g, '~')).replace(/~/g, '-')
}

export function markdownPreviewEnhancedHeadingText(tokens) {
  return tokens
    .filter((token) => ['text', 'code_inline', 'math_inline'].includes(token.type))
    .map((token) => token.type === 'math_inline'
      ? `${token.meta?.openTag ?? '$'}${token.content}${token.meta?.closeTag ?? '$'}`
      : token.content)
    .join('')
}

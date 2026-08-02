import { categoryRoute, readAllArticles, readCategoryDefinitions } from '../../scripts/site-lib.mjs'
import { parseInternalReference } from '../../scripts/internal-references.mjs'

function slugify(value) {
  return value.normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u0000-\u001f\u007f-\u009f]/g, '')
    .replace(/[<>:"/\\|?*#]+/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/^(\d)/, '_$1')
    .toLowerCase()
}

function referenceTargets() {
  const targets = new Map()
  for (const article of readAllArticles()) {
    targets.set(article.id, { route: `/articles/${article.id}/`, title: String(article.frontmatter.title ?? article.id) })
  }
  for (const category of readCategoryDefinitions().definitions) {
    targets.set(category.id, { route: categoryRoute(category.path), title: category.title })
  }
  return targets
}

export function internalReferences(md) {
  md.inline.ruler.after('math_inline', 'internal_reference', (state, silent) => {
    const start = state.pos
    if (!state.src.startsWith('[[', start) || state.src[start - 1] === '!') return false
    const close = state.src.indexOf(']]', start + 2)
    if (close < 0) return false
    const reference = parseInternalReference(state.src.slice(start + 2, close))
    if (!reference) return false
    if (silent) return true

    const targets = state.env.__internalReferenceTargets ??= referenceTargets()
    const target = targets.get(reference.id)
    if (!target) throw new Error(`Internal reference [[${reference.id}]] in ${state.env.path ?? 'unknown page'} has no target.`)
    const href = target.route + (reference.fragment ? `#${slugify(reference.fragment)}` : '')
    const opening = state.push('link_open', 'a', 1)
    opening.attrSet('href', href)
    opening.attrSet('class', 'internal-reference')
    state.push('text', '', 0).content = reference.label
    state.push('link_close', 'a', -1)
    state.pos = close + 2
    return true
  })
}


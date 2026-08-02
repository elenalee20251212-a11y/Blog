import catalog from 'virtual:blog-catalog'

export function articleByPath(relativePath) {
  const match = relativePath.match(/^articles\/([^/]+)\/(?:index|([^/]+))\.md$/)
  if (!match) return undefined
  const id = match[1]
  if (match[2] && match[2] !== id) return undefined
  return catalog.articles.find((article) => article.id === id)
}

export function categoryByPath(relativePath) {
  const match = relativePath.match(/^categories\/(.+)\/(?:index|([^/]+))\.md$/)
  if (!match) return undefined
  const id = match[1]
  const leaf = id.split('/').at(-1)
  if (match[2] && match[2] !== leaf) return undefined
  return catalog.categories.find((category) => category.route === `/categories/${id}/`)
}

export function categoryById(id) {
  return catalog.categories.find((category) => category.id === id)
}

export { catalog }

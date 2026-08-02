import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import YAML from 'yaml'

export const SITE_ROOT = path.resolve(import.meta.dirname, '..')
export const CONTENT_ROOT = path.join(SITE_ROOT, 'content')
export const ARTICLE_ROOT = path.join(CONTENT_ROOT, 'articles')
export const CATEGORY_ROOT = path.join(CONTENT_ROOT, 'categories')
export const SITE_CONFIG_PATH = path.join(SITE_ROOT, 'site.yml')

export function posixPath(value) {
  return value.split(path.sep).join('/')
}

export function rebaseMarkdownResources(markdown, dynamicPage, sourceFile) {
  const dynamicDirectory = path.posix.dirname(dynamicPage)
  const sourceDirectory = posixPath(path.relative(CONTENT_ROOT, path.dirname(sourceFile)))
  const prefix = path.posix.relative(dynamicDirectory, sourceDirectory)
  return markdown.replace(/(!?\[[^\]]*\]\()([^\s)]+)((?:\s+["'][^"']*["'])?\))/g, (match, opening, target, closing) => {
    if (/^(?:[a-z]+:|#|\/)/i.test(target)) return match
    return `${opening}${path.posix.join(prefix, target)}${closing}`
  })
}

export function readSite() {
  return YAML.parse(fs.readFileSync(SITE_CONFIG_PATH, 'utf8')) ?? {}
}

function namedMarkdownFiles(root) {
  const files = []
  if (!fs.existsSync(root)) return files
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, entry.name)
    if (entry.isDirectory()) files.push(...namedMarkdownFiles(full))
    else if (entry.isFile() && entry.name === `${path.basename(path.dirname(full))}.md`) files.push(full)
  }
  return files
}

export function categorySummary(markdown) {
  const cleaned = markdown.replace(/<!--[\s\S]*?-->/g, '').trim()
  const paragraphs = cleaned.split(/\r?\n\s*\r?\n/)
  const paragraph = paragraphs.find((block) => {
    const text = block.trim()
    return text && !text.startsWith('#') && !text.startsWith('<')
  }) ?? ''
  return paragraph
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function readCategoryDefinitions() {
  const definitions = namedMarkdownFiles(CATEGORY_ROOT).map((file) => {
    const relativeDirectory = path.relative(CATEGORY_ROOT, path.dirname(file))
    const ids = relativeDirectory.split(path.sep).filter(Boolean)
    const categoryPath = ids.join('/')
    const parsed = matter(fs.readFileSync(file, 'utf8'))
    return {
      id: ids.at(-1) ?? '',
      ids,
      path: categoryPath,
      parentPath: ids.slice(0, -1).join('/'),
      depth: ids.length,
      title: String(parsed.data.title ?? ids.at(-1) ?? ''),
      order: Number(parsed.data.order ?? Number.MAX_SAFE_INTEGER),
      declaredPath: String(parsed.data.category ?? ''),
      note: String(parsed.data.summary ?? categorySummary(parsed.content)),
      file,
      frontmatter: parsed.data,
      content: parsed.content,
      children: []
    }
  })

  const byPath = new Map(definitions.map((category) => [category.path, category]))
  for (const category of definitions) {
    if (category.parentPath && byPath.has(category.parentPath)) {
      byPath.get(category.parentPath).children.push(category)
    }
  }
  const compare = (a, b) => a.order - b.order || a.title.localeCompare(b.title, 'zh-CN')
  for (const category of definitions) category.children.sort(compare)
  const roots = definitions.filter((category) => !category.parentPath).sort(compare)
  return { definitions, byPath, roots }
}

export function readArticle(id) {
  const file = path.join(ARTICLE_ROOT, id, `${id}.md`)
  if (!fs.existsSync(file)) return null
  const parsed = matter(fs.readFileSync(file, 'utf8'))
  return { id, file, frontmatter: parsed.data, content: parsed.content }
}

export function readAllArticles() {
  if (!fs.existsSync(ARTICLE_ROOT)) return []
  return fs.readdirSync(ARTICLE_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.includes('['))
    .map((entry) => readArticle(entry.name))
    .filter(Boolean)
}

export function categoryRoute(categoryPath) {
  return `/categories/${categoryPath}/`
}

function articleDate(frontmatter) {
  const raw = frontmatter.date
  if (raw instanceof Date) return raw.toISOString().slice(0, 10)
  return raw ? String(raw).slice(0, 10) : ''
}

function articleCompare(a, b) {
  const aOrder = Number.isFinite(a.order) ? a.order : Number.MAX_SAFE_INTEGER
  const bOrder = Number.isFinite(b.order) ? b.order : Number.MAX_SAFE_INTEGER
  return aOrder - bOrder || a.date.localeCompare(b.date) || a.title.localeCompare(b.title, 'zh-CN')
}

export function buildCatalogData() {
  const site = readSite()
  const taxonomy = readCategoryDefinitions()
  const articlesByCategory = new Map()

  const articles = readAllArticles().map((article) => {
    const categoryPath = String(article.frontmatter.category ?? '')
    const category = taxonomy.byPath.get(categoryPath)
    if (!category || category.depth !== 3) {
      throw new Error(`文章 ${article.id} 的 category 必须指向现有的第三级分类：${categoryPath || '空'}`)
    }
    const date = articleDate(article.frontmatter)
    const item = {
      id: article.id,
      title: String(article.frontmatter.title ?? article.id),
      date,
      order: Number(article.frontmatter.order),
      tags: Array.isArray(article.frontmatter.tags)
        ? article.frontmatter.tags.map(String)
        : article.frontmatter.tags
          ? [String(article.frontmatter.tags)]
          : [],
      route: `/articles/${article.id}/`,
      categoryPath,
      categoryRoute: categoryRoute(categoryPath),
      categoryNote: String(article.frontmatter.categoryNote ?? ''),
      lineage: category.ids.map((_, index) => {
            const pathAtDepth = category.ids.slice(0, index + 1).join('/')
            const node = taxonomy.byPath.get(pathAtDepth)
            return { id: node?.id ?? category.ids[index], title: node?.title ?? category.ids[index] }
          })
    }
    const list = articlesByCategory.get(categoryPath) ?? []
    list.push(item)
    articlesByCategory.set(categoryPath, list)
    return item
  })

  for (const list of articlesByCategory.values()) list.sort(articleCompare)

  const categories = []
  function flatten(category) {
    const route = categoryRoute(category.path)
    const categoryArticles = articlesByCategory.get(category.path) ?? []
    categories.push({
      id: category.id,
      title: category.title,
      note: category.note,
      order: category.order,
      path: category.path,
      route,
      lineage: category.ids.map((_, index) => {
        const pathAtDepth = category.ids.slice(0, index + 1).join('/')
        const node = taxonomy.byPath.get(pathAtDepth)
        return { id: node?.id ?? category.ids[index], title: node?.title ?? category.ids[index] }
      }),
      childRoutes: category.children.map((child) => categoryRoute(child.path)),
      articleIds: categoryArticles.map((article) => article.id),
      articleNotes: Object.fromEntries(
        categoryArticles.filter((article) => article.categoryNote).map((article) => [article.id, article.categoryNote])
      )
    })
    for (const child of category.children) flatten(child)
  }
  for (const root of taxonomy.roots) flatten(root)

  return {
    site,
    categories,
    articles: [...articles].sort((a, b) => b.date.localeCompare(a.date) || articleCompare(a, b)),
    generatedAt: new Date().toISOString()
  }
}

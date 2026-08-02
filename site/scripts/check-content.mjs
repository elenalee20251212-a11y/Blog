import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { ARTICLE_ROOT, readAllArticles, readCategoryDefinitions, readSite, SITE_CONFIG_PATH } from './site-lib.mjs'
import { findInternalReferences } from './internal-references.mjs'

const errors = []
const warnings = []

if (!fs.existsSync(SITE_CONFIG_PATH)) errors.push(`缺少站点配置：${SITE_CONFIG_PATH}`)
const site = readSite()
const taxonomy = readCategoryDefinitions()
const defaultCategoryPath = String(site.content?.defaultCategory ?? '')
const siblingOrders = new Map()
const categoryPathsIgnoringCase = new Map()
const articleIdsIgnoringCase = new Map()
const articles = readAllArticles()
const existingArticleIds = new Set(articles.map((article) => article.id))
const internalTargets = new Map()

function registerInternalTarget(id, owner, content) {
  const folded = id.toLocaleLowerCase('en-US')
  const existing = internalTargets.get(folded)
  if (existing) {
    errors.push(`内部引用名称不能重复：${existing.owner} 与 ${owner} 都使用 ${id}`)
    return
  }
  internalTargets.set(folded, { id, owner, content })
}

if (!defaultCategoryPath) {
  errors.push('site.yml 缺少 content.defaultCategory')
} else {
  const defaultCategory = taxonomy.byPath.get(defaultCategoryPath)
  if (!defaultCategory) errors.push(`content.defaultCategory 指向不存在的分类：${defaultCategoryPath}`)
  else if (defaultCategory.depth !== 3) errors.push(`content.defaultCategory 必须指向第三级分类：${defaultCategoryPath}`)
}

for (const category of taxonomy.definitions) {
  registerInternalTarget(category.id, `分类 ${category.path}`, category.content)
  if (!category.id || !/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/.test(category.id)) {
    errors.push(`分类目录名必须使用英文字母、数字和短横线：${category.path}`)
  }
  const foldedPath = category.path.toLocaleLowerCase('en-US')
  if (categoryPathsIgnoringCase.has(foldedPath)) errors.push(`分类路径不能只有大小写不同：${categoryPathsIgnoringCase.get(foldedPath)} 与 ${category.path}`)
  else categoryPathsIgnoringCase.set(foldedPath, category.path)
  if (category.depth < 1 || category.depth > 3) errors.push(`分类必须正好位于三级树内：${category.path}`)
  if (!category.title.trim()) errors.push(`分类缺少 title：${category.path}`)
  if (category.declaredPath !== category.path) {
    errors.push(`分类页 category 与目录不一致：${category.path}（当前为 ${category.declaredPath || '空'}）`)
  }
  if (!Number.isInteger(category.order) || category.order < 1) {
    errors.push(`分类 order 必须是正整数：${category.path}`)
  }
  if (category.parentPath && !taxonomy.byPath.has(category.parentPath)) {
    errors.push(`分类缺少父级页面：${category.path}`)
  }
  if (category.depth < 3 && category.children.length === 0) {
    errors.push(`一级、二级分类必须包含下级分类：${category.path}`)
  }
  if (category.depth === 3 && category.children.length > 0) {
    errors.push(`三级系列不能再包含下级分类：${category.path}`)
  }
  const siblingKey = category.parentPath
  const orders = siblingOrders.get(siblingKey) ?? new Map()
  if (orders.has(category.order)) {
    errors.push(`同级分类 order 重复：${orders.get(category.order)} 与 ${category.path}`)
  } else {
    orders.set(category.order, category.path)
  }
  siblingOrders.set(siblingKey, orders)
}

const categoryArticleCounts = new Map()
const articleOrdersByCategory = new Map()
for (const entry of fs.readdirSync(ARTICLE_ROOT, { withFileTypes: true }).filter((item) => item.isDirectory() && !item.name.includes('['))) {
  const articleFile = path.join(ARTICLE_ROOT, entry.name, `${entry.name}.md`)
  if (!fs.existsSync(articleFile)) errors.push(`文章目录缺少同名 Markdown 文件：${entry.name}`)
}
for (const article of articles) {
  const id = article.id
  const data = article.frontmatter
  const categoryPath = String(data.category ?? '')
  const category = taxonomy.byPath.get(categoryPath)
  registerInternalTarget(id, `文章 ${id}`, article.content)

  if (!/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/.test(id)) errors.push(`文章文件名必须使用英文字母、数字和短横线：${id}`)
  const foldedId = id.toLocaleLowerCase('en-US')
  if (articleIdsIgnoringCase.has(foldedId)) errors.push(`文章文件名不能只有大小写不同：${articleIdsIgnoringCase.get(foldedId)} 与 ${id}`)
  else articleIdsIgnoringCase.set(foldedId, id)
  if (data.articleId !== id) errors.push(`文章 ${id} 的 articleId 必须与文件夹名一致`)
  if (!String(data.title ?? '').trim()) errors.push(`文章 ${id} 缺少 title`)
  if (!categoryPath) errors.push(`文章 ${id} 缺少 category`)
  else if (!category) errors.push(`文章 ${id} 指向不存在的分类：${categoryPath}`)
  else if (category.depth !== 3) errors.push(`文章 ${id} 必须归入第三级分类：${categoryPath}`)
  else categoryArticleCounts.set(categoryPath, (categoryArticleCounts.get(categoryPath) ?? 0) + 1)
  if (data.order !== undefined) {
    if (!Number.isInteger(data.order) || data.order < 1) {
      errors.push(`文章 ${id} 的 order 必须是正整数`)
    } else if (categoryPath) {
      const orders = articleOrdersByCategory.get(categoryPath) ?? new Map()
      if (orders.has(data.order)) {
        errors.push(`同一系列的文章 order 重复：${orders.get(data.order)} 与 ${id}`)
      } else {
        orders.set(data.order, id)
      }
      articleOrdersByCategory.set(categoryPath, orders)
    }
  }

  const localTargets = [...article.content.matchAll(/!?\[[^\]]*\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g)]
  for (const match of localTargets) {
    const raw = match[1]
    if (/^(?:[a-z]+:|#|\/)/i.test(raw)) continue
    let decoded = raw
    try { decoded = decodeURIComponent(raw) } catch {}
    const articleDirectory = path.dirname(article.file)
    const target = path.resolve(articleDirectory, decoded)
    if (!target.startsWith(articleDirectory)) {
      errors.push(`文章 ${id} 的本地链接越出文章目录：${raw}`)
    } else if (!fs.existsSync(target) && !/\.md(?:$|#)/i.test(decoded)) {
      warnings.push(`文章 ${id} 的本地资源不存在：${raw}`)
    }
  }
}

function markdownHeadings(markdown) {
  const withoutFences = markdown.replace(/^ {0,3}(`{3,}|~{3,})[^\n]*\n[\s\S]*?^ {0,3}\1\s*$/gm, '')
  return new Set([...withoutFences.matchAll(/^#{1,6}\s+(.+?)\s*#*\s*$/gm)]
    .map((match) => match[1].replace(/[*_`~]/g, '').trim()))
}

function checkInternalReferences(owner, markdown) {
  for (const reference of findInternalReferences(markdown)) {
    const target = internalTargets.get(reference.id.toLocaleLowerCase('en-US'))
    if (!target) {
      errors.push(`${owner} 引用了不存在的文章或分类：${reference.id}`)
      continue
    }
    if (target.id !== reference.id) {
      errors.push(`${owner} 的内部引用大小写不正确：${reference.id}；应为 ${target.id}`)
    }
    if (reference.fragment && !markdownHeadings(target.content).has(reference.fragment)) {
      errors.push(`${owner} 引用了 ${reference.id} 中不存在的标题：${reference.fragment}`)
    }
  }
}

function checkArticleLinks(owner, markdown) {
  for (const match of markdown.matchAll(/\/articles\/([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)\//g)) {
    if (!existingArticleIds.has(match[1])) {
      errors.push(`${owner} 链接到不存在的文章：${match[1]}`)
    }
  }
}

for (const article of articles) checkArticleLinks(`文章 ${article.id}`, article.content)
for (const category of taxonomy.definitions) checkArticleLinks(`分类 ${category.path}`, category.content)
for (const article of articles) checkInternalReferences(`文章 ${article.id}`, article.content)
for (const category of taxonomy.definitions) checkInternalReferences(`分类 ${category.path}`, category.content)

for (const category of taxonomy.definitions.filter((item) => item.depth === 3)) {
  if (category.path !== defaultCategoryPath && !categoryArticleCounts.has(category.path)) warnings.push(`三级系列暂时没有文章：${category.path}`)
}

const brand = site.brand ?? {}
if (brand.image) {
  if (typeof brand.image !== 'string' || !brand.image.startsWith('/') || brand.image.includes('..')) {
    errors.push('brand.image 必须是 content/public 下以 / 开头的站内路径，且不能包含 ..')
  } else {
    const brandFile = path.join(path.dirname(ARTICLE_ROOT), 'public', brand.image.replace(/^\/+/, ''))
    if (!fs.existsSync(brandFile)) errors.push(`头像图片不存在：${brandFile}`)
  }
  if (!String(brand.imageAlt ?? '').trim()) errors.push('配置 brand.image 时必须填写 imageAlt')
}
if (brand.imageFit && !['contain', 'cover'].includes(brand.imageFit)) {
  errors.push('brand.imageFit 只能是 contain 或 cover')
}

for (const settingName of ['contentSize', 'homeSize']) {
  const fontSize = site.typography?.[settingName] ?? {}
  for (const key of ['mobile', 'desktop']) {
    const value = fontSize[key]
    if (!Number.isFinite(value) || value < 13 || value > 22) {
      errors.push(`typography.${settingName}.${key} 必须是 13 到 22 之间的数字`)
    }
  }
  if (Number.isFinite(fontSize.mobile) && Number.isFinite(fontSize.desktop) && fontSize.mobile > fontSize.desktop) {
    errors.push(`typography.${settingName}.mobile 不能大于 desktop`)
  }
}

for (const warning of warnings) console.warn(`WARN: ${warning}`)
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`)
  console.error(`\n内容检查失败：${errors.length} 个错误，${warnings.length} 个警告。`)
  process.exit(1)
}
console.log(`内容检查通过：${taxonomy.definitions.length} 个分类，${fs.readdirSync(ARTICLE_ROOT, { withFileTypes: true }).filter((entry) => entry.isDirectory() && !entry.name.includes('[')).length} 篇文章，${warnings.length} 个警告。`)

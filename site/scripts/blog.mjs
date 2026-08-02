import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { parseArgs } from 'node:util'
import { createInterface } from 'node:readline/promises'
import matter from 'gray-matter'
import { notifyBlogDevServer } from './dev-server.mjs'
import {
  ARTICLE_ROOT,
  CATEGORY_ROOT,
  CONTENT_ROOT,
  readAllArticles,
  readCategoryDefinitions,
  readSite,
  SITE_CONFIG_PATH,
  SITE_ROOT
} from './site-lib.mjs'

const ID_RE = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/
const CHECK_SCRIPT = path.join(SITE_ROOT, 'scripts', 'check-content.mjs')
const TRASH_ROOT = path.join(SITE_ROOT, '.trash')
const DRAFT_ROOT = path.join(CONTENT_ROOT, 'drafts')
const ARTICLE_ROUTES_FILE = path.join(ARTICLE_ROOT, '[__article_page]', 'version.mjs')
const CATEGORY_ROUTES_FILE = path.join(CATEGORY_ROOT, '[__category_path]', 'version.mjs')
const ARTICLE_PATHS_FILE = path.join(ARTICLE_ROOT, '[__article_page]', 'index.paths.mjs')
const CATEGORY_PATHS_FILE = path.join(CATEGORY_ROOT, '[__category_path]', 'index.paths.mjs')
const ARTICLE_TEMPLATE_FILE = path.join(SITE_ROOT, 'scaffolds', 'article.md')
const DRAFT_TEMPLATE_FILE = path.join(SITE_ROOT, 'scaffolds', 'draft.md')
const CATEGORY_TEMPLATE_FILE = path.join(SITE_ROOT, 'scaffolds', 'category.md')
let pendingDevNotification = Promise.resolve()

function fail(message) {
  throw new Error(message)
}

function today() {
  return new Date().toISOString().slice(0, 10)
}

function yamlString(value) {
  return JSON.stringify(String(value))
}

function validateId(id, label = '名称') {
  if (!ID_RE.test(id)) fail(`${label}只能使用英文字母、数字和短横线：${id}`)
}

function equalPathIgnoringCase(left, right) {
  return path.resolve(left).toLocaleLowerCase('en-US') === path.resolve(right).toLocaleLowerCase('en-US')
}

function conflictingId(items, id, excluded = '') {
  const folded = id.toLocaleLowerCase('en-US')
  return items.find((item) => item !== excluded && item.toLocaleLowerCase('en-US') === folded)
}

function ensureArticleIdAvailable(id, excluded = '') {
  const ids = readAllArticles().map((article) => article.id)
  const conflict = conflictingId(ids, id, excluded)
  if (conflict) fail(`文章文件名与现有文章冲突：${id} 与 ${conflict}。项目不允许仅大小写不同的两个名称。`)
}

function namedArticleFile(id) {
  return path.join(ARTICLE_ROOT, id, `${id}.md`)
}

function namedDraftFile(id) {
  return path.join(DRAFT_ROOT, id, `${id}.md`)
}

function collectMarkdown(root) {
  const result = []
  if (!fs.existsSync(root)) return result
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const file = path.join(root, entry.name)
    if (entry.isDirectory()) result.push(...collectMarkdown(file))
    else if (entry.isFile() && entry.name.endsWith('.md')) result.push(file)
  }
  return result
}

function replaceSetting(source, key, value) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) fail(`文件缺少开头设置区，无法修改 ${key}`)
  const line = `${key}: ${value}`
  const keyPattern = new RegExp(`^${key}:.*$`, 'm')
  const header = keyPattern.test(match[1])
    ? match[1].replace(keyPattern, line)
    : `${match[1]}\n${line}`
  return source.replace(match[0], `---\n${header}\n---`)
}

function replaceFirstHeading(source, title) {
  const end = source.indexOf('\n---', 3)
  if (end < 0) return source
  const bodyStart = source.indexOf('\n', end + 4)
  const head = source.slice(0, bodyStart + 1)
  const body = source.slice(bodyStart + 1)
  return head + (body.match(/^# .+$/m) ? body.replace(/^# .+$/m, `# ${title}`) : body)
}

class Transaction {
  constructor() {
    this.undo = []
  }

  mkdir(directory) {
    if (fs.existsSync(directory)) return
    fs.mkdirSync(directory, { recursive: true })
    this.undo.push(() => {
      if (fs.existsSync(directory) && fs.readdirSync(directory).length === 0) fs.rmdirSync(directory)
    })
  }

  write(file, content) {
    const existed = fs.existsSync(file)
    const before = existed ? fs.readFileSync(file) : null
    fs.writeFileSync(file, content, 'utf8')
    this.undo.push(() => {
      if (existed) fs.writeFileSync(file, before)
      else if (fs.existsSync(file)) fs.unlinkSync(file)
    })
  }

  move(source, target) {
    fs.mkdirSync(path.dirname(target), { recursive: true })
    const caseOnly = source !== target && equalPathIgnoringCase(source, target)
    const temporary = caseOnly
      ? path.join(path.dirname(source), `.case-rename-${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}`)
      : ''
    if (caseOnly) this.renameWithRetry(source, temporary)
    const actualSource = temporary || source
    try {
      this.renameWithRetry(actualSource, target)
    } catch (error) {
      if (temporary && fs.existsSync(temporary)) this.renameWithRetry(temporary, source)
      throw error
    }
    this.undo.push(() => {
      if (!fs.existsSync(target)) return
      if (!caseOnly) return fs.renameSync(target, source)
      const undoTemporary = `${temporary}-undo`
      this.renameWithRetry(target, undoTemporary)
      this.renameWithRetry(undoTemporary, source)
    })
  }

  renameWithRetry(source, target) {
    let lastError
    for (let attempt = 0; attempt < 12; attempt += 1) {
      try {
        fs.renameSync(source, target)
        lastError = null
        break
      } catch (error) {
        lastError = error
        if (!['EPERM', 'EBUSY', 'EACCES'].includes(error.code)) throw error
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 100)
      }
    }
    if (lastError) throw lastError
  }

  rollback() {
    for (const action of [...this.undo].reverse()) {
      try { action() } catch {}
    }
  }
}

function runContentCheck(transaction) {
  const result = spawnSync(process.execPath, [CHECK_SCRIPT], {
    cwd: SITE_ROOT,
    encoding: 'utf8',
    stdio: 'pipe'
  })
  if (result.status !== 0) {
    transaction.rollback()
    const details = [result.stdout, result.stderr].filter(Boolean).join('\n').trim()
    fail(`操作没有通过内容检查，已经恢复原文件。\n${details}`)
  }
  if (result.stderr.trim()) process.stderr.write(result.stderr)
  process.stdout.write(result.stdout)
  const now = new Date()
  for (const file of [ARTICLE_PATHS_FILE, CATEGORY_PATHS_FILE]) {
    if (fs.existsSync(file)) fs.utimesSync(file, now, now)
  }
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 60)
  const dependencyTime = new Date()
  for (const file of [ARTICLE_ROUTES_FILE, CATEGORY_ROUTES_FILE]) {
    if (fs.existsSync(file)) fs.utimesSync(file, dependencyTime, dependencyTime)
  }
  if (process.env.BLOG_BATCH_MODE === '1') return
  pendingDevNotification = new Promise((resolve) => setTimeout(resolve, 350))
    .then(() => notifyBlogDevServer())
    .catch(() => null)
}

function applyLinkReplacement(transaction, oldRoute, newRoute, excluded = new Set()) {
  let changed = 0
  for (const file of collectMarkdown(CONTENT_ROOT)) {
    if (excluded.has(path.resolve(file))) continue
    const before = fs.readFileSync(file, 'utf8')
    const after = before.split(oldRoute).join(newRoute)
    if (after !== before) {
      transaction.write(file, after)
      changed += 1
    }
  }
  return changed
}

function inboundLinks(route, excludedDirectory = '') {
  const matches = []
  for (const file of collectMarkdown(CONTENT_ROOT)) {
    if (excludedDirectory && path.resolve(file).startsWith(path.resolve(excludedDirectory) + path.sep)) continue
    if (fs.readFileSync(file, 'utf8').includes(route)) matches.push(path.relative(SITE_ROOT, file))
  }
  return matches
}

function articleById(id) {
  const article = readAllArticles().find((item) => item.id === id)
  if (!article) fail(`找不到文章：${id}`)
  return article
}

function categoryByPath(categoryPath) {
  const taxonomy = readCategoryDefinitions()
  const category = taxonomy.byPath.get(categoryPath)
  if (!category) fail(`找不到分类：${categoryPath}`)
  return { category, taxonomy }
}

function defaultCategoryPath() {
  const categoryPath = String(readSite().content?.defaultCategory ?? '')
  if (!categoryPath) fail('site.yml 缺少 content.defaultCategory。')
  const { category } = categoryByPath(categoryPath)
  if (category.depth !== 3) fail('site.yml 中的 content.defaultCategory 必须指向第三级分类。')
  return categoryPath
}

function replaceDefaultCategory(source, categoryPath) {
  if (!/^[A-Za-z0-9/-]+$/.test(categoryPath)) fail(`默认分类路径格式错误：${categoryPath}`)
  const replaced = source.replace(/(^\s*defaultCategory:\s*)[^\r\n]+/m, `$1${categoryPath}`)
  if (replaced === source) fail('site.yml 中找不到 content.defaultCategory。')
  return replaced
}

function articleTemplate({ title, id, category, tags, date }) {
  const tagBlock = tags.length ? `tags:\n${tags.map((tag) => `  - ${tag}`).join('\n')}\n` : ''
  return fs.readFileSync(ARTICLE_TEMPLATE_FILE, 'utf8')
    .replaceAll('{{title}}', yamlString(title))
    .replaceAll('{{date}}', date)
    .replaceAll('{{tags}}', tagBlock)
    .replaceAll('{{articleId}}', id)
    .replaceAll('{{category}}', category)
}

function draftTemplate({ title, id, tags, date }) {
  const tagBlock = tags.length ? `tags:\n${tags.map((tag) => `  - ${tag}`).join('\n')}\n` : ''
  return fs.readFileSync(DRAFT_TEMPLATE_FILE, 'utf8')
    .replaceAll('{{title}}', yamlString(title))
    .replaceAll('{{date}}', date)
    .replaceAll('{{tags}}', tagBlock)
    .replaceAll('{{draftId}}', id)
}

function categoryTemplate({ title, category, order, description }) {
  return fs.readFileSync(CATEGORY_TEMPLATE_FILE, 'utf8')
    .replaceAll('{{titleYaml}}', yamlString(title))
    .replaceAll('{{title}}', title)
    .replaceAll('{{category}}', category)
    .replaceAll('{{order}}', String(order))
    .replaceAll('{{description}}', description || '<!-- 在这里填写分类说明。 -->')
}

function createArticle({ title, id, category, tags = [], date = today() }) {
  validateId(id, '文章文件名')
  ensureArticleIdAvailable(id)
  const { category: target } = categoryByPath(category)
  if (target.depth !== 3) fail('文章只能放入第三级分类。')
  const directory = path.join(ARTICLE_ROOT, id)
  const file = namedArticleFile(id)
  if (fs.existsSync(directory)) fail(`文章已经存在：${id}`)
  const transaction = new Transaction()
  try {
    transaction.mkdir(directory)
    transaction.write(file, articleTemplate({ title, id, category, tags, date }))
    runContentCheck(transaction)
  } catch (error) {
    transaction.rollback()
    throw error
  }
  console.log(`\n文章已建立：${path.relative(SITE_ROOT, file)}`)
  console.log(`本地网址：http://127.0.0.1:5173/articles/${id}/`)
}

function createDraft({ title, id, tags = [], date = today() }) {
  validateId(id, '草稿文件名')
  ensureArticleIdAvailable(id)
  const directory = path.join(DRAFT_ROOT, id)
  const file = namedDraftFile(id)
  if (fs.existsSync(directory) || fs.existsSync(path.join(ARTICLE_ROOT, id))) fail(`草稿或文章已经存在：${id}`)
  const transaction = new Transaction()
  try {
    transaction.mkdir(directory)
    transaction.write(file, draftTemplate({ title, id, tags, date }))
  } catch (error) {
    transaction.rollback()
    throw error
  }
  console.log(`\n草稿已建立：${path.relative(SITE_ROOT, file)}`)
  console.log('草稿不会出现在本地网站或正式构建中。')
}

function readDraft(id) {
  validateId(id, '草稿文件名')
  const file = namedDraftFile(id)
  if (!fs.existsSync(file)) fail(`找不到草稿：${id}`)
  const parsed = matter(fs.readFileSync(file, 'utf8'))
  if (String(parsed.data.draftId ?? '') !== id) fail(`草稿中的 draftId 必须与文件名相同：${file}`)
  if (!String(parsed.data.title ?? '').trim()) fail(`草稿缺少标题：${file}`)
  return { file, parsed }
}

function printDrafts() {
  if (!fs.existsSync(DRAFT_ROOT)) return console.log('没有草稿。')
  const directories = fs.readdirSync(DRAFT_ROOT, { withFileTypes: true }).filter((entry) => entry.isDirectory())
  const drafts = directories.map((entry) => {
    try {
      const draft = readDraft(entry.name)
      return { id: entry.name, title: String(draft.parsed.data.title) }
    } catch (error) {
      return { id: entry.name, title: `文件有误：${error.message}` }
    }
  })
  if (!drafts.length) return console.log('没有草稿。')
  for (const draft of drafts) console.log(`${draft.title}  [${draft.id}]`)
}

function publishDraft({ id, category }) {
  const draft = readDraft(id)
  const { category: targetCategory } = categoryByPath(category)
  if (targetCategory.depth !== 3) fail('文章只能发布到第三级分类。')
  const targetDirectory = path.join(ARTICLE_ROOT, id)
  if (fs.existsSync(targetDirectory)) fail(`同名文章已经存在：${id}`)
  const sourceDirectory = path.dirname(draft.file)
  const transaction = new Transaction()
  try {
    transaction.move(sourceDirectory, targetDirectory)
    const movedDraftFile = path.join(targetDirectory, `${id}.md`)
    let source = fs.readFileSync(movedDraftFile, 'utf8')
    source = source.replace(/^draftId:.*\r?\n/m, '')
    source = replaceSetting(source, 'articleId', id)
    source = replaceSetting(source, 'category', category)
    transaction.write(movedDraftFile, source)
    runContentCheck(transaction)
  } catch (error) {
    transaction.rollback()
    throw error
  }
  console.log(`\n草稿已发布：content${path.sep}articles${path.sep}${id}${path.sep}${id}.md`)
  console.log(`本地网址：http://127.0.0.1:5173/articles/${id}/`)
}

function removeDraft({ id, confirmed }) {
  const draft = readDraft(id)
  if (!confirmed) fail(`移除草稿需要确认。再次运行 node blog.mjs discard ${id} --yes 可以确认该操作。`)
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const trash = path.join(TRASH_ROOT, 'drafts', `${id}-${stamp}`)
  const transaction = new Transaction()
  transaction.move(path.dirname(draft.file), trash)
  console.log(`\n草稿已移入可恢复目录：${path.relative(SITE_ROOT, trash)}`)
}

function moveArticle({ id, category }) {
  const article = articleById(id)
  const { category: target } = categoryByPath(category)
  if (target.depth !== 3) fail('文章只能放入第三级分类。')
  const before = fs.readFileSync(article.file, 'utf8')
  if (String(article.frontmatter.category) === category) fail('文章已经在这个分类中。')
  let after = replaceSetting(before, 'category', category)
  const currentOrder = Number(article.frontmatter.order)
  let adjustedOrder = null
  if (Number.isInteger(currentOrder)) {
    const used = readAllArticles()
      .filter((item) => item.id !== id && String(item.frontmatter.category) === category)
      .map((item) => Number(item.frontmatter.order))
      .filter(Number.isInteger)
    if (used.includes(currentOrder)) {
      adjustedOrder = Math.max(0, ...used) + 1
      after = replaceSetting(after, 'order', adjustedOrder)
    }
  }
  const transaction = new Transaction()
  transaction.write(article.file, after)
  runContentCheck(transaction)
  console.log(`\n文章分类已修改：${id} → ${category}`)
  console.log('文章文件、图片和网址均未移动。')
  if (adjustedOrder) console.log(`原顺序与目标分类重复，已自动改为 ${adjustedOrder}。`)
}

function renameArticle({ id, newId }) {
  const article = articleById(id)
  validateId(newId, '新文章文件名')
  if (id === newId) fail('新文章文件名与原名相同。')
  ensureArticleIdAvailable(newId, id)
  const oldDirectory = path.dirname(article.file)
  const newDirectory = path.join(ARTICLE_ROOT, newId)
  if (fs.existsSync(newDirectory) && !equalPathIgnoringCase(oldDirectory, newDirectory)) fail(`目标文章已经存在：${newId}`)
  const transaction = new Transaction()
  try {
    transaction.move(oldDirectory, newDirectory)
    const movedOldFile = path.join(newDirectory, `${id}.md`)
    const newFile = path.join(newDirectory, `${newId}.md`)
    transaction.move(movedOldFile, newFile)
    transaction.write(newFile, replaceSetting(fs.readFileSync(newFile, 'utf8'), 'articleId', newId))
    const links = applyLinkReplacement(transaction, `/articles/${id}/`, `/articles/${newId}/`, new Set([path.resolve(newFile)]))
    runContentCheck(transaction)
    console.log(`\n文章已重命名：${id} → ${newId}`)
    console.log(`已更新 ${links} 个包含旧文章网址的 Markdown 文件。`)
  } catch (error) {
    transaction.rollback()
    throw error
  }
}

function removeArticle({ id, confirmed }) {
  const article = articleById(id)
  const route = `/articles/${id}/`
  const links = inboundLinks(route, path.dirname(article.file))
  if (links.length) fail(`以下文件仍链接到这篇文章，请先修改链接：\n${links.map((file) => `- ${file}`).join('\n')}`)
  if (!confirmed) fail(`移除文章需要确认。再次运行 node blog.mjs remove ${id} --yes 可以确认该操作。`)
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const trash = path.join(TRASH_ROOT, 'articles', `${id}-${stamp}`)
  const transaction = new Transaction()
  transaction.move(path.dirname(article.file), trash)
  runContentCheck(transaction)
  console.log(`\n文章已移入可恢复目录：${path.relative(SITE_ROOT, trash)}`)
}

function nextOrder(parentPath) {
  const { definitions } = readCategoryDefinitions()
  const orders = definitions.filter((item) => item.parentPath === parentPath).map((item) => item.order)
  return Math.max(0, ...orders.filter(Number.isFinite)) + 1
}

function createCategory({ parent, id, title, description = '' }) {
  validateId(id, '分类文件名')
  const { category: parentCategory } = categoryByPath(parent)
  if (parentCategory.depth !== 2) fail('这个命令只能在现有二级分类下建立三级分类。需要同时建立一级分类和二级分类时，请使用 category branch。')
  const categoryPath = `${parent}/${id}`
  const directory = path.join(CATEGORY_ROOT, ...categoryPath.split('/'))
  const file = path.join(directory, `${id}.md`)
  if (fs.existsSync(directory)) fail(`分类已经存在：${categoryPath}`)
  const order = nextOrder(parent)
  const transaction = new Transaction()
  transaction.mkdir(directory)
  transaction.write(file, categoryTemplate({ title, category: categoryPath, order, description }))
  runContentCheck(transaction)
  console.log(`\n分类已建立：${categoryPath}`)
  console.log(`分类说明：${path.relative(SITE_ROOT, file)}`)
  console.log(`排列顺序已自动设为 ${order}。`)
}

function createCategoryBranch({ rootId, rootTitle, subjectId, subjectTitle, seriesId, seriesTitle }) {
  for (const [id, label] of [[rootId, '一级分类文件名'], [subjectId, '二级分类文件名'], [seriesId, '三级分类文件名']]) validateId(id, label)
  const taxonomy = readCategoryDefinitions()
  const rootPath = rootId
  const subjectPath = `${rootId}/${subjectId}`
  const seriesPath = `${subjectPath}/${seriesId}`
  if (taxonomy.byPath.has(rootPath)) fail(`一级分类已经存在：${rootPath}`)
  const transaction = new Transaction()
  try {
    const rootDirectory = path.join(CATEGORY_ROOT, rootId)
    const subjectDirectory = path.join(rootDirectory, subjectId)
    const seriesDirectory = path.join(subjectDirectory, seriesId)
    transaction.mkdir(rootDirectory)
    transaction.write(path.join(rootDirectory, `${rootId}.md`), categoryTemplate({ title: rootTitle, category: rootPath, order: nextOrder(''), description: '' }))
    transaction.mkdir(subjectDirectory)
    transaction.write(path.join(subjectDirectory, `${subjectId}.md`), categoryTemplate({ title: subjectTitle, category: subjectPath, order: 1, description: '' }))
    transaction.mkdir(seriesDirectory)
    transaction.write(path.join(seriesDirectory, `${seriesId}.md`), categoryTemplate({ title: seriesTitle, category: seriesPath, order: 1, description: '' }))
    runContentCheck(transaction)
    console.log(`\n三级分类分支已建立：${seriesPath}`)
    console.log(`三级分类说明：${path.relative(SITE_ROOT, path.join(seriesDirectory, `${seriesId}.md`))}`)
  } catch (error) {
    transaction.rollback()
    throw error
  }
}

function createSubjectBranch({ parent, subjectId, subjectTitle, seriesId, seriesTitle }) {
  const { category: root } = categoryByPath(parent)
  if (root.depth !== 1) fail('新的二级分类必须建立在一级分类下面。')
  validateId(subjectId, '二级分类文件名')
  validateId(seriesId, '三级分类文件名')
  const subjectPath = `${parent}/${subjectId}`
  const seriesPath = `${subjectPath}/${seriesId}`
  const taxonomy = readCategoryDefinitions()
  if (taxonomy.byPath.has(subjectPath)) fail(`二级分类已经存在：${subjectPath}`)
  const transaction = new Transaction()
  try {
    const subjectDirectory = path.join(CATEGORY_ROOT, ...subjectPath.split('/'))
    const seriesDirectory = path.join(subjectDirectory, seriesId)
    transaction.mkdir(subjectDirectory)
    transaction.write(path.join(subjectDirectory, `${subjectId}.md`), categoryTemplate({ title: subjectTitle, category: subjectPath, order: nextOrder(parent), description: '' }))
    transaction.mkdir(seriesDirectory)
    transaction.write(path.join(seriesDirectory, `${seriesId}.md`), categoryTemplate({ title: seriesTitle, category: seriesPath, order: 1, description: '' }))
    runContentCheck(transaction)
    console.log(`\n二级分类和首个三级分类已建立：${seriesPath}`)
    console.log(`三级分类说明：${path.relative(SITE_ROOT, path.join(seriesDirectory, `${seriesId}.md`))}`)
  } catch (error) {
    transaction.rollback()
    throw error
  }
}

function renameCategoryTitle({ categoryPath, title }) {
  const { category } = categoryByPath(categoryPath)
  const before = fs.readFileSync(category.file, 'utf8')
  let after = replaceSetting(before, 'title', yamlString(title))
  after = replaceFirstHeading(after, title)
  const transaction = new Transaction()
  transaction.write(category.file, after)
  runContentCheck(transaction)
  console.log(`\n分类显示名称已改为：${title}`)
  console.log(`分类说明：${path.relative(SITE_ROOT, category.file)}`)
  console.log('分类路径、文章文件和网址均未改变。')
}

function relocateCategory({ source, parent, newId }) {
  const { category, taxonomy } = categoryByPath(source)
  validateId(newId, '新分类文件名')
  let parentCategory = null
  if (parent) {
    parentCategory = taxonomy.byPath.get(parent)
    if (!parentCategory) fail(`找不到新的上级分类：${parent}`)
    if (parentCategory.depth !== category.depth - 1) fail('新的上级分类层级不正确。')
    if (parent === source || parent.startsWith(`${source}/`)) fail('不能把分类移动到自己的下级分类中。')
  } else if (category.depth !== 1) {
    fail('只有一级分类可以没有上级分类。')
  }
  const targetPath = parent ? `${parent}/${newId}` : newId
  if (source === targetPath) fail('新分类路径与原路径相同。')
  const caseConflict = conflictingId(taxonomy.definitions.map((item) => item.path), targetPath, source)
  if (caseConflict) fail(`目标分类与现有分类冲突：${targetPath} 与 ${caseConflict}`)
  if (taxonomy.byPath.has(targetPath) && targetPath !== source) fail(`目标分类已经存在：${targetPath}`)
  const currentDefault = defaultCategoryPath()
  const oldDirectory = path.dirname(category.file)
  const newDirectory = path.join(CATEGORY_ROOT, ...targetPath.split('/'))
  const transaction = new Transaction()
  try {
    transaction.move(oldDirectory, newDirectory)
    const movedOldFile = path.join(newDirectory, `${category.id}.md`)
    const newFile = path.join(newDirectory, `${newId}.md`)
    if (movedOldFile !== newFile) transaction.move(movedOldFile, newFile)

    for (const file of collectMarkdown(newDirectory)) {
      const parsed = matter(fs.readFileSync(file, 'utf8'))
      const oldValue = String(parsed.data.category ?? '')
      if (oldValue === source || oldValue.startsWith(`${source}/`)) {
        transaction.write(file, replaceSetting(fs.readFileSync(file, 'utf8'), 'category', targetPath + oldValue.slice(source.length)))
      }
    }
    for (const article of readAllArticles()) {
      const oldValue = String(article.frontmatter.category ?? '')
      if (oldValue === source || oldValue.startsWith(`${source}/`)) {
        transaction.write(article.file, replaceSetting(fs.readFileSync(article.file, 'utf8'), 'category', targetPath + oldValue.slice(source.length)))
      }
    }
    if (currentDefault === source || currentDefault.startsWith(`${source}/`)) {
      const nextDefault = targetPath + currentDefault.slice(source.length)
      transaction.write(SITE_CONFIG_PATH, replaceDefaultCategory(fs.readFileSync(SITE_CONFIG_PATH, 'utf8'), nextDefault))
    }
    const links = applyLinkReplacement(transaction, `/categories/${source}/`, `/categories/${targetPath}/`)
    runContentCheck(transaction)
    console.log(`\n分类路径已修改：${source} → ${targetPath}`)
    console.log(`已同步下级分类、所属文章和 ${links} 个 Markdown 链接。`)
  } catch (error) {
    transaction.rollback()
    throw error
  }
}

function mergeCategory({ source, target, confirmed }) {
  if (!confirmed) fail('合并操作需要确认，请在命令末尾添加 --yes。')
  const { category: sourceCategory } = categoryByPath(source)
  const { category: targetCategory } = categoryByPath(target)
  if (sourceCategory.depth !== 3 || targetCategory.depth !== 3) fail('目前只允许合并两个第三级分类。')
  if (source === target) fail('来源分类和目标分类不能相同。')
  const transaction = new Transaction()
  try {
    const allArticles = readAllArticles()
    const targetOrders = allArticles
      .filter((item) => String(item.frontmatter.category) === target)
      .map((item) => Number(item.frontmatter.order))
      .filter(Number.isInteger)
    let next = Math.max(0, ...targetOrders) + 1
    const sourceArticles = allArticles
      .filter((item) => String(item.frontmatter.category) === source)
      .sort((a, b) => Number(a.frontmatter.order ?? Number.MAX_SAFE_INTEGER) - Number(b.frontmatter.order ?? Number.MAX_SAFE_INTEGER) || a.id.localeCompare(b.id))
    for (const article of sourceArticles) {
      let after = replaceSetting(fs.readFileSync(article.file, 'utf8'), 'category', target)
      after = replaceSetting(after, 'order', next++)
      transaction.write(article.file, after)
    }
    if (defaultCategoryPath() === source) {
      transaction.write(SITE_CONFIG_PATH, replaceDefaultCategory(fs.readFileSync(SITE_CONFIG_PATH, 'utf8'), target))
    }
    const links = applyLinkReplacement(transaction, `/categories/${source}/`, `/categories/${target}/`)
    const stamp = new Date().toISOString().replace(/[:.]/g, '-')
    const trash = path.join(TRASH_ROOT, 'categories', `${source.replaceAll('/', '__')}-${stamp}`)
    transaction.move(path.dirname(sourceCategory.file), trash)
    runContentCheck(transaction)
    console.log(`\n分类已合并：${source} → ${target}`)
    console.log(`文章已接在保留分类的末尾；原分类已移入 ${path.relative(SITE_ROOT, trash)}；更新了 ${links} 个 Markdown 链接。`)
  } catch (error) {
    transaction.rollback()
    throw error
  }
}

function removeCategory({ categoryPath, confirmed, prune }) {
  const { category, taxonomy } = categoryByPath(categoryPath)
  const configuredDefault = defaultCategoryPath()
  if (configuredDefault === categoryPath || configuredDefault.startsWith(`${categoryPath}/`)) {
    fail(`不能移除新文章的默认分类 ${configuredDefault}。请先修改 site.yml 中的 content.defaultCategory。`)
  }
  const articles = readAllArticles().filter((item) => String(item.frontmatter.category).startsWith(categoryPath))
  if (category.children.length) fail('分类仍有下级分类，不能删除。')
  if (articles.length) fail(`分类仍有 ${articles.length} 篇文章，不能删除。`)
  const pruned = [category]
  let highest = category
  let parentPath = category.parentPath
  while (parentPath) {
    const parent = taxonomy.byPath.get(parentPath)
    if (!parent || parent.children.length !== 1 || parent.children[0].path !== highest.path) break
    if (!prune) {
      fail(`删除后会留下空的上级分类 ${parent.path}。如果要连同空上级一起删除，请在命令末尾添加 --prune。`)
    }
    pruned.push(parent)
    highest = parent
    parentPath = parent.parentPath
  }
  const linkProblems = []
  for (const item of pruned) {
    const links = inboundLinks(`/categories/${item.path}/`, path.dirname(highest.file))
    if (links.length) linkProblems.push(...links.map((file) => `${item.path} ← ${file}`))
  }
  if (linkProblems.length) fail(`以下文件仍链接到将要删除的分类，请先修改链接：\n${linkProblems.map((file) => `- ${file}`).join('\n')}`)
  if (!confirmed) fail('删除操作需要确认，请在命令末尾添加 --yes。')
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const trash = path.join(TRASH_ROOT, 'categories', `${highest.path.replaceAll('/', '__')}-${stamp}`)
  const transaction = new Transaction()
  if (pruned.length === 1) {
    transaction.move(path.dirname(category.file), trash)
  } else {
    transaction.mkdir(trash)
    transaction.move(path.dirname(category.file), path.join(trash, 'removed-category'))
    for (const parent of pruned.slice(1)) {
      const relative = path.relative(CATEGORY_ROOT, parent.file)
      transaction.move(parent.file, path.join(trash, 'empty-parents', relative))
    }
  }
  runContentCheck(transaction)
  for (const parent of pruned.slice(1)) {
    try {
      const directory = path.dirname(parent.file)
      if (fs.existsSync(directory) && fs.readdirSync(directory).length === 0) fs.rmdirSync(directory)
    } catch {}
  }
  console.log(`\n分类已移入可恢复目录：${path.relative(SITE_ROOT, trash)}`)
  if (pruned.length > 1) console.log(`同时清理了空的上级分类：${pruned.slice(1).map((item) => item.path).join('、')}`)
}

function trashEntries(type) {
  const root = path.join(TRASH_ROOT, type)
  if (!fs.existsSync(root)) return []
  return fs.readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()
}

function printTrash() {
  const articles = trashEntries('articles')
  const drafts = trashEntries('drafts')
  const categories = trashEntries('categories')
  console.log('可恢复的文章：')
  if (articles.length) articles.forEach((entry) => console.log(`- ${entry}`))
  else console.log('- 无')
  console.log('\n可恢复的草稿：')
  if (drafts.length) drafts.forEach((entry) => console.log(`- ${entry}`))
  else console.log('- 无')
  console.log('\n可恢复的分类：')
  if (categories.length) categories.forEach((entry) => console.log(`- ${entry}`))
  else console.log('- 无')
}

function restoreArticle(entry) {
  const source = path.join(TRASH_ROOT, 'articles', entry)
  if (!fs.existsSync(source)) fail(`找不到可恢复文章：${entry}`)
  const markdown = fs.readdirSync(source).filter((name) => name.endsWith('.md'))
  if (markdown.length !== 1) fail('可恢复文章目录中的 Markdown 文件数量不正确。')
  const id = path.basename(markdown[0], '.md')
  const target = path.join(ARTICLE_ROOT, id)
  if (fs.existsSync(target)) fail(`文章目录已经存在，不能覆盖：${id}`)
  const transaction = new Transaction()
  transaction.move(source, target)
  runContentCheck(transaction)
  console.log(`\n文章已恢复：${id}`)
  console.log(`本地网址：http://127.0.0.1:5173/articles/${id}/`)
}

function restoreDraft(entry) {
  const source = path.join(TRASH_ROOT, 'drafts', entry)
  if (!fs.existsSync(source)) fail(`找不到可恢复草稿：${entry}`)
  const markdown = fs.readdirSync(source).filter((name) => name.endsWith('.md'))
  if (markdown.length !== 1) fail('可恢复草稿目录中的 Markdown 文件数量不正确。')
  const id = path.basename(markdown[0], '.md')
  const target = path.join(DRAFT_ROOT, id)
  if (fs.existsSync(target) || fs.existsSync(path.join(ARTICLE_ROOT, id))) fail(`同名草稿或文章已经存在，不能覆盖：${id}`)
  const transaction = new Transaction()
  try {
    transaction.move(source, target)
    readDraft(id)
  } catch (error) {
    transaction.rollback()
    throw error
  }
  console.log(`\n草稿已恢复：${path.relative(SITE_ROOT, namedDraftFile(id))}`)
}

function restoreCategory(entry) {
  const source = path.join(TRASH_ROOT, 'categories', entry)
  if (!fs.existsSync(source)) fail(`找不到可恢复分类：${entry}`)
  const bundled = fs.existsSync(path.join(source, 'removed-category'))
  const categorySource = bundled ? path.join(source, 'removed-category') : source
  const files = collectMarkdown(categorySource)
  if (files.length < 1) fail('可恢复分类中没有分类说明文件。')
  const rootFile = files
    .map((file) => ({ file, parsed: matter(fs.readFileSync(file, 'utf8')) }))
    .sort((a, b) => String(a.parsed.data.category).split('/').length - String(b.parsed.data.category).split('/').length)[0]
  const categoryPath = String(rootFile.parsed.data.category ?? '')
  if (!categoryPath) fail('可恢复分类缺少 category 设置。')
  const target = path.join(CATEGORY_ROOT, ...categoryPath.split('/'))
  if (fs.existsSync(path.join(target, path.basename(rootFile.file)))) fail(`分类已经存在，不能覆盖：${categoryPath}`)
  const transaction = new Transaction()
  try {
    if (bundled) {
      const parentsRoot = path.join(source, 'empty-parents')
      if (fs.existsSync(parentsRoot)) {
        for (const file of collectMarkdown(parentsRoot)) {
          transaction.move(file, path.join(CATEGORY_ROOT, path.relative(parentsRoot, file)))
        }
      }
    }
    transaction.move(categorySource, target)
    runContentCheck(transaction)
    try {
      if (bundled && fs.existsSync(source) && fs.readdirSync(source).every((name) => name === 'empty-parents')) fs.rmSync(source, { recursive: true, force: true })
    } catch {}
    console.log(`\n分类已恢复：${categoryPath}`)
  } catch (error) {
    transaction.rollback()
    throw error
  }
}

function printTree() {
  const taxonomy = readCategoryDefinitions()
  const articles = readAllArticles()
  const walk = (category, prefix = '') => {
    console.log(`${prefix}${category.title}  [${category.path}]`)
    for (const child of category.children) walk(child, `${prefix}  `)
    if (category.depth === 3) {
      for (const article of articles.filter((item) => String(item.frontmatter.category) === category.path)) {
        console.log(`${prefix}  - ${article.frontmatter.title}  [${article.id}]`)
      }
    }
  }
  for (const root of taxonomy.roots) walk(root)
}

async function promptValue(rl, current, label, defaultValue = '', optional = false) {
  if (current !== undefined && current !== '') return current
  if (!process.stdin.isTTY) {
    if (optional) return defaultValue
    fail(`缺少参数：${label}`)
  }
  const suffix = defaultValue ? `（默认 ${defaultValue}）` : ''
  const answer = (await rl.question(`${label}${suffix}：`)).trim()
  return answer || defaultValue
}

async function selectCategory(rl, current, predicate = () => true, label = '选择分类') {
  if (current) return current
  if (!process.stdin.isTTY) fail(`缺少参数：${label}`)
  const list = readCategoryDefinitions().definitions.filter(predicate)
    .sort((a, b) => a.path.localeCompare(b.path))
  console.log('')
  list.forEach((item, index) => console.log(`${String(index + 1).padStart(2, ' ')}. ${item.title}  [${item.path}]`))
  const raw = await rl.question(`\n${label}，输入编号：`)
  const index = Number(raw) - 1
  if (!Number.isInteger(index) || !list[index]) fail('分类编号无效。')
  return list[index].path
}

async function selectTrashEntry(rl, type, current) {
  if (current) return current
  const list = trashEntries(type)
  if (!list.length) fail('没有可恢复的内容。')
  if (!process.stdin.isTTY) fail('缺少 --entry 参数。')
  console.log('')
  list.forEach((item, index) => console.log(`${index + 1}. ${item}`))
  const raw = await rl.question('\n输入要恢复的编号：')
  const index = Number(raw) - 1
  if (!Number.isInteger(index) || !list[index]) fail('编号无效。')
  return list[index]
}

async function confirmAction(rl, alreadyConfirmed, message) {
  if (alreadyConfirmed) return true
  if (!process.stdin.isTTY) return false
  const answer = (await rl.question(`${message}（输入 yes 确认）：`)).trim().toLowerCase()
  return answer === 'yes'
}

function help() {
  console.log('这是博客命令的内部实现文件。公开命令及其说明可通过 node blog.mjs help 查看。')
}

async function main() {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
      title: { type: 'string' },
      id: { type: 'string' },
      category: { type: 'string' },
      parent: { type: 'string' },
      target: { type: 'string' },
      'new-id': { type: 'string' },
      tags: { type: 'string' },
      date: { type: 'string' },
      description: { type: 'string' },
      entry: { type: 'string' },
      'root-id': { type: 'string' },
      'root-title': { type: 'string' },
      'subject-id': { type: 'string' },
      'subject-title': { type: 'string' },
      'series-id': { type: 'string' },
      'series-title': { type: 'string' },
      yes: { type: 'boolean', default: false },
      prune: { type: 'boolean', default: false }
    }
  })
  const [group = 'help', action, first, second] = positionals
  const rl = createInterface({ input: process.stdin, output: process.stdout })
  try {
    if (group === 'help' || group === '--help') return help()
    if (group === 'tree' || group === 'category' || (group === 'article' && action === 'move') || (group === 'restore' && action === 'category')) {
      fail('文章与分类统一使用 node blog.mjs sync；最近一次分类结构或文章归属修改使用 node blog.mjs undo 撤销。')
    }
    if (group === 'tree') return printTree()
    if (group === 'draft' && action === 'list') return printDrafts()
    if (group === 'trash') return printTrash()
    if (group === 'restore' && action === 'article') {
      const entry = await selectTrashEntry(rl, 'articles', values.entry)
      return restoreArticle(entry)
    }
    if (group === 'restore' && action === 'draft') {
      const entry = await selectTrashEntry(rl, 'drafts', values.entry)
      return restoreDraft(entry)
    }
    if (group === 'restore' && action === 'category') {
      const entry = await selectTrashEntry(rl, 'categories', values.entry)
      return restoreCategory(entry)
    }
    if (group === 'article' && action === 'new') {
      const id = first || values.id
      if (!id) fail('缺少文章文件名。用法：node blog.mjs new <文章文件名>')
      validateId(id, '文章文件名')
      const title = second || values.title || id
      const category = values.category || defaultCategoryPath()
      const tagsText = String(values.tags ?? '')
      return createArticle({ title, id, category, tags: tagsText ? tagsText.split(',').map((tag) => tag.trim()).filter(Boolean) : [], date: values.date || today() })
    }
    if (group === 'draft' && action === 'new') {
      const id = first || values.id
      if (!id) fail('缺少草稿文件名。用法：node blog.mjs new draft <草稿文件名>')
      validateId(id, '草稿文件名')
      const title = second || values.title || id
      const tagsText = String(values.tags ?? '')
      return createDraft({ title, id, tags: tagsText ? tagsText.split(',').map((tag) => tag.trim()).filter(Boolean) : [], date: values.date || today() })
    }
    if (group === 'draft' && action === 'publish') {
      const id = await promptValue(rl, first || values.id, '草稿文件名')
      const category = await selectCategory(rl, values.category, (item) => item.depth === 3, '发布到哪个分类')
      return publishDraft({ id, category })
    }
    if (group === 'draft' && action === 'remove') {
      const id = await promptValue(rl, first || values.id, '草稿文件名')
      const confirmed = await confirmAction(rl, values.yes, `确认移除草稿 ${id}？`)
      return removeDraft({ id, confirmed })
    }
    if (group === 'article' && action === 'move') {
      const id = await promptValue(rl, first || values.id, '文章文件名')
      const category = await selectCategory(rl, values.category, (item) => item.depth === 3, '新的文章分类')
      return moveArticle({ id, category })
    }
    if (group === 'article' && action === 'rename') {
      const id = await promptValue(rl, first || values.id, '当前文章文件名')
      const newId = await promptValue(rl, second || values['new-id'], '新的文章文件名')
      return renameArticle({ id, newId })
    }
    if (group === 'article' && action === 'remove') {
      const id = await promptValue(rl, first || values.id, '文章文件名')
      const confirmed = await confirmAction(rl, values.yes, `确认移除文章 ${id}？`)
      return removeArticle({ id, confirmed })
    }
    if (group === 'category' && action === 'new') {
      const parent = await selectCategory(rl, values.parent, (item) => item.depth === 2, '上级二级分类')
      const id = await promptValue(rl, values.id, '新分类文件名')
      const title = await promptValue(rl, values.title, '新分类显示名称')
      const description = await promptValue(rl, values.description, '分类说明；可以直接回车', '', true)
      return createCategory({ parent, id, title, description })
    }
    if (group === 'category' && action === 'subject') {
      const parent = await selectCategory(rl, values.parent, (item) => item.depth === 1, '上级一级分类')
      const subjectId = await promptValue(rl, values['subject-id'], '二级分类文件名')
      const subjectTitle = await promptValue(rl, values['subject-title'], '二级分类显示名称')
      const seriesId = await promptValue(rl, values['series-id'], '首个三级分类文件名')
      const seriesTitle = await promptValue(rl, values['series-title'], '首个三级分类显示名称')
      return createSubjectBranch({ parent, subjectId, subjectTitle, seriesId, seriesTitle })
    }
    if (group === 'category' && action === 'branch') {
      const rootId = await promptValue(rl, values['root-id'], '一级分类文件名')
      const rootTitle = await promptValue(rl, values['root-title'], '一级分类显示名称')
      const subjectId = await promptValue(rl, values['subject-id'], '二级分类文件名')
      const subjectTitle = await promptValue(rl, values['subject-title'], '二级分类显示名称')
      const seriesId = await promptValue(rl, values['series-id'], '三级分类文件名')
      const seriesTitle = await promptValue(rl, values['series-title'], '三级分类显示名称')
      return createCategoryBranch({ rootId, rootTitle, subjectId, subjectTitle, seriesId, seriesTitle })
    }
    if (group === 'category' && action === 'title') {
      const categoryPath = await selectCategory(rl, values.category, () => true, '要修改的分类')
      const title = await promptValue(rl, values.title, '新的显示名称')
      return renameCategoryTitle({ categoryPath, title })
    }
    if (group === 'category' && action === 'relocate') {
      const source = await selectCategory(rl, values.category, () => true, '要移动或改名的分类')
      const { category } = categoryByPath(source)
      const parent = category.depth === 1 ? '' : await selectCategory(rl, values.parent, (item) => item.depth === category.depth - 1, '新的上级分类')
      const newId = await promptValue(rl, values['new-id'], '新的分类文件名', category.id)
      return relocateCategory({ source, parent, newId })
    }
    if (group === 'category' && action === 'merge') {
      const source = await selectCategory(rl, values.category, (item) => item.depth === 3, '要合并掉的分类')
      const target = await selectCategory(rl, values.target, (item) => item.depth === 3 && item.path !== source, '保留的目标分类')
      const confirmed = await confirmAction(rl, values.yes, `确认把 ${source} 合并到 ${target}？`)
      return mergeCategory({ source, target, confirmed })
    }
    if (group === 'category' && action === 'remove') {
      const categoryPath = await selectCategory(rl, values.category, () => true, '要删除的分类')
      const confirmed = await confirmAction(rl, values.yes, `确认移除分类 ${categoryPath}？`)
      return removeCategory({ categoryPath, confirmed, prune: values.prune })
    }
    help()
    fail(`不认识的命令：${positionals.join(' ')}`)
  } finally {
    rl.close()
  }
}

main()
  .then(() => pendingDevNotification)
  .catch((error) => {
    console.error(`\n操作失败：${error.message}`)
    process.exitCode = 1
  })

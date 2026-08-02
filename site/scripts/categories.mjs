import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import matter from 'gray-matter'
import YAML from 'yaml'
import { notifyBlogDevServer } from './dev-server.mjs'
import {
  ARTICLE_ROOT,
  CATEGORY_ROOT,
  readAllArticles,
  readCategoryDefinitions,
  readSite,
  SITE_CONFIG_PATH,
  SITE_ROOT
} from './site-lib.mjs'

const TREE_FILE = path.join(SITE_ROOT, 'category-tree.yml')
const HISTORY_ROOT = path.join(SITE_ROOT, '.category-history')
const LATEST_HISTORY = path.join(HISTORY_ROOT, 'latest')
const LOCK_FILE = path.join(HISTORY_ROOT, 'lock')
const STATE_FILE = path.join(HISTORY_ROOT, 'state.json')
const CHECK_SCRIPT = path.join(SITE_ROOT, 'scripts', 'check-content.mjs')
const ID_RE = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/

function fail(message) {
  throw new Error(message)
}

function hashFile(file) {
  if (!fs.existsSync(file)) return null
  return createHash('sha256').update(fs.readFileSync(file)).digest('hex')
}

function digestDirectory(root) {
  if (!fs.existsSync(root)) return null
  const hash = createHash('sha256')
  const visit = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const full = path.join(directory, entry.name)
      const relative = path.relative(root, full).split(path.sep).join('/')
      hash.update(`${entry.isDirectory() ? 'd' : 'f'}:${relative}\0`)
      if (entry.isDirectory()) visit(full)
      else hash.update(fs.readFileSync(full))
    }
  }
  visit(root)
  return hash.digest('hex')
}

function safeRemove(target) {
  const resolved = path.resolve(target)
  const allowed = [HISTORY_ROOT, path.join(SITE_ROOT, '.cache'), CATEGORY_ROOT]
    .some((root) => resolved === path.resolve(root) || resolved.startsWith(`${path.resolve(root)}${path.sep}`))
  if (!allowed) fail(`拒绝移除项目范围以外的路径：${target}`)
  fs.rmSync(resolved, { recursive: true, force: true })
}

function acquireLock() {
  fs.mkdirSync(HISTORY_ROOT, { recursive: true })
  if (fs.existsSync(LOCK_FILE)) {
    const pid = Number(fs.readFileSync(LOCK_FILE, 'utf8').trim())
    let alive = Number.isInteger(pid) && pid > 0
    if (alive) {
      try { process.kill(pid, 0) } catch { alive = false }
    }
    if (alive) fail(`另一个分类更新仍在运行（进程 ${pid}）。`)
    fs.unlinkSync(LOCK_FILE)
  }
  fs.writeFileSync(LOCK_FILE, String(process.pid), { flag: 'wx' })
}

function releaseLock() {
  try { fs.unlinkSync(LOCK_FILE) } catch {}
}

function treeFromDefinitions() {
  const taxonomy = readCategoryDefinitions()
  const convert = (category) => ({
    id: category.id,
    title: category.title,
    ...(category.children.length ? { children: category.children.map(convert) } : {})
  })
  return taxonomy.roots.map(convert)
}

function treeDocument(tree, changes = []) {
  return { changes, tree }
}

function serializeTree(tree, changes = []) {
  const header = '# 三级分类树。数组中的先后顺序就是网页中的分类顺序。\n'
    + '# 修改结构后，执行 node blog.mjs sync。\n\n'
  return header + YAML.stringify(treeDocument(tree, changes), { lineWidth: 0 })
}

function writeTree(tree, changes = []) {
  fs.writeFileSync(TREE_FILE, serializeTree(tree, changes), 'utf8')
}

function loadTree() {
  if (!fs.existsSync(TREE_FILE)) return { changes: [], tree: treeFromDefinitions() }
  const parsed = YAML.parse(fs.readFileSync(TREE_FILE, 'utf8')) ?? {}
  return {
    changes: parsed.changes ?? [],
    tree: parsed.tree
  }
}

function flattenTree(tree) {
  if (!Array.isArray(tree) || tree.length === 0) fail('category-tree.yml 的 tree 必须是非空列表。')
  const nodes = new Map()
  const folded = new Map()
  const visit = (items, parentPath = '', depth = 1) => {
    if (!Array.isArray(items) || items.length === 0) fail(`${parentPath || '分类树'} 缺少第 ${depth} 级分类。`)
    if (depth > 3) fail('分类树只能包含三级。')
    items.forEach((raw, index) => {
      if (!raw || typeof raw !== 'object' || Array.isArray(raw)) fail('分类节点必须包含 id 和 title。')
      const id = String(raw.id ?? '').trim()
      const title = String(raw.title ?? '').trim()
      if (!ID_RE.test(id)) fail(`分类文件名只能使用英文字母、数字和短横线：${id || '空'}`)
      if (!title) fail(`分类 ${id} 缺少显示名称。`)
      const categoryPath = parentPath ? `${parentPath}/${id}` : id
      const key = categoryPath.toLocaleLowerCase('en-US')
      if (folded.has(key)) fail(`分类路径不能重复或只有大小写不同：${folded.get(key)} 与 ${categoryPath}`)
      folded.set(key, categoryPath)
      const children = raw.children ?? []
      if (depth < 3 && (!Array.isArray(children) || children.length === 0)) fail(`第 ${depth} 级分类必须包含下级分类：${categoryPath}`)
      if (depth === 3 && Array.isArray(children) && children.length) fail(`第三级分类不能再包含下级：${categoryPath}`)
      nodes.set(categoryPath, { path: categoryPath, parentPath, id, title, order: index + 1, depth })
      if (depth < 3) visit(children, categoryPath, depth + 1)
    })
  }
  visit(tree)
  return nodes
}

function nodeTreeFromMap(nodes) {
  const byParent = new Map()
  for (const node of nodes.values()) {
    const list = byParent.get(node.parentPath) ?? []
    list.push(node)
    byParent.set(node.parentPath, list)
  }
  const build = (parentPath = '') => (byParent.get(parentPath) ?? [])
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, 'zh-CN'))
    .map((node) => ({
      id: node.id,
      title: node.title,
      ...(node.depth < 3 ? { children: build(node.path) } : {})
    }))
  return build()
}

function currentNodes() {
  const { definitions } = readCategoryDefinitions()
  return new Map(definitions.map((category) => [category.path, {
    path: category.path,
    parentPath: category.parentPath,
    id: category.id,
    title: category.title,
    order: category.order,
    depth: category.depth,
    sourcePath: category.path,
    sourceFile: category.file
  }]))
}

function remapPrefix(nodes, from, to) {
  const affected = [...nodes.values()]
    .filter((node) => node.path === from || node.path.startsWith(`${from}/`))
    .sort((a, b) => a.depth - b.depth)
  if (!affected.length) fail(`找不到分类：${from}`)
  for (const node of affected) nodes.delete(node.path)
  for (const node of affected) {
    const nextPath = to + node.path.slice(from.length)
    if (nodes.has(nextPath)) fail(`分类操作产生了重复路径：${nextPath}`)
    node.path = nextPath
    const parts = nextPath.split('/')
    node.id = parts.at(-1)
    node.parentPath = parts.slice(0, -1).join('/')
    node.depth = parts.length
    nodes.set(nextPath, node)
  }
}

function operationObject(raw, index) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) fail(`changes 的第 ${index + 1} 项格式错误。`)
  const kinds = ['rename', 'move', 'merge', 'remove'].filter((kind) => raw[kind] !== undefined)
  if (kinds.length !== 1) fail(`changes 的第 ${index + 1} 项必须且只能包含 rename、move、merge、remove 之一。`)
  const value = raw[kinds[0]]
  if (!value || typeof value !== 'object' || Array.isArray(value)) fail(`changes 的第 ${index + 1} 项缺少完整参数。`)
  return { kind: kinds[0], value }
}

function simulateChanges(changes) {
  if (!Array.isArray(changes)) fail('category-tree.yml 的 changes 必须是列表。')
  const nodes = currentNodes()
  const merges = new Map()
  const removed = new Set()
  const routeChanges = []

  changes.forEach((raw, index) => {
    const { kind, value } = operationObject(raw, index)
    if (kind === 'rename') {
      const from = String(value.from ?? '').trim()
      const to = String(value.to ?? '').trim()
      const source = nodes.get(from)
      if (!source) fail(`第 ${index + 1} 项找不到要改名的分类：${from}`)
      if (to.split('/').length !== source.depth || to.split('/').some((id) => !ID_RE.test(id))) fail(`改名目标必须是同层级的完整分类路径：${to}`)
      if (path.posix.dirname(from) !== path.posix.dirname(to)) fail(`rename 只修改文件名；移动分类请使用 move：${from}`)
      if (nodes.has(to)) fail(`改名目标已经存在：${to}`)
      routeChanges.push({ from, to })
      remapPrefix(nodes, from, to)
      return
    }
    if (kind === 'move') {
      const category = String(value.category ?? '').trim()
      const under = String(value.under ?? '').trim()
      const source = nodes.get(category)
      const parent = nodes.get(under)
      if (!source) fail(`第 ${index + 1} 项找不到要移动的分类：${category}`)
      if (!parent || parent.depth !== source.depth - 1) fail(`新的上级分类层级不正确：${under}`)
      if (under === category || under.startsWith(`${category}/`)) fail('分类不能移入自己的下级。')
      const to = `${under}/${source.id}`
      if (nodes.has(to)) fail(`移动目标已经存在：${to}`)
      routeChanges.push({ from: category, to })
      remapPrefix(nodes, category, to)
      return
    }
    if (kind === 'merge') {
      const from = String(value.from ?? '').trim()
      const into = String(value.into ?? '').trim()
      const source = nodes.get(from)
      const target = nodes.get(into)
      if (!source || source.depth !== 3) fail(`只能合并现有的第三级分类：${from}`)
      if (!target || target.depth !== 3) fail(`合并目标必须是现有的第三级分类：${into}`)
      if (from === into) fail('分类不能合并到自身。')
      nodes.delete(from)
      merges.set(source.sourcePath, target.sourcePath)
      routeChanges.push({ from, to: into })
      return
    }
    const category = String(value.category ?? '').trim()
    const source = nodes.get(category)
    if (!source) fail(`第 ${index + 1} 项找不到要删除的分类：${category}`)
    for (const node of [...nodes.values()].filter((item) => item.path === category || item.path.startsWith(`${category}/`))) {
      nodes.delete(node.path)
      removed.add(node.sourcePath)
    }
  })

  return { nodes, merges, removed, routeChanges }
}

function buildIdentityMap(simulation) {
  const finalBySource = new Map([...simulation.nodes.values()].map((node) => [node.sourcePath, node.path]))
  for (const [source, targetSource] of simulation.merges) {
    const target = finalBySource.get(targetSource)
    if (!target) fail(`合并目标后来被删除：${targetSource}`)
    finalBySource.set(source, target)
  }
  return finalBySource
}

function validateFinalState(simulation, desiredNodes) {
  const simulatedPaths = new Set(simulation.nodes.keys())
  const desiredPaths = new Set(desiredNodes.keys())
  const missingFromTree = [...simulatedPaths].filter((item) => !desiredPaths.has(item))
  if (missingFromTree.length) {
    fail(`分类树删掉或改变了现有路径，但 changes 没有说明这些变化：${missingFromTree.join('、')}`)
  }
  for (const pathValue of desiredPaths) {
    if (!simulatedPaths.has(pathValue)) continue
    const simulated = simulation.nodes.get(pathValue)
    const desired = desiredNodes.get(pathValue)
    simulated.title = desired.title
    simulated.order = desired.order
  }

  const identity = buildIdentityMap(simulation)
  const articles = readAllArticles()
  for (const article of articles) {
    const current = String(article.frontmatter.category ?? '')
    if (identity.has(current)) continue
    if (simulation.removed.has(current)) fail(`分类 ${current} 仍包含文章 ${article.id}；请先修改文章分类或使用 merge。`)
    if (!desiredNodes.has(current)) fail(`文章 ${article.id} 指向分类树中不存在的分类：${current}`)
  }
  const defaultCategory = String(readSite().content?.defaultCategory ?? '')
  if (simulation.removed.has(defaultCategory) && !identity.has(defaultCategory)) fail(`不能删除当前默认分类：${defaultCategory}`)
  const nextDefault = identity.get(defaultCategory) ?? defaultCategory
  if (!desiredNodes.has(nextDefault) || desiredNodes.get(nextDefault).depth !== 3) fail(`修改后的默认分类无效：${nextDefault}`)

  for (const removedPath of simulation.removed) {
    const route = `/categories/${removedPath}/`
    for (const article of articles) {
      if (article.content.includes(route)) fail(`文章 ${article.id} 仍链接到要删除的分类：${removedPath}`)
    }
  }
  return { identity, nextDefault, articles }
}

function replaceCategoryLinks(text, routeChanges) {
  let result = text
  for (const change of routeChanges) {
    result = result.replaceAll(`/categories/${change.from}/`, `/categories/${change.to}/`)
  }
  return result
}

function rewriteCategoryPage(sourceText, node, routeChanges) {
  const parsed = matter(sourceText)
  parsed.data.title = node.title
  parsed.data.layout = 'doc'
  parsed.data.category = node.path
  parsed.data.order = node.order
  let content = replaceCategoryLinks(parsed.content, routeChanges)
  if (/^#\s+.*$/m.test(content)) content = content.replace(/^#\s+.*$/m, `# ${node.title}`)
  else content = `\n# ${node.title}\n${content}`
  return matter.stringify(content, parsed.data)
}

function newCategoryPage(node) {
  return matter.stringify(`\n# ${node.title}\n\n<!-- 在这里写分类介绍；下级分类和文章列表会自动生成。 -->\n`, {
    title: node.title,
    layout: 'doc',
    category: node.path,
    order: node.order
  })
}

function copyImmediateResources(sourceDirectory, targetDirectory, sourceMarkdownName) {
  if (!fs.existsSync(sourceDirectory)) return
  for (const entry of fs.readdirSync(sourceDirectory, { withFileTypes: true })) {
    if (!entry.isFile() || entry.name === sourceMarkdownName) continue
    fs.copyFileSync(path.join(sourceDirectory, entry.name), path.join(targetDirectory, entry.name))
  }
}

function buildCategoryDirectory(simulation, desiredNodes) {
  const temporary = path.join(SITE_ROOT, '.cache', `categories-${process.pid}-${Date.now()}`)
  fs.mkdirSync(temporary, { recursive: true })
  if (fs.existsSync(CATEGORY_ROOT)) {
    for (const entry of fs.readdirSync(CATEGORY_ROOT, { withFileTypes: true })) {
      if (!entry.isDirectory() || !entry.name.includes('[')) continue
      fs.cpSync(path.join(CATEGORY_ROOT, entry.name), path.join(temporary, entry.name), { recursive: true, preserveTimestamps: true })
    }
  }
  for (const node of desiredNodes.values()) {
    const targetDirectory = path.join(temporary, ...node.path.split('/'))
    fs.mkdirSync(targetDirectory, { recursive: true })
    const existing = simulation.nodes.get(node.path)
    if (existing) {
      const sourceDirectory = path.dirname(existing.sourceFile)
      copyImmediateResources(sourceDirectory, targetDirectory, path.basename(existing.sourceFile))
      const sourceText = fs.readFileSync(existing.sourceFile, 'utf8')
      fs.writeFileSync(path.join(targetDirectory, `${node.id}.md`), rewriteCategoryPage(sourceText, node, simulation.routeChanges), 'utf8')
    } else {
      fs.writeFileSync(path.join(targetDirectory, `${node.id}.md`), newCategoryPage(node), 'utf8')
    }
  }
  return temporary
}

function updateArticleText(article, nextCategory, routeChanges) {
  const source = fs.readFileSync(article.file, 'utf8')
  const parsed = matter(source)
  parsed.data.category = nextCategory
  if (parsed.data.date instanceof Date) parsed.data.date = parsed.data.date.toISOString().slice(0, 10)
  parsed.content = replaceCategoryLinks(parsed.content, routeChanges)
  return matter.stringify(parsed.content, parsed.data)
}

function runCheck() {
  const result = spawnSync(process.execPath, [CHECK_SCRIPT], { cwd: SITE_ROOT, encoding: 'utf8' })
  if (result.status !== 0) fail([result.stdout, result.stderr].filter(Boolean).join('\n').trim())
  return result.stdout.trim()
}

function currentArticleCategories() {
  return Object.fromEntries(readAllArticles().map((article) => [article.id, String(article.frontmatter.category ?? '')]))
}

function loadSyncState() {
  if (!fs.existsSync(STATE_FILE)) return null
  const value = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'))
  return value && typeof value === 'object' && value.articles && typeof value.articles === 'object' ? value : null
}

function writeSyncState() {
  fs.mkdirSync(HISTORY_ROOT, { recursive: true })
  fs.writeFileSync(STATE_FILE, JSON.stringify({ articles: currentArticleCategories() }, null, 2), 'utf8')
}

function createPendingHistory(kind, affectedArticles, previousCategories = null) {
  const pending = path.join(HISTORY_ROOT, `pending-${process.pid}-${Date.now()}`)
  fs.mkdirSync(pending, { recursive: true })
  if (fs.existsSync(CATEGORY_ROOT)) fs.cpSync(CATEGORY_ROOT, path.join(pending, 'categories'), { recursive: true, preserveTimestamps: true })
  fs.copyFileSync(SITE_CONFIG_PATH, path.join(pending, 'site.yml'))
  if (fs.existsSync(TREE_FILE)) fs.copyFileSync(TREE_FILE, path.join(pending, 'requested-tree.yml'))
  if (fs.existsSync(STATE_FILE)) fs.copyFileSync(STATE_FILE, path.join(pending, 'state.json'))
  fs.writeFileSync(path.join(pending, 'category-tree.yml'), serializeTree(treeFromDefinitions(), []), 'utf8')
  const articlesDirectory = path.join(pending, 'articles')
  fs.mkdirSync(articlesDirectory)
  for (const article of affectedArticles) {
    const target = path.join(articlesDirectory, `${article.id}.md`)
    if (previousCategories && Object.hasOwn(previousCategories, article.id)) {
      const parsed = matter(fs.readFileSync(article.file, 'utf8'))
      parsed.data.category = previousCategories[article.id]
      if (parsed.data.date instanceof Date) parsed.data.date = parsed.data.date.toISOString().slice(0, 10)
      fs.writeFileSync(target, matter.stringify(parsed.content, parsed.data), 'utf8')
    } else {
      fs.copyFileSync(article.file, target)
    }
  }
  fs.writeFileSync(path.join(pending, 'manifest.json'), JSON.stringify({ kind, affectedArticles: affectedArticles.map((article) => article.id) }, null, 2), 'utf8')
  return pending
}

function restorePending(pending) {
  safeRemove(CATEGORY_ROOT)
  fs.cpSync(path.join(pending, 'categories'), CATEGORY_ROOT, { recursive: true, preserveTimestamps: true })
  fs.copyFileSync(path.join(pending, 'site.yml'), SITE_CONFIG_PATH)
  const stateBackup = path.join(pending, 'state.json')
  if (fs.existsSync(stateBackup)) fs.copyFileSync(stateBackup, STATE_FILE)
  else if (fs.existsSync(STATE_FILE)) fs.unlinkSync(STATE_FILE)
  const manifest = JSON.parse(fs.readFileSync(path.join(pending, 'manifest.json'), 'utf8'))
  for (const id of manifest.affectedArticles) {
    const backup = path.join(pending, 'articles', `${id}.md`)
    const target = path.join(ARTICLE_ROOT, id, `${id}.md`)
    if (fs.existsSync(backup) && fs.existsSync(target)) fs.copyFileSync(backup, target)
  }
}

function restoreFailedOperation(pending) {
  restorePending(pending)
  const requestedTree = path.join(pending, 'requested-tree.yml')
  if (fs.existsSync(requestedTree)) fs.copyFileSync(requestedTree, TREE_FILE)
}

function commitHistory(pending, postState) {
  const manifestFile = path.join(pending, 'manifest.json')
  const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'))
  manifest.postState = postState
  fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2), 'utf8')
  if (fs.existsSync(LATEST_HISTORY)) safeRemove(LATEST_HISTORY)
  fs.renameSync(pending, LATEST_HISTORY)
}

function postState(articleIds) {
  return {
    categories: digestDirectory(CATEGORY_ROOT),
    tree: hashFile(TREE_FILE),
    site: hashFile(SITE_CONFIG_PATH),
    articles: Object.fromEntries(articleIds.map((id) => [id, hashFile(path.join(ARTICLE_ROOT, id, `${id}.md`))]))
  }
}

function applyFromTree({ quiet = false } = {}) {
  const document = loadTree()
  const desiredNodes = flattenTree(document.tree)
  const simulation = simulateChanges(document.changes)
  const { identity, nextDefault, articles } = validateFinalState(simulation, desiredNodes)
  const affectedArticles = articles.filter((article) => {
    const current = String(article.frontmatter.category ?? '')
    const next = identity.get(current) ?? current
    const source = fs.readFileSync(article.file, 'utf8')
    return next !== current || replaceCategoryLinks(source, simulation.routeChanges) !== source
  })
  const built = buildCategoryDirectory(simulation, desiredNodes)
  const site = readSite()
  const siteChanged = String(site.content?.defaultCategory ?? '') !== nextDefault
  const categoryChanged = digestDirectory(built) !== digestDirectory(CATEGORY_ROOT)
  if (!categoryChanged && !affectedArticles.length && !siteChanged && document.changes.length === 0) {
    safeRemove(built)
    if (!quiet) console.log('分类树与网站内容已经一致，没有修改文件。')
    return { changed: false, checkOutput: '' }
  }

  const pending = createPendingHistory('分类树同步', affectedArticles)
  try {
    safeRemove(CATEGORY_ROOT)
    fs.renameSync(built, CATEGORY_ROOT)
    for (const article of affectedArticles) {
      const current = String(article.frontmatter.category ?? '')
      fs.writeFileSync(article.file, updateArticleText(article, identity.get(current) ?? current, simulation.routeChanges), 'utf8')
    }
    if (siteChanged) {
      site.content ??= {}
      site.content.defaultCategory = nextDefault
      fs.writeFileSync(SITE_CONFIG_PATH, YAML.stringify(site, { lineWidth: 0 }), 'utf8')
    }
    writeTree(document.tree, [])
    const checkOutput = runCheck()
    writeSyncState()
    commitHistory(pending, postState(affectedArticles.map((article) => article.id)))
    if (!quiet) {
      console.log(`已按分类树更新分类：${desiredNodes.size} 个分类；同步 ${affectedArticles.length} 篇文章的分类引用。`)
      console.log(checkOutput)
    }
    return { changed: true, checkOutput }
  } catch (error) {
    if (fs.existsSync(pending)) {
      restoreFailedOperation(pending)
      safeRemove(pending)
    }
    if (fs.existsSync(built)) safeRemove(built)
    throw error
  }
}

function ensureTreePath(tree, categoryPath, titleByPath) {
  const parts = categoryPath.split('/')
  let items = tree
  let current = ''
  let changed = false
  for (const id of parts) {
    current = current ? `${current}/${id}` : id
    let node = items.find((item) => item.id === id)
    if (!node) {
      node = { id, title: titleByPath.get(current) ?? id }
      items.push(node)
      changed = true
    }
    if (current.split('/').length < 3) {
      node.children ??= []
      items = node.children
    }
  }
  return changed
}

function createMissingCategoryPage(categoryPath, title, order) {
  const parts = categoryPath.split('/')
  const directory = path.join(CATEGORY_ROOT, ...parts)
  fs.mkdirSync(directory, { recursive: true })
  const file = path.join(directory, `${parts.at(-1)}.md`)
  if (!fs.existsSync(file)) fs.writeFileSync(file, newCategoryPage({ path: categoryPath, id: parts.at(-1), title, order }), 'utf8')
}

function applyFromArticles({ quiet = false } = {}) {
  const document = loadTree()
  const treeNodes = flattenTree(document.tree)
  const taxonomy = readCategoryDefinitions()
  const actualNodes = new Map(taxonomy.definitions.map((node) => [node.path, node]))
  const titleByPath = new Map([...actualNodes.values()].map((node) => [node.path, node.title]))
  for (const node of treeNodes.values()) titleByPath.set(node.path, node.title)
  const articles = readAllArticles()
  const missing = new Set()
  for (const article of articles) {
    const categoryPath = String(article.frontmatter.category ?? '').trim()
    const parts = categoryPath.split('/')
    if (parts.length !== 3 || parts.some((id) => !ID_RE.test(id))) fail(`文章 ${article.id} 的 category 必须是有效的三级分类路径：${categoryPath || '空'}`)
    parts.forEach((_, index) => {
      const partial = parts.slice(0, index + 1).join('/')
      if (!actualNodes.has(partial)) missing.add(partial)
    })
  }
  const syncState = loadSyncState()
  if (!syncState) {
    if (!missing.size) {
      if (!fs.existsSync(TREE_FILE)) writeTree(document.tree, [])
      writeSyncState()
      if (!quiet) console.log('文章中的分类信息与现有分类已经一致；已记录当前状态。')
      return { changed: true, initialized: true, checkOutput: '' }
    }
  }
  const defaultCategory = String(readSite().content?.defaultCategory ?? '')
  const previousCategories = Object.fromEntries(articles.map((article) => [
    article.id,
    String(syncState?.articles?.[article.id] ?? defaultCategory)
  ]))
  const affectedArticles = syncState
    ? articles.filter((article) => previousCategories[article.id] !== String(article.frontmatter.category ?? ''))
    : []
  const currentCategoryMap = Object.fromEntries(articles.map((article) => [article.id, String(article.frontmatter.category ?? '')]))
  const previousArticleIds = new Set(Object.keys(syncState?.articles ?? {}))
  const currentArticleIds = new Set(Object.keys(currentCategoryMap))
  const addedArticles = [...currentArticleIds].filter((id) => !previousArticleIds.has(id))
  const removedArticles = [...previousArticleIds].filter((id) => !currentArticleIds.has(id))
  const stateNeedsRefresh = syncState
    ? JSON.stringify(syncState.articles) !== JSON.stringify(currentCategoryMap)
    : true
  if (!missing.size && !affectedArticles.length) {
    if (!fs.existsSync(TREE_FILE)) writeTree(document.tree, [])
    if (stateNeedsRefresh) {
      const checkOutput = runCheck()
      writeSyncState()
      const changes = [
        addedArticles.length ? `新增 ${addedArticles.length} 篇` : '',
        removedArticles.length ? `删除 ${removedArticles.length} 篇` : ''
      ].filter(Boolean)
      if (!quiet) {
        console.log(changes.length
          ? `已同步文章目录：${changes.join('，')}；分类结构没有变化。`
          : '文章中的分类信息与现有分类已经一致；已更新内部记录。')
        console.log(checkOutput)
      }
      return { changed: true, checkOutput }
    } else {
      if (!quiet) console.log('文章中的分类信息与现有分类已经一致，没有修改文件。')
      return { changed: false, checkOutput: '' }
    }
  }

  const pending = createPendingHistory('文章归属同步', affectedArticles, previousCategories)
  try {
    for (const categoryPath of [...missing].sort((a, b) => a.split('/').length - b.split('/').length || a.localeCompare(b))) {
      const parentPath = categoryPath.split('/').slice(0, -1).join('/')
      const siblings = readCategoryDefinitions().definitions.filter((node) => node.parentPath === parentPath)
      const order = Math.max(0, ...siblings.map((node) => Number(node.order) || 0)) + 1
      createMissingCategoryPage(categoryPath, titleByPath.get(categoryPath) ?? categoryPath.split('/').at(-1), order)
      ensureTreePath(document.tree, categoryPath, titleByPath)
    }
    writeTree(document.tree, document.changes)
    const checkOutput = runCheck()
    writeSyncState()
    commitHistory(pending, postState(affectedArticles.map((article) => article.id)))
    if (!quiet) {
      console.log(`已采用 ${affectedArticles.length} 篇文章中的分类修改，并补充 ${missing.size} 个分类节点；原有分类的名称、位置和顺序没有改变。`)
      console.log(checkOutput)
    }
    return { changed: true, checkOutput }
  } catch (error) {
    if (fs.existsSync(pending)) {
      restoreFailedOperation(pending)
      safeRemove(pending)
    }
    throw error
  }
}

function treeHasRequestedChanges() {
  const document = loadTree()
  // flattenTree also validates the complete three-level structure before any
  // file is changed.
  flattenTree(document.tree)
  return document.changes.length > 0
    || JSON.stringify(document.tree) !== JSON.stringify(treeFromDefinitions())
}

function syncSnapshot() {
  const state = loadSyncState()
  const articles = readAllArticles()
  const categories = readCategoryDefinitions().definitions
  return {
    hadState: Boolean(state),
    recordedArticles: { ...(state?.articles ?? {}) },
    articles: new Map(articles.map((article) => [article.id, {
      category: String(article.frontmatter.category ?? ''),
      source: fs.readFileSync(article.file, 'utf8')
    }])),
    categories: new Map(categories.map((category) => [category.path, {
      title: category.title,
      order: category.order,
      content: category.content
    }])),
    defaultCategory: String(readSite().content?.defaultCategory ?? '')
  }
}

function requestedChangeText(raw, index) {
  const { kind, value } = operationObject(raw, index)
  if (kind === 'rename') return `改名 ${value.from} → ${value.to}`
  if (kind === 'move') return `移动 ${value.category} → ${value.under}/${String(value.category).split('/').at(-1)}`
  if (kind === 'merge') return `合并 ${value.from} → ${value.into}`
  return `删除分类 ${value.category}`
}

function printItems(label, items) {
  if (items.length) console.log(`  ${label}：${items.join('；')}`)
}

function printSyncReport(before, after, requestedChanges, results) {
  const previousArticles = before.hadState ? before.recordedArticles : {}
  const currentArticles = Object.fromEntries([...after.articles].map(([id, article]) => [id, article.category]))
  const previousIds = new Set(Object.keys(previousArticles))
  const currentIds = new Set(Object.keys(currentArticles))
  const addedArticles = [...currentIds]
    .filter((id) => !previousIds.has(id))
    .sort()
    .map((id) => `${id}（${currentArticles[id]}）`)
  const removedArticles = [...previousIds]
    .filter((id) => !currentIds.has(id))
    .sort()
    .map((id) => `${id}（原属 ${previousArticles[id]}）`)
  const recategorizedArticles = [...currentIds]
    .filter((id) => previousIds.has(id) && previousArticles[id] !== currentArticles[id])
    .sort()
    .map((id) => `${id}：${previousArticles[id]} → ${currentArticles[id]}`)

  const beforeCategoryPaths = new Set(before.categories.keys())
  const afterCategoryPaths = new Set(after.categories.keys())
  const addedCategories = [...afterCategoryPaths].filter((item) => !beforeCategoryPaths.has(item)).sort()
  const removedCategories = [...beforeCategoryPaths].filter((item) => !afterCategoryPaths.has(item)).sort()
  const retitledCategories = [...afterCategoryPaths]
    .filter((item) => beforeCategoryPaths.has(item) && before.categories.get(item).title !== after.categories.get(item).title)
    .sort()
    .map((item) => `${item}：${before.categories.get(item).title} → ${after.categories.get(item).title}`)
  const reorderedCategories = [...afterCategoryPaths]
    .filter((item) => beforeCategoryPaths.has(item) && before.categories.get(item).order !== after.categories.get(item).order)
    .sort()
    .map((item) => `${item}：${before.categories.get(item).order} → ${after.categories.get(item).order}`)

  const rewrittenArticles = [...after.articles]
    .filter(([id, article]) => before.articles.has(id) && before.articles.get(id).source !== article.source)
    .map(([id]) => id)
    .sort()
  const categoryNotesChanged = [...afterCategoryPaths]
    .filter((item) => beforeCategoryPaths.has(item) && before.categories.get(item).content !== after.categories.get(item).content)
    .sort()
  const changed = results.some((result) => result.changed)
    || addedArticles.length || removedArticles.length || recategorizedArticles.length
    || addedCategories.length || removedCategories.length || retitledCategories.length || reorderedCategories.length

  if (!changed) {
    console.log('同步完成：没有发现文章或分类变化，没有修改文件。')
    return
  }

  console.log('同步完成。')
  if (!before.hadState && results.some((result) => result.initialized)) {
    console.log(`  初始状态：已记录 ${after.articles.size} 篇文章和 ${after.categories.size} 个分类。`)
  }
  printItems('新增文章', addedArticles)
  printItems('删除文章', removedArticles)
  printItems('文章分类', recategorizedArticles)
  printItems('分类操作', requestedChanges.map(requestedChangeText))
  printItems('新增分类', addedCategories)
  printItems('移除分类路径', removedCategories)
  printItems('分类名称', retitledCategories)
  printItems('分类顺序', reorderedCategories)
  if (before.defaultCategory !== after.defaultCategory) {
    console.log(`  默认分类：${before.defaultCategory} → ${after.defaultCategory}`)
  }
  printItems('自动改写的文章文件', rewrittenArticles)
  printItems('自动改写介绍正文的分类', categoryNotesChanged)
  const checkOutput = [...results].reverse().find((result) => result.checkOutput)?.checkOutput
  if (checkOutput) console.log(`  检查：${checkOutput}`)
}

function sync() {
  const before = syncSnapshot()
  const requestedChanges = loadTree().changes
  const results = []
  if (treeHasRequestedChanges()) results.push(applyFromTree({ quiet: true }))
  results.push(applyFromArticles({ quiet: true }))
  printSyncReport(before, syncSnapshot(), requestedChanges, results)
}

function assertUndoUnchanged(manifest) {
  const expected = manifest.postState
  const conflicts = []
  if (digestDirectory(CATEGORY_ROOT) !== expected.categories) conflicts.push('分类页面')
  if (hashFile(TREE_FILE) !== expected.tree) conflicts.push('category-tree.yml')
  if (hashFile(SITE_CONFIG_PATH) !== expected.site) conflicts.push('site.yml')
  for (const [id, hash] of Object.entries(expected.articles ?? {})) {
    if (hashFile(path.join(ARTICLE_ROOT, id, `${id}.md`)) !== hash) conflicts.push(`文章 ${id}`)
  }
  if (conflicts.length) fail(`上次分类修改后，下列内容又发生了变化；为避免覆盖新内容，本次没有撤销：${conflicts.join('、')}`)
}

function undo() {
  if (!fs.existsSync(LATEST_HISTORY)) fail('没有可以撤销的分类修改。')
  const manifest = JSON.parse(fs.readFileSync(path.join(LATEST_HISTORY, 'manifest.json'), 'utf8'))
  assertUndoUnchanged(manifest)
  const rollback = path.join(HISTORY_ROOT, `undo-rollback-${process.pid}-${Date.now()}`)
  fs.cpSync(CATEGORY_ROOT, path.join(rollback, 'categories'), { recursive: true })
  fs.mkdirSync(path.join(rollback, 'articles'), { recursive: true })
  fs.copyFileSync(SITE_CONFIG_PATH, path.join(rollback, 'site.yml'))
  fs.copyFileSync(TREE_FILE, path.join(rollback, 'category-tree.yml'))
  for (const id of manifest.affectedArticles) {
    const source = path.join(ARTICLE_ROOT, id, `${id}.md`)
    if (fs.existsSync(source)) fs.copyFileSync(source, path.join(rollback, 'articles', `${id}.md`))
  }
  try {
    restorePending(LATEST_HISTORY)
    fs.copyFileSync(path.join(LATEST_HISTORY, 'category-tree.yml'), TREE_FILE)
    const checkOutput = runCheck()
    safeRemove(LATEST_HISTORY)
    safeRemove(rollback)
    console.log(`已撤销最近一次分类修改（${manifest.kind}）。`)
    console.log(checkOutput)
  } catch (error) {
    safeRemove(CATEGORY_ROOT)
    fs.cpSync(path.join(rollback, 'categories'), CATEGORY_ROOT, { recursive: true })
    fs.copyFileSync(path.join(rollback, 'site.yml'), SITE_CONFIG_PATH)
    fs.copyFileSync(path.join(rollback, 'category-tree.yml'), TREE_FILE)
    for (const id of manifest.affectedArticles) {
      const backup = path.join(rollback, 'articles', `${id}.md`)
      const target = path.join(ARTICLE_ROOT, id, `${id}.md`)
      if (fs.existsSync(backup)) fs.copyFileSync(backup, target)
    }
    safeRemove(rollback)
    throw error
  }
}

function help() {
  console.log(`内容同步只使用以下两个命令：

  node blog.mjs sync  同步分类树、文章目录和文章中的 category
  node blog.mjs undo  撤销最近一次成功的分类结构或文章归属修改`)
}

async function notifyDevServer() {
  await notifyBlogDevServer()
}

const command = process.argv[2]
if (!['sync', 'undo'].includes(command)) {
  help()
  if (command) process.exitCode = 1
} else {
  acquireLock()
  try {
    if (command === 'sync') sync()
    if (command === 'undo') undo()
    if (process.env.BLOG_SKIP_DEV_NOTIFICATION !== '1') await notifyDevServer()
  } catch (error) {
    console.error(`\n分类更新失败：${error.message}`)
    process.exitCode = 1
  } finally {
    releaseLock()
  }
}

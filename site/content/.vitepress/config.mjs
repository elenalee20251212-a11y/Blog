import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import matter from 'gray-matter'
import MiniSearch from 'minisearch'
import { defineConfig } from 'vitepress'
import { ARTICLE_ROOT, buildCatalogData, CATEGORY_ROOT, readAllArticles, readCategoryDefinitions, readSite, SITE_CONFIG_PATH, SITE_ROOT } from '../../scripts/site-lib.mjs'
import { renderAllTikz, tikzCacheKey } from '../../scripts/render-tikz.mjs'
import { renderSiteSettings } from '../../scripts/render-site-settings.mjs'
import { BLOG_SERVER_ID, DEFAULT_DEV_PORT } from '../../scripts/dev-server.mjs'
import { markdownPreviewEnhancedMath } from './markdown-mpe-math.mjs'
import {
  markdownPreviewEnhancedCore,
  markdownPreviewEnhancedHeadingText,
  markdownPreviewEnhancedSlugify
} from './markdown-mpe-core.mjs'
import { internalReferences } from './markdown-internal-references.mjs'
import { internalReferencesToText } from '../../scripts/internal-references.mjs'

const virtualCatalog = 'virtual:blog-catalog'
const resolvedVirtualCatalog = `\0${virtualCatalog}`
const resolvedSearchIndex = '\0blog-search-index-root'
const ARTICLE_ROUTES_FILE = path.join(ARTICLE_ROOT, '[__article_page]', 'version.mjs')
const CATEGORY_ROUTES_FILE = path.join(CATEGORY_ROOT, '[__category_path]', 'version.mjs')
const ARTICLE_PATHS_FILE = path.join(ARTICLE_ROOT, '[__article_page]', 'index.paths.mjs')
const CATEGORY_PATHS_FILE = path.join(CATEGORY_ROOT, '[__category_path]', 'index.paths.mjs')
const site = readSite()
const requestedDevPort = Number(process.env.BLOG_DEV_PORT)
const devPort = Number.isInteger(requestedDevPort) && requestedDevPort > 0 && requestedDevPort < 65536
  ? requestedDevPort
  : DEFAULT_DEV_PORT
const brand = site.brand ?? {}
const brandMark = typeof brand.mark === 'string' ? brand.mark : ''
renderSiteSettings({ quiet: true })

function buildThemeSidebar() {
  const catalog = buildCatalogData()
  const categoriesByRoute = new Map(catalog.categories.map((category) => [category.route, category]))
  const articlesById = new Map(catalog.articles.map((article) => [article.id, article]))

  function categoryItem(category) {
    const children = category.childRoutes
      .map((route) => categoriesByRoute.get(route))
      .filter(Boolean)
      .map(categoryItem)
    const articles = category.articleIds
      .map((id) => articlesById.get(id))
      .filter(Boolean)
      .map((article) => ({ text: article.title, link: article.route }))
    const items = [...children, ...articles]
    return {
      text: category.title,
      link: category.route,
      ...(items.length ? { collapsed: category.lineage.length > 1, items } : {})
    }
  }

  return catalog.categories
    .filter((category) => category.lineage.length === 1)
    .map((root) => ({ ...categoryItem(root), collapsed: true }))
}

function registerServerLifecycle(server) {
  server.middlewares.use('/__blog_status', (request, response, next) => {
    if (request.method !== 'GET') return next()
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json; charset=utf-8')
    response.end(JSON.stringify({ id: BLOG_SERVER_ID }))
  })
  server.middlewares.use('/__blog_close', (request, response, next) => {
    if (request.method !== 'POST') return next()
    response.statusCode = 202
    response.end()
    setTimeout(() => server.close(), 50)
  })
}

function searchableText(markdown, extra = '') {
  const text = internalReferencesToText(matter(markdown).content)
    .replace(/```tikz[\s\S]*?```/g, ' ')
    .replace(/```[^\n]*\n([\s\S]*?)```/g, '$1')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[`*_>#|~-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return `${extra} ${text}`.trim()
}

function tokenizeSearchText(value) {
  const tokens = []
  const segments = String(value).toLowerCase().match(/[a-z0-9]+|[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]+/gu) ?? []
  for (const segment of segments) {
    if (!/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(segment)) {
      tokens.push(segment)
      continue
    }
    const chars = [...segment]
    if (chars.length === 1) tokens.push(segment)
    else for (let index = 0; index < chars.length - 1; index += 1) tokens.push(chars.slice(index, index + 2).join(''))
  }
  return tokens
}

function buildSearchIndex() {
  const index = new MiniSearch({
    fields: ['title', 'titles', 'text'],
    storeFields: ['title', 'titles'],
    tokenize: tokenizeSearchText
  })
  const base = (process.env.BASE_PATH || '/').replace(/\/?$/, '/')
  const route = (value) => `${base}${value}`.replace(/\/{2,}/g, '/')
  const taxonomy = readCategoryDefinitions()

  for (const category of taxonomy.definitions) {
    const lineage = category.ids.map((_, depth) => taxonomy.byPath.get(category.ids.slice(0, depth + 1).join('/'))?.title).filter(Boolean)
    index.add({
      id: route(`categories/${category.path}/`),
      title: category.title,
      titles: lineage.slice(0, -1),
      text: searchableText(fs.readFileSync(category.file, 'utf8'), lineage.join(' '))
    })
  }
  for (const article of readAllArticles()) {
    const category = taxonomy.byPath.get(article.frontmatter.category)
    const lineage = category?.ids.map((_, depth) => taxonomy.byPath.get(category.ids.slice(0, depth + 1).join('/'))?.title).filter(Boolean) ?? []
    const tags = Array.isArray(article.frontmatter.tags) ? article.frontmatter.tags : []
    index.add({
      id: route(`articles/${article.id}/`),
      title: article.frontmatter.title,
      titles: lineage,
      text: searchableText(fs.readFileSync(article.file, 'utf8'), `${lineage.join(' ')} ${tags.join(' ')}`)
    })
  }
  return JSON.stringify(index)
}

function searchIndexPlugin() {
  let server
  let refreshTimer

  function refresh() {
    clearTimeout(refreshTimer)
    refreshTimer = setTimeout(() => {
      const indexModule = server?.moduleGraph.getModuleById(resolvedSearchIndex)
      if (indexModule) server.moduleGraph.invalidateModule(indexModule)
      const requestPath = '/@localSearchIndex'
      server?.moduleGraph.onFileChange(requestPath)
      const rootModule = server?.moduleGraph.getModuleById(requestPath)
      if (!rootModule) return
      server.ws.send({
        type: 'update',
        updates: [{ acceptedPath: requestPath, path: requestPath, timestamp: Date.now(), type: 'js-update' }]
      })
    }, 180)
  }

  return {
    name: 'blog-search-index',
    enforce: 'pre',
    resolveId(id) {
      if (id === '@localSearchIndexroot' || id === '/@localSearchIndexroot') return resolvedSearchIndex
    },
    load(id) {
      if (id === resolvedSearchIndex) return `export default ${JSON.stringify(buildSearchIndex())}`
    },
    configureServer(currentServer) {
      server = currentServer
      currentServer.watcher.on('add', (file) => {
        if (isNamedContentSource(file)) refresh()
      })
      currentServer.watcher.on('unlink', (file) => {
        if (isNamedContentSource(file)) refresh()
      })
    },
    handleHotUpdate({ file }) {
      if (isNamedContentSource(file)) refresh()
    }
  }
}

function isNamedContentSource(file) {
  const resolved = path.resolve(file)
  const insideArticles = path.relative(ARTICLE_ROOT, resolved)
  const insideCategories = path.relative(CATEGORY_ROOT, resolved)
  const inside = (relative) => relative && !relative.startsWith('..') && !path.isAbsolute(relative)
  return path.extname(resolved) === '.md'
    && path.basename(resolved, '.md') === path.basename(path.dirname(resolved))
    && (inside(insideArticles) || inside(insideCategories))
}

function catalogPlugin() {
  const signatures = new Map()
  let restartTimer
  let catalogReloadTimer

  function reloadCatalog(server) {
    const module = server.moduleGraph.getModuleById(resolvedVirtualCatalog)
    if (module) server.moduleGraph.invalidateModule(module)
    server.ws.send({ type: 'full-reload', path: '*' })
  }

  function refreshDynamicRoutes(file, server, reload = false) {
    clearTimeout(restartTimer)
    restartTimer = setTimeout(() => {
      const now = new Date()
      const article = isInside(file, ARTICLE_ROOT)
      const pathsFile = article ? ARTICLE_PATHS_FILE : CATEGORY_PATHS_FILE
      const dependencyFile = article ? ARTICLE_ROUTES_FILE : CATEGORY_ROUTES_FILE
      fs.utimesSync(pathsFile, now, now)
      setTimeout(() => {
        const dependencyTime = new Date()
        fs.utimesSync(dependencyFile, dependencyTime, dependencyTime)
      }, 60)
    }, 80)
    if (reload) {
      clearTimeout(catalogReloadTimer)
      catalogReloadTimer = setTimeout(() => reloadCatalog(server), 300)
    }
  }

  function isInside(file, directory) {
    const relative = path.relative(directory, file)
    return relative && !relative.startsWith('..') && !path.isAbsolute(relative)
  }

  function isNamedContentFile(file) {
    return path.extname(file) === '.md' && path.basename(file, '.md') === path.basename(path.dirname(file))
  }

  function syncContent() {
    const result = spawnSync(process.execPath, [path.join(SITE_ROOT, 'scripts', 'categories.mjs'), 'sync'], {
      cwd: SITE_ROOT,
      encoding: 'utf8',
      env: { ...process.env, BLOG_SKIP_DEV_NOTIFICATION: '1' }
    })
    if (result.status !== 0) {
      const message = [result.stdout, result.stderr].filter(Boolean).join('\n').trim()
      throw new Error(message || '博客内容同步失败。')
    }
    const report = result.stdout.trim()
    if (report && !report.includes('没有发现文章或分类变化')) console.log(`\n${report}`)
  }

  function metadataSignature(file) {
    if (!fs.existsSync(file) || !isNamedContentFile(file)) return ''
    const parsed = matter(fs.readFileSync(file, 'utf8'))
    if (isInside(file, CATEGORY_ROOT)) {
      return JSON.stringify({ data: parsed.data, content: parsed.content })
    }
    if (isInside(file, ARTICLE_ROOT)) {
      const { title, date, tags, articleId, category, order, categoryNote } = parsed.data
      return JSON.stringify({ title, date, tags, articleId, category, order, categoryNote })
    }
    return ''
  }

  function prime(directory) {
    if (!fs.existsSync(directory)) return
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const full = path.join(directory, entry.name)
      if (entry.isDirectory()) prime(full)
      else if (entry.isFile() && isNamedContentFile(full)) signatures.set(full, metadataSignature(full))
    }
  }

  return {
    name: 'blog-catalog',
    async handleHotUpdate(context) {
      const resolved = path.resolve(context.file)
      if (!isNamedContentFile(resolved)) return
      if (!isInside(resolved, ARTICLE_ROOT) && !isInside(resolved, CATEGORY_ROOT)) return
      if (isInside(resolved, ARTICLE_ROOT)) syncContent()
      const next = metadataSignature(resolved)
      const previous = signatures.get(resolved)
      signatures.set(resolved, next)
      refreshDynamicRoutes(resolved, context.server, next !== previous)
      if (next !== previous) {
        return []
      }
    },
    resolveId(id) {
      if (id === virtualCatalog) return resolvedVirtualCatalog
    },
    load(id) {
      if (id === resolvedVirtualCatalog) {
        return `export default ${JSON.stringify(buildCatalogData())}`
      }
    },
    configureServer(server) {
      prime(ARTICLE_ROOT)
      prime(CATEGORY_ROOT)
      server.watcher.add([SITE_CONFIG_PATH, ARTICLE_ROOT, CATEGORY_ROOT])
      registerServerLifecycle(server)
      server.middlewares.use('/__blog_refresh', (request, response, next) => {
        if (request.method !== 'POST') return next()
        response.statusCode = 204
        response.end()
        clearTimeout(catalogReloadTimer)
        catalogReloadTimer = setTimeout(() => {
          server.moduleGraph.invalidateAll()
          reloadCatalog(server)
        }, 120)
      })
      server.watcher.on('change', async (file) => {
        const resolved = path.resolve(file)
        if (resolved === SITE_CONFIG_PATH) {
          renderSiteSettings({ quiet: true })
          reloadCatalog(server)
        }
      })
      server.watcher.on('add', async (file) => {
        const resolved = path.resolve(file)
        if (!isNamedContentFile(resolved)) return
        if (!isInside(resolved, ARTICLE_ROOT) && !isInside(resolved, CATEGORY_ROOT)) return
        if (isInside(resolved, ARTICLE_ROOT)) syncContent()
        if (signatures.has(resolved)) return
        signatures.set(resolved, metadataSignature(resolved))
        refreshDynamicRoutes(resolved, server, true)
      })
      server.watcher.on('unlink', async (file) => {
        const resolved = path.resolve(file)
        if (!signatures.has(resolved)) return
        signatures.delete(resolved)
        if (isInside(resolved, ARTICLE_ROOT)) syncContent()
        refreshDynamicRoutes(resolved, server, true)
      })
    }
  }
}

function tikzHotUpdatePlugin() {
  return {
    name: 'blog-tikz-hot-update',
    enforce: 'pre',
    async handleHotUpdate(context) {
      if (context.file.endsWith('.md')) await renderAllTikz({ quiet: true })
    }
  }
}

function tikzFence(md) {
  const fallback = md.renderer.rules.fence
  md.renderer.rules.fence = (tokens, index, options, env, self) => {
    const token = tokens[index]
    if (token.info.trim().split(/\s+/)[0] !== 'tikz') {
      return fallback(tokens, index, options, env, self)
    }
    // Markdown-it normalizes line endings before producing fence tokens.
    // tikzCacheKey 使用与预渲染器相同的规范化与围栏属性，保证 Windows
    // 本地检出和 GitHub 的 Linux 运行器指向同一个缓存图。
    const hash = tikzCacheKey(token.content, token.info)
    const file = path.join(SITE_ROOT, '.cache', 'tikz', `${hash}.svg`)
    if (!fs.existsSync(file)) {
      throw new Error(`TikZ cache missing for ${env.path ?? 'unknown page'}; run npm run tikz`)
    }
    const sourceSvg = fs.readFileSync(file, 'utf8')
    const naturalWidth = Number(sourceSvg.match(/<svg[^>]*\bwidth="([\d.]+)"/)?.[1] ?? 320)
    const viewBoxWidth = Number(sourceSvg.match(/<svg[^>]*\bviewBox="[^\s"]+\s+[^\s"]+\s+([\d.]+)/)?.[1] ?? naturalWidth)
    const mainFontSize = Math.max(
      10,
      ...[...sourceSvg.matchAll(/\bfont-size="([\d.]+)"/g)].map((match) => Number(match[1])).filter(Number.isFinite)
    )
    // node-tikzjax writes dimensions in SVG pixels while its TeX labels use
    // 10pt (or the explicit LaTeX size).  Express the diagram width in em so
    // its largest ordinary label is 1.1em, matching the visual size of a
    // normal displayed KaTeX formula at every configured article font size.
    const normalizedWidth = (viewBoxWidth / mainFontSize * 1.1).toFixed(3)
    const svg = sourceSvg.replace(
      '<svg ',
      `<svg class="tikz-svg" role="img" aria-label="交换图" style="--tikz-natural-width:${naturalWidth}px;--tikz-normalized-width:${normalizedWidth}em" `
    )
    return `<figure class="tikz-diagram">${svg}<figcaption>交换图</figcaption></figure>`
  }
}

export default defineConfig({
  lang: 'zh-CN',
  title: site.title || "Elena's Blog",
  description: site.description || '数学笔记、编程记录与随笔',
  appearance: false,
  base: process.env.BASE_PATH || '/',
  cleanUrls: true,
  srcExclude: [
    'drafts/**',
    'articles/[A-Za-z0-9-]*/[A-Za-z0-9-]*.md',
    'categories/[A-Za-z0-9-]*/[A-Za-z0-9-]*.md',
    'categories/[A-Za-z0-9-]*/[A-Za-z0-9-]*/[A-Za-z0-9-]*.md',
    'categories/[A-Za-z0-9-]*/[A-Za-z0-9-]*/[A-Za-z0-9-]*/[A-Za-z0-9-]*.md'
  ],
  lastUpdated: true,
  sitemap: { hostname: process.env.SITE_HOSTNAME || 'https://deideidei.github.io' },
  head: [
    ['meta', { name: 'theme-color', content: '#fcfbf7' }],
    ['meta', { name: 'color-scheme', content: 'light' }],
    ['style', {}, `:root{--site-brand-mark:${JSON.stringify(brandMark)}}`]
  ],
  markdown: {
    anchor: {
      slugify: markdownPreviewEnhancedSlugify,
      getTokensText: markdownPreviewEnhancedHeadingText
    },
    math: false,
    breaks: true,
    typographer: false,
    linkify: false,
    lineNumbers: false,
    image: { lazyLoading: true },
    config(md) {
      markdownPreviewEnhancedCore(md)
      markdownPreviewEnhancedMath(md)
      internalReferences(md)
      tikzFence(md)
    }
  },
  themeConfig: {
    logo: brand.image
      ? { src: brand.image, alt: brand.imageAlt || site.title || 'Site logo' }
      : false,
    nav: [
      { text: '首页', link: '/' },
      { text: '分类', link: '/categories/mathematics/' },
      { text: '标签', link: '/tags/' }
    ],
    sidebar: buildThemeSidebar(),
    outline: { level: [2, 4], label: '本文目录' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '全部分类',
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新于' },
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: { tokenize: tokenizeSearchText }
        },
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    }
  },
  vite: {
    plugins: [searchIndexPlugin(), tikzHotUpdatePlugin(), catalogPlugin()],
    server: { host: '127.0.0.1', port: devPort, strictPort: true },
    preview: { host: '127.0.0.1', port: 4173, strictPort: true }
  }
})

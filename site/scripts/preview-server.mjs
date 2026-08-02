import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { preview } from 'vite'
import { BLOG_SERVER_ID, DEFAULT_PREVIEW_PORT } from './dev-server.mjs'

const SITE_ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const DIST_ROOT = path.join(SITE_ROOT, 'content', '.vitepress', 'dist')
const requestedPort = Number(process.env.BLOG_PREVIEW_PORT)
const port = Number.isInteger(requestedPort) && requestedPort > 0 && requestedPort < 65536
  ? requestedPort
  : DEFAULT_PREVIEW_PORT

const lifecyclePlugin = {
  name: 'blog-preview-lifecycle',
  configurePreviewServer(server) {
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
}

const server = await preview({
  root: SITE_ROOT,
  build: { outDir: DIST_ROOT },
  plugins: [lifecyclePlugin],
  preview: { host: '127.0.0.1', port, strictPort: true }
})

server.printUrls()

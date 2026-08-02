import net from 'node:net'

export const BLOG_SERVER_ID = 'elena-blog-dev-server-v1'
export const DEFAULT_DEV_PORT = 5173
export const LAST_DEV_PORT = 5193
export const DEFAULT_PREVIEW_PORT = 4173
export const LAST_PREVIEW_PORT = 4193

export async function probeBlogServer(port, timeout = 500) {
  try {
    const response = await fetch(`http://127.0.0.1:${port}/__blog_status`, {
      signal: AbortSignal.timeout(timeout)
    })
    if (!response.ok) return false
    const status = await response.json()
    return status?.id === BLOG_SERVER_ID
  } catch {
    return false
  }
}

export function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer()
    server.unref()
    server.once('error', () => resolve(false))
    server.listen({ host: '127.0.0.1', port }, () => {
      server.close(() => resolve(true))
    })
  })
}

export async function selectDevServer() {
  for (let port = DEFAULT_DEV_PORT; port <= LAST_DEV_PORT; port += 1) {
    if (await probeBlogServer(port)) return { state: 'running', port }
    if (await isPortAvailable(port)) return { state: 'available', port }
  }
  return { state: 'unavailable' }
}

export async function selectPreviewServer() {
  for (let port = DEFAULT_PREVIEW_PORT; port <= LAST_PREVIEW_PORT; port += 1) {
    if (await probeBlogServer(port)) return { state: 'running', port }
    if (await isPortAvailable(port)) return { state: 'available', port }
  }
  return { state: 'unavailable' }
}

export async function notifyBlogDevServer() {
  for (let port = DEFAULT_DEV_PORT; port <= LAST_DEV_PORT; port += 1) {
    if (!await probeBlogServer(port, 200)) continue
    try {
      await fetch(`http://127.0.0.1:${port}/__blog_refresh`, {
        method: 'POST',
        signal: AbortSignal.timeout(1500)
      })
    } catch {}
    return
  }
}

export async function closeBlogServers() {
  const closed = []
  const ports = [
    ...Array.from({ length: LAST_PREVIEW_PORT - DEFAULT_PREVIEW_PORT + 1 }, (_, index) => DEFAULT_PREVIEW_PORT + index),
    ...Array.from({ length: LAST_DEV_PORT - DEFAULT_DEV_PORT + 1 }, (_, index) => DEFAULT_DEV_PORT + index)
  ]
  for (const port of ports) {
    if (!await probeBlogServer(port, 200)) continue
    try {
      const response = await fetch(`http://127.0.0.1:${port}/__blog_close`, {
        method: 'POST',
        signal: AbortSignal.timeout(1500)
      })
      if (response.ok) closed.push(port)
    } catch {}
  }
  return closed
}

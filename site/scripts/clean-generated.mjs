import fs from 'node:fs'
import path from 'node:path'
import { SITE_ROOT } from './site-lib.mjs'

const generatedDirectories = [
  path.join(SITE_ROOT, 'content', '.vitepress', 'dist'),
  path.join(SITE_ROOT, 'content', '.vitepress', 'cache')
]

try {
  const response = await fetch('http://127.0.0.1:5173/', { signal: AbortSignal.timeout(800) })
  if (response.ok) {
    console.error('5173 端口上的本地网站仍在运行。在运行 node blog.mjs server 的命令行窗口中按 Ctrl+C 停止网站后，可以再次清理。')
    process.exit(1)
  }
} catch {}

for (const directory of generatedDirectories) {
  if (!fs.existsSync(directory)) continue
  fs.rmSync(directory, { recursive: true, force: true })
  console.log(`已清理：${path.relative(SITE_ROOT, directory)}`)
}

console.log('文章、图片、分类文件和 TikZ 缓存均未修改。')

import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import {
  closeBlogServers,
  DEFAULT_DEV_PORT,
  DEFAULT_PREVIEW_PORT,
  LAST_DEV_PORT,
  LAST_PREVIEW_PORT,
  selectDevServer,
  selectPreviewServer
} from './scripts/dev-server.mjs'

const ROOT = path.dirname(fileURLToPath(import.meta.url))
const CONTENT_COMMAND = path.join(ROOT, 'scripts', 'blog.mjs')
const CATEGORY_COMMAND = path.join(ROOT, 'scripts', 'categories.mjs')
const DEPLOY_COMMAND = path.join(ROOT, 'scripts', 'deploy.mjs')

const HELP = {
  new: `用法：
  node blog.mjs new <文章文件名>
  node blog.mjs new draft <草稿文件名>

结果：建立使用临时标题的文章或草稿文件夹。`,
  drafts: `用法：
  node blog.mjs drafts

结果：列出全部草稿及其文件位置。`,
  publish: `用法：
  node blog.mjs publish <草稿文件名>

结果：选择第三级分类后，把完整草稿文件夹发布为正式文章。`,
  rename: `用法：
  node blog.mjs rename <原文章文件名> <新文章文件名>

结果：同步修改文章文件夹、Markdown 文件、文章标识、网址和站内文章链接。`,
  remove: `用法：
  node blog.mjs remove <文章文件名> [--yes]

结果：检查站内引用并确认后，把完整文章文件夹移入项目回收区。可选的 --yes 表示不再询问确认。`,
  discard: `用法：
  node blog.mjs discard <草稿文件名> [--yes]

结果：确认后，把完整草稿文件夹移入项目回收区。可选的 --yes 表示不再询问确认。`,
  restore: `用法：
  node blog.mjs restore article
  node blog.mjs restore draft

结果：分别列出已移除的文章或草稿，并恢复选中的完整文件夹。`,
  trash: `用法：
  node blog.mjs trash

结果：列出项目回收区中的文章和草稿。`,
  sync: `用法：
  node blog.mjs sync

结果：读取 category-tree.yml 和全部文章文件夹，应用分类结构修改、文章新增或删除以及文章中的 category 变化，并逐项报告实际改动。没有变化时不写文件。`,
  undo: `用法：
  node blog.mjs undo

结果：撤销最近一次成功同步造成的分类结构或文章归属修改；不会恢复手工删除的文章文件夹。`,
  server: `用法：
  node blog.mjs server

结果：同步文章与分类并启动本地网站。优先使用 http://127.0.0.1:5173/；该端口被其他程序占用时使用随后第一个空闲端口。`,
  close: `用法：
  node blog.mjs close

结果：停止由本项目启动的本地网站或静态网站预览。没有本项目网站正在运行时不修改任何进程。`,
  generate: `用法：
  node blog.mjs generate

结果：同步文章与分类并生成 GitHub Pages 使用的静态网站。`,
  deploy: `用法：
  node blog.mjs deploy
  node blog.mjs deploy -m <本次上传的说明>
  node blog.mjs deploy --dry-run

结果：按照 site.yml 中的部署设置生成网站，记录项目变化并上传源码；GitHub Actions 随后发布网页。-m 可以填写本次 Git 提交的说明；--dry-run 会生成网站并报告目标，但不暂存、提交或上传文件。`,
  preview: `用法：
  node blog.mjs preview

结果：显示最近一次生成的静态网站。优先使用 http://127.0.0.1:4173/；该端口被其他程序占用时使用随后第一个空闲端口。`,
  check: `用法：
  node blog.mjs check

结果：只检查程序语法、内容结构和本地资源，不修改项目文件。`,
  clean: `用法：
  node blog.mjs clean

结果：移除可重新生成的构建输出和临时缓存，保留源文章与资源。`
}

function generalHelp() {
  return `博客命令

内容：
  node blog.mjs new <文章文件名>               新建正式文章
  node blog.mjs new draft <草稿文件名>          新建草稿
  node blog.mjs drafts                           列出草稿
  node blog.mjs publish <草稿文件名>            发布草稿
  node blog.mjs rename <原名> <新名>             重命名文章
  node blog.mjs remove <文章文件名>             移除文章
  node blog.mjs discard <草稿文件名>            移除草稿
  node blog.mjs restore article                  恢复文章
  node blog.mjs restore draft                    恢复草稿
  node blog.mjs trash                            列出回收区内容

同步：
  node blog.mjs sync                             同步文章与分类
  node blog.mjs undo                             撤销最近一次分类修改

网站：
  node blog.mjs server                           启动本地网站
  node blog.mjs close                            停止本项目的网站服务
  node blog.mjs generate                         生成静态网站
  node blog.mjs deploy                           上传并发布网站
  node blog.mjs preview                          查看生成结果
  node blog.mjs check                            只检查，不修改文件
  node blog.mjs clean                            清理可重新生成的文件

帮助：
  node blog.mjs help [命令]
  node blog.mjs <命令> --help`
}

function failUsage(command, message) {
  if (message) console.error(`错误：${message}\n`)
  console.error(HELP[command] ?? generalHelp())
  process.exitCode = 1
}

function noArguments(command, values) {
  if (values.length) {
    failUsage(command, `命令 ${command} 不接受其他内容。`)
    return false
  }
  return true
}

function removableArguments(command, values) {
  if (!values[0]) {
    failUsage(command, command === 'remove' ? '缺少文章文件名。' : '缺少草稿文件名。')
    return false
  }
  if (values.length > 2 || (values[1] && values[1] !== '--yes')) {
    failUsage(command, '文件名后只能省略内容，或填写可选的 --yes。')
    return false
  }
  return true
}

function runNode(script, args) {
  return run(process.execPath, [script, ...args], false)
}

function runNpm(script, extraEnvironment = {}) {
  const executable = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  return run(executable, ['run', script], process.platform === 'win32', extraEnvironment)
}

function run(executable, args, shell, extraEnvironment = {}) {
  const child = spawn(executable, args, {
    cwd: ROOT,
    stdio: 'inherit',
    shell,
    env: { ...process.env, ...extraEnvironment }
  })
  child.on('error', (error) => {
    console.error(`命令无法启动：${error.message}`)
    process.exitCode = 1
  })
  child.on('exit', (code, signal) => {
    if (signal) process.exitCode = 1
    else process.exitCode = code ?? 1
  })
}

async function startServer() {
  const selection = await selectDevServer()
  if (selection.state === 'running') {
    console.log(`本地网站已经在运行：http://127.0.0.1:${selection.port}/`)
    return
  }
  if (selection.state === 'unavailable') {
    failUsage('server', `${DEFAULT_DEV_PORT} 至 ${LAST_DEV_PORT} 端口均已被其他程序占用。`)
    return
  }
  if (selection.port !== DEFAULT_DEV_PORT) {
    console.log(`${DEFAULT_DEV_PORT} 端口已被其他程序占用，本地网站将使用 http://127.0.0.1:${selection.port}/`)
  }
  runNpm('dev', { BLOG_DEV_PORT: String(selection.port) })
}

async function closeServer() {
  const ports = await closeBlogServers()
  if (!ports.length) {
    console.log('本项目没有正在运行的网站服务。')
    return
  }
  console.log(`本项目的网站服务已停止：${ports.map((port) => `http://127.0.0.1:${port}/`).join('、')}`)
}

async function startPreview() {
  const selection = await selectPreviewServer()
  if (selection.state === 'running') {
    console.log(`静态网站预览已经在运行：http://127.0.0.1:${selection.port}/`)
    return
  }
  if (selection.state === 'unavailable') {
    failUsage('preview', `${DEFAULT_PREVIEW_PORT} 至 ${LAST_PREVIEW_PORT} 端口均已被其他程序占用。`)
    return
  }
  if (selection.port !== DEFAULT_PREVIEW_PORT) {
    console.log(`${DEFAULT_PREVIEW_PORT} 端口已被其他程序占用，静态网站预览将使用 http://127.0.0.1:${selection.port}/`)
  }
  runNpm('preview', { BLOG_PREVIEW_PORT: String(selection.port) })
}

const args = process.argv.slice(2)
const command = args[0]
const rest = args.slice(1)

if (!command || command === 'help' || command === '--help' || command === '-h') {
  const topic = command === 'help' ? rest[0] : undefined
  if (command === 'help' && rest.length > 1) failUsage('', 'help 后面最多填写一个操作名称。')
  else if (topic && !HELP[topic]) failUsage('', `没有名为 ${topic} 的帮助主题。`)
  else console.log(topic ? HELP[topic] : generalHelp())
} else if (rest.includes('--help') || rest.includes('-h')) {
  if (!HELP[command]) failUsage('', `不认识命令 ${command}。`)
  else console.log(HELP[command])
} else if (command === 'new') {
if (rest[0] === 'draft') {
    if (!rest[1]) failUsage('new', '缺少草稿文件名。')
    else if (rest.length !== 2) failUsage('new', '草稿文件名后不能填写其他内容。')
    else runNode(CONTENT_COMMAND, ['draft', 'new', rest[1], ...rest.slice(2)])
  } else if (!rest[0]) {
    failUsage('new', '缺少文章文件名。')
  } else if (rest.length !== 1) {
    failUsage('new', '文章文件名后不能填写其他内容。')
  } else {
    runNode(CONTENT_COMMAND, ['article', 'new', rest[0], ...rest.slice(1)])
  }
} else if (command === 'drafts') {
  if (noArguments('drafts', rest)) runNode(CONTENT_COMMAND, ['draft', 'list'])
} else if (command === 'publish') {
  if (!rest[0]) failUsage('publish', '缺少草稿文件名。')
  else if (rest.length !== 1) failUsage('publish', '草稿文件名后不能填写其他内容。')
  else runNode(CONTENT_COMMAND, ['draft', 'publish', ...rest])
} else if (command === 'rename') {
  if (!rest[0] || !rest[1]) failUsage('rename', '需要原文章文件名和新文章文件名。')
  else if (rest.length !== 2) failUsage('rename', '新文章文件名后不能填写其他内容。')
  else runNode(CONTENT_COMMAND, ['article', 'rename', ...rest])
} else if (command === 'remove') {
  if (removableArguments('remove', rest)) runNode(CONTENT_COMMAND, ['article', 'remove', ...rest])
} else if (command === 'discard') {
  if (removableArguments('discard', rest)) runNode(CONTENT_COMMAND, ['draft', 'remove', ...rest])
} else if (command === 'restore') {
  if (!['article', 'draft'].includes(rest[0])) failUsage('restore', '恢复类型只能是 article 或 draft。')
  else if (rest.length !== 1) failUsage('restore', '恢复类型后不能填写其他内容。')
  else runNode(CONTENT_COMMAND, ['restore', ...rest])
} else if (command === 'trash') {
  if (noArguments('trash', rest)) runNode(CONTENT_COMMAND, ['trash'])
} else if (command === 'sync') {
  if (noArguments('sync', rest)) runNode(CATEGORY_COMMAND, ['sync'])
} else if (command === 'undo') {
  if (noArguments('undo', rest)) runNode(CATEGORY_COMMAND, ['undo'])
} else if (command === 'server') {
  if (noArguments('server', rest)) await startServer()
} else if (command === 'close') {
  if (noArguments('close', rest)) await closeServer()
} else if (command === 'generate') {
  if (noArguments('generate', rest)) runNpm('build')
} else if (command === 'deploy') {
  runNode(DEPLOY_COMMAND, rest)
} else if (command === 'preview') {
  if (noArguments('preview', rest)) await startPreview()
} else if (command === 'check') {
  if (noArguments('check', rest)) runNpm('check')
} else if (command === 'clean') {
  if (noArguments('clean', rest)) runNpm('clean')
} else {
  failUsage('', `不认识命令 ${command}。`)
}

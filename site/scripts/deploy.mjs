import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import YAML from 'yaml'

const SITE_ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const PROJECT_ROOT = path.dirname(SITE_ROOT)
const SITE_CONFIG = path.join(SITE_ROOT, 'site.yml')

function fail(message) {
  console.error(`上传未执行：${message}`)
  process.exit(1)
}

function execute(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd ?? PROJECT_ROOT,
    env: { ...process.env, ...(options.env ?? {}) },
    encoding: 'utf8',
    shell: options.shell ?? false,
    stdio: options.capture ? ['ignore', 'pipe', 'pipe'] : 'inherit'
  })

  if (result.error) fail(`${command} 无法启动：${result.error.message}`)
  if (result.status !== 0 && !options.allowFailure) {
    const detail = options.capture ? (result.stderr || result.stdout || '').trim() : ''
    fail(detail || `${command} 执行失败。`)
  }
  return result
}

function git(args, options = {}) {
  return execute('git', args, { ...options, capture: options.capture ?? true })
}

function output(result) {
  return (result.stdout ?? '').trim()
}

function readDeployment() {
  const site = YAML.parse(fs.readFileSync(SITE_CONFIG, 'utf8')) ?? {}
  const deploy = site.deploy ?? {}
  const repository = String(deploy.repository ?? '').trim()
  const branch = String(deploy.branch ?? 'main').trim()
  const basePath = String(deploy.basePath ?? '/').trim()
  const siteUrl = String(deploy.siteUrl ?? '').trim()

  if (!/^https:\/\/github\.com\/[^/]+\/[^/]+(?:\.git)?$/i.test(repository)) {
    fail('site.yml 中的 deploy.repository 不是完整的 GitHub 仓库地址。')
  }
  if (!/^[A-Za-z0-9._/-]+$/.test(branch)) fail('site.yml 中的 deploy.branch 不是有效的 Git 分支名称。')
  if (!basePath.startsWith('/') || !basePath.endsWith('/')) {
    fail('site.yml 中的 deploy.basePath 必须以 / 开头并以 / 结尾。')
  }
  if (!siteUrl) fail('site.yml 中缺少 deploy.siteUrl。')
  try {
    new URL(siteUrl)
  } catch {
    fail('site.yml 中的 deploy.siteUrl 不是完整网址。')
  }

  return { repository, branch, basePath, siteUrl }
}

function parseArguments(values) {
  let message = ''
  let dryRun = false
  for (let index = 0; index < values.length; index += 1) {
    const value = values[index]
    if (value === '--dry-run') {
      dryRun = true
    } else if (value === '-m' || value === '--message') {
      message = values[index + 1] ?? ''
      if (!message) fail(`${value} 后面缺少提交说明。`)
      index += 1
    } else {
      fail(`无法识别 deploy 的内容：${value}`)
    }
  }
  return { message, dryRun }
}

function repositoryWebUrl(repository) {
  return repository.replace(/\.git$/i, '')
}

function countChanges(lines) {
  const counts = { added: 0, modified: 0, deleted: 0, renamed: 0, other: 0 }
  for (const line of lines) {
    const code = line.trimStart()[0]
    if (code === 'A') counts.added += 1
    else if (code === 'M') counts.modified += 1
    else if (code === 'D') counts.deleted += 1
    else if (code === 'R') counts.renamed += 1
    else counts.other += 1
  }
  return counts
}

function printChangeSummary(lines) {
  const counts = countChanges(lines)
  console.log(`文件变化：新增 ${counts.added}，修改 ${counts.modified}，删除 ${counts.deleted}，重命名 ${counts.renamed}${counts.other ? `，其他 ${counts.other}` : ''}。`)
  const shown = lines.slice(0, 12)
  for (const line of shown) console.log(`  ${line}`)
  if (lines.length > shown.length) console.log(`  另有 ${lines.length - shown.length} 项未逐项显示。`)
}

function defaultMessage() {
  const parts = new Intl.DateTimeFormat('sv-SE', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false
  }).formatToParts(new Date())
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]))
  return `Update blog: ${values.year}-${values.month}-${values.day} ${values.hour}:${values.minute}:${values.second}`
}

function ensureRepository(deploy, dryRun) {
  const rootResult = git(['rev-parse', '--show-toplevel'], { capture: true, allowFailure: true })
  if (rootResult.status !== 0) fail(`项目文件夹不是 Git 仓库：${PROJECT_ROOT}`)
  if (path.resolve(output(rootResult)) !== path.resolve(PROJECT_ROOT)) {
    fail(`Git 仓库根目录不是预期的项目文件夹：${output(rootResult)}`)
  }

  const remoteResult = git(['remote', 'get-url', 'origin'], { capture: true, allowFailure: true })
  if (remoteResult.status === 0) {
    const current = output(remoteResult).replace(/\/$/, '')
    const expected = deploy.repository.replace(/\/$/, '')
    if (current !== expected) {
      fail(`origin 当前指向 ${current}，与 site.yml 中的 ${expected} 不同；为避免上传到错误仓库，命令已经停止。`)
    }
  } else if (dryRun) {
    console.log(`首次正式上传时会建立 origin：${deploy.repository}`)
  } else {
    git(['remote', 'add', 'origin', deploy.repository], { capture: false })
    console.log(`已建立远程仓库 origin：${deploy.repository}`)
  }

  const headResult = git(['rev-parse', '--verify', 'HEAD'], { capture: true, allowFailure: true })
  const branchResult = git(['symbolic-ref', '--short', 'HEAD'], { capture: true, allowFailure: true })
  const currentBranch = output(branchResult)
  if (headResult.status !== 0 && currentBranch && currentBranch !== deploy.branch) {
    if (dryRun) console.log(`首次正式上传时会把本地分支由 ${currentBranch} 改为 ${deploy.branch}。`)
    else git(['branch', '-M', deploy.branch], { capture: false })
  }
}

function generate(deploy) {
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  console.log('正在自动同步文章与分类……')
  console.log(`同步成功后将生成 GitHub Pages 版本（网站路径 ${deploy.basePath}）……`)
  execute(npm, ['run', 'build'], {
    cwd: SITE_ROOT,
    shell: process.platform === 'win32',
    env: {
      BASE_PATH: deploy.basePath,
      SITE_HOSTNAME: deploy.siteUrl
    }
  })
}

function main() {
  const arguments_ = parseArguments(process.argv.slice(2))
  const deploy = readDeployment()
  generate(deploy)
  ensureRepository(deploy, arguments_.dryRun)

  if (arguments_.dryRun) {
    const status = output(git(['status', '--short'], { capture: true }))
    const lines = status ? status.split(/\r?\n/) : []
    console.log('\n验证完成：没有修改 Git 状态，也没有上传。')
    console.log(`目标仓库：${deploy.repository}`)
    console.log(`目标分支：${deploy.branch}`)
    console.log(`网页地址：${deploy.siteUrl}`)
    if (lines.length) {
      console.log(`当前有 ${lines.length} 项尚未提交；正式上传时会由 Git 记录这些变化。`)
    } else {
      console.log('当前没有尚未提交的文件变化。')
    }
    return
  }

  git(['add', '-A'], { capture: false })
  const staged = output(git(['diff', '--cached', '--name-status'], { capture: true }))
  const stagedLines = staged ? staged.split(/\r?\n/) : []

  if (stagedLines.length) {
    console.log('即将记录并上传以下项目变化：')
    printChangeSummary(stagedLines)
    git(['commit', '-m', arguments_.message || defaultMessage()], { capture: false })
  } else {
    console.log('没有新的文件变化；将检查是否存在尚未上传的本地提交。')
  }

  git(['push', '-u', 'origin', `HEAD:${deploy.branch}`], { capture: false })
  const commit = output(git(['rev-parse', '--short', 'HEAD'], { capture: true }))
  const repositoryUrl = repositoryWebUrl(deploy.repository)

  console.log('\n上传完成。')
  console.log(`提交：${commit}`)
  console.log(`仓库：${repositoryUrl}`)
  console.log(`分支：${deploy.branch}`)
  console.log(`发布进度：${repositoryUrl}/actions`)
  console.log(`网页地址：${deploy.siteUrl}`)
  console.log('GitHub Actions 完成后，网页会显示本次上传的内容。')
}

main()

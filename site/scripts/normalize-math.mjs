import fs from 'node:fs'
import path from 'node:path'
import { CONTENT_ROOT } from './site-lib.mjs'

export function normalizeDisplayMath(markdown) {
  const lines = markdown.split(/(?<=\n)/)
  let fenced = false
  let pending = ''
  let output = ''

  function flush() {
    output += pending.replace(/(?<!\\)\$\$([\s\S]*?)(?<!\\)\$\$/g, (_match, body) =>
      `\n\n$$${body}$$\n\n`
    )
    pending = ''
  }

  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      flush()
      fenced = !fenced
      output += line
    } else if (fenced) {
      output += line
    } else {
      pending += line
    }
  }
  flush()
  return output.replace(/\n{3,}/g, '\n\n')
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
  let changed = 0
  const articleRoot = path.join(CONTENT_ROOT, 'articles')
  for (const entry of fs.readdirSync(articleRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const file = path.join(articleRoot, entry.name, `${entry.name}.md`)
    const before = fs.readFileSync(file, 'utf8')
    const after = normalizeDisplayMath(before)
    if (after !== before) {
      fs.writeFileSync(file, after, 'utf8')
      changed += 1
    }
  }
  console.log(`Normalized display-math boundaries in ${changed} article(s).`)
}

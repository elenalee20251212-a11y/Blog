import assert from 'node:assert/strict'
import { createMarkdownRenderer } from 'vitepress'
import { markdownPreviewEnhancedMath } from '../content/.vitepress/markdown-mpe-math.mjs'

const md = await createMarkdownRenderer(process.cwd(), {
  math: true,
  breaks: true,
  config: markdownPreviewEnhancedMath
})

const trailingSpace = md.render(
  '考虑到 $R\\to \\mathbb{Z}\\times \\mathbb{Z} $ 即 $(m,n)\\mapsto m\\pmod p$。'
)
assert(!trailingSpace.includes('$R\\to'))
assert.match(trailingSpace, /<mjx-container class="MathJax"/)
assert.match(trailingSpace, /考虑到/)

const permissiveEdges = md.render('空格 $ x $，数字 $5$，转义 \\$x\\$。')
assert.equal((permissiveEdges.match(/<mjx-container/g) ?? []).length, 2)
assert.match(permissiveEdges, /\$x\$/)

const ordinaryDisplay = md.render('$$\\begin{aligned}a&=b\\\\c&=d\\end{aligned}$$')
assert.match(ordinaryDisplay, /display="true"/)

const proseAfterUnmatchedFence = md.render(
  '$$\n\n$\\rm{2.7.4\\ }$ (a) 两个 Sylow $p$-子群 $S,S\'$，结尾 $$'
)
assert.match(proseAfterUnmatchedFence, /<p>\$\$<\/p>/)
assert(!proseAfterUnmatchedFence.includes('display="true"'))
assert.equal((proseAfterUnmatchedFence.match(/<mjx-container/g) ?? []).length, 3)

const code = md.render('`$ x $` 与 $y$')
assert.match(code, /<code>\$ x \$<\/code>/)
assert.equal((code.match(/<mjx-container/g) ?? []).length, 1)

console.log('Math compatibility checks passed: 5 cases')

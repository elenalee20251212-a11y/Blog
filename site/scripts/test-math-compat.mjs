import assert from 'node:assert/strict'
import { createMarkdownRenderer } from 'vitepress'
import { markdownPreviewEnhancedCore } from '../content/.vitepress/markdown-mpe-core.mjs'
import { markdownPreviewEnhancedMath } from '../content/.vitepress/markdown-mpe-math.mjs'

const md = await createMarkdownRenderer(process.cwd(), {
  math: false,
  breaks: true,
  config: markdownPreviewEnhancedMath
})

const trailingSpace = md.render(
  '考虑到 $R\\to \\mathbb{Z}\\times \\mathbb{Z} $ 即 $(m,n)\\mapsto m\\pmod p$。'
)
assert(!trailingSpace.includes('$R\\to'))
assert.match(trailingSpace, /class="katex"/)
assert.match(trailingSpace, /考虑到/)

const permissiveEdges = md.render('空格 $ x $，数字 $5$，转义 \\$x\\$。')
assert.equal((permissiveEdges.match(/class="katex"/g) ?? []).length, 2)
assert.match(permissiveEdges, /\$x\$/)

const ordinaryDisplay = md.render('$$\\begin{aligned}a&=b\\\\c&=d\\end{aligned}$$')
assert.match(ordinaryDisplay, /class="katex-display"/)
assert.doesNotMatch(ordinaryDisplay, /mpe-math-error|ParseError/)
const ordinaryDisplayToken = md.parseInline('$$\\begin{aligned}a&=b\\end{aligned}$$', {})[0].children[0]
assert.equal(ordinaryDisplayToken.type, 'math_inline')
assert.equal(ordinaryDisplayToken.content, '\\begin{aligned}a&=b\\end{aligned}')

const casesDisplay = md.render('$$f(x)=\\begin{cases}x,&x>0\\\\0,&x\\leq0\\end{cases}$$')
assert.doesNotMatch(casesDisplay, /mpe-math-error|ParseError/)

const longAlignedDisplay = md.render(
  '$$\\begin{aligned}B_{\\text{HT}} \\subset \\widehat{B_{\\text{HT}}}= C((t)) = \\left\\{ \\sum_{i=-\\infty}^{+\\infty} c_i t^i, \\ c_i \\in C, \\text{ 且当 } i \\ll 0 \\text{ 时 } c_i = 0 \\right\\}\\end{aligned}$$'
)
assert.doesNotMatch(longAlignedDisplay, /mpe-math-error|ParseError/)

const quotedDisplayMath = md.render(
  '> 注：已知 $V$，$$a=b$$并且它是 Hodge-Tate 表示，$$c=d$$所以结论成立。'
)
assert.match(quotedDisplayMath, /^<blockquote>[\s\S]*所以结论成立。[\s\S]*<\/blockquote>/)
assert.equal((quotedDisplayMath.match(/class="katex-display"/g) ?? []).length, 2)
assert.equal((quotedDisplayMath.match(/<blockquote>/g) ?? []).length, 1)

const code = md.render('`$ x $` 与 $y$')
assert.match(code, /<code>\$ x \$<\/code>/)
assert.equal((code.match(/class="katex"/g) ?? []).length, 1)

const fullMpeChain = await createMarkdownRenderer(process.cwd(), {
  math: false,
  breaks: true,
  config(renderer) {
    markdownPreviewEnhancedCore(renderer)
    markdownPreviewEnhancedMath(renderer)
  }
})
const sourceAlignedDisplay = fullMpeChain.render(
  '$$\\begin{aligned}\\mathrm{gr} \\, B_{\\mathrm{dR}} &= \\bigoplus_{i \\in \\mathbb{Z}} \\mathrm{gr}^i B_{\\mathrm{dR}} = \\bigoplus_{i \\in \\mathbb{Z}} \\mathrm{Fil}^i B_{\\mathrm{dR}} / \\mathrm{Fil}^{i+1} B_{\\mathrm{dR}} \\\\&= \\bigoplus_{i \\in \\mathbb{Z}} B_{\\mathrm{dR}}^+(i) / t B_{\\mathrm{dR}}^+(i) = \\bigoplus_{i \\in \\mathbb{Z}} C(i)\\end{aligned}$$'
)
assert.doesNotMatch(sourceAlignedDisplay, /mpe-math-error|ParseError/)

const sourceQuote = fullMpeChain.render(
  '> 注: 这个逆极限中元素具有$$\\begin{aligned}x^{(1)} &= (\\underline{x^{(1)}_0}) \\\\&\\vdots\\end{aligned}$$三角形形式。\n> 引用继续。'
)
assert.match(sourceQuote, /^<blockquote>[\s\S]*三角形形式。[\s\S]*引用继续。[\s\S]*<\/blockquote>/)
assert.doesNotMatch(sourceQuote, /mpe-math-error|ParseError/)

const vueSafeMath = md.render('$M\\overset{u}{{{\\to}}}N$')
assert.doesNotMatch(vueSafeMath, /<annotation[^>]*>[\s\S]*\{\{/)
assert.match(vueSafeMath, /&#123;&#123;/)

console.log('Math compatibility checks passed: 11 cases')

import assert from 'node:assert/strict'
import { createMarkdownRenderer } from 'vitepress'
import {
  markdownPreviewEnhancedCore,
  markdownPreviewEnhancedHeadingText,
  markdownPreviewEnhancedSlugify
} from '../content/.vitepress/markdown-mpe-core.mjs'
import { markdownPreviewEnhancedMath } from '../content/.vitepress/markdown-mpe-math.mjs'

const md = await createMarkdownRenderer(process.cwd(), {
  math: false,
  breaks: true,
  anchor: {
    slugify: markdownPreviewEnhancedSlugify,
    getTokensText: markdownPreviewEnhancedHeadingText
  },
  config(instance) {
    markdownPreviewEnhancedCore(instance)
    markdownPreviewEnhancedMath(instance)
  }
})

const extensions = md.render(`*[MPE]: Markdown Preview Enhanced

MPE

术语
: 定义

H~2~O X^2^ ==标记== 脚注[^a]

[^a]: 脚注正文`)
assert.match(extensions, /<abbr title="Markdown Preview Enhanced">MPE<\/abbr>/)
assert.match(extensions, /<dl>/)
assert.match(extensions, /H<sub>2<\/sub>O/)
assert.match(extensions, /X<sup>2<\/sup>/)
assert.match(extensions, /<mark>标记<\/mark>/)
assert.match(extensions, /class="footnote-ref"/)
assert.doesNotMatch(extensions, /href="\.\//)

const htmlMath = md.render('<table><tr><td>$a^2$</td><td>$$b=c$$</td></tr></table>')
assert.match(htmlMath, /class="katex(?:-display)?"/i)
assert.doesNotMatch(htmlMath, />\$a\^2\$</)

const list = md.render('1. 第一项\n2. 第二项\n3. 第三项')
assert.match(list, /<ol>/)
assert.match(list, /<li>第一项<\/li>/)

const heading = md.render('## 标题。包含 `$x$` 与标点！')
assert.match(heading, /id="标题包含-x-与标点"/)

console.log('MPE core compatibility checks passed: 4 groups')

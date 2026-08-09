import assert from 'node:assert/strict'
import path from 'node:path'
import { createMarkdownRenderer } from 'vitepress'
import {
  extractMpeBlockIds,
  findInternalReferences,
  findMpeFragmentTargetLine,
  formatMpeWikilinkDisplay,
  internalReferencesToText,
  processMpeWikilink,
  replaceReferencesToMovedFile,
  resolveMpeWikilink,
  resolvedReference
} from './internal-references.mjs'
import { markdownPreviewEnhancedSlugify } from '../content/.vitepress/markdown-mpe-core.mjs'
import { internalReferences } from '../content/.vitepress/markdown-internal-references.mjs'
import { readAllArticles } from './site-lib.mjs'

const root = path.resolve('C:/notebook')
const current = path.join(root, 'content/articles/source/source.md')

assert.deepEqual(processMpeWikilink('target|显示文字'), {
  link: `target.md`, text: '显示文字', hash: '', blockRef: ''
})
assert.deepEqual(processMpeWikilink('../target/target#第二节^proof|证明'), {
  link: path.join('../target', 'target.md') + '#第二节^proof',
  text: '证明', hash: '#第二节', blockRef: '^proof'
})
assert.equal(processMpeWikilink('version-0.7.4').link, 'version-0.7.4.md')
assert.equal(formatMpeWikilinkDisplay('Note#Heading^block'), 'Note > Heading > ^block')

assert.equal(
  resolveMpeWikilink('../target/target.md', path.relative(root, current), root),
  path.join('content/articles/target/target.md')
)
assert.equal(
  resolveMpeWikilink('/content/articles/target/target.md', path.relative(root, current), root),
  path.join('content/articles/target/target.md')
)
assert.equal(
  resolveMpeWikilink('../../../README.md', path.relative(root, current), root),
  'README.md'
)

const markdown = [
  '[[../target/target#章节|正文引用]]',
  '![[diagram.png|交换图]]',
  '$k[[x]]$ and `[[inline-code]]`',
  '```md',
  '[[fenced-code]]',
  '```',
  '\\[[escaped-reference]]'
].join('\n')
const references = findInternalReferences(markdown)
assert.equal(references.length, 2)
assert.equal(references[0].embedded, false)
assert.equal(references[1].embedded, true)
assert.equal(resolvedReference(references[0], current, root).targetFile, path.join(root, 'content/articles/target/target.md'))
assert.equal(internalReferencesToText('参见 [[../target/target|这篇文章]]。'), '参见 这篇文章。')

const renamed = replaceReferencesToMovedFile(
  '[[../target/target#章节|正文引用]]',
  current,
  path.join(root, 'content/articles/target/target.md'),
  path.join(root, 'content/articles/renamed/renamed.md'),
  root
)
assert.equal(renamed, '[[../renamed/renamed#章节|正文引用]]')

const fragmentSource = ['## 第一节', '', '正文 ^proof', '', '## 自定义 {#custom}', '内容'].join('\n')
assert.deepEqual(extractMpeBlockIds(fragmentSource), [{ id: 'proof', body: '正文' }])
assert.equal(findMpeFragmentTargetLine(fragmentSource, '^proof', markdownPreviewEnhancedSlugify), 2)
assert.equal(findMpeFragmentTargetLine(fragmentSource, '第一节', markdownPreviewEnhancedSlugify), 0)
assert.equal(findMpeFragmentTargetLine(fragmentSource, markdownPreviewEnhancedSlugify('第一节'), markdownPreviewEnhancedSlugify), 0)
assert.equal(findMpeFragmentTargetLine(fragmentSource, 'custom', markdownPreviewEnhancedSlugify), 4)

const renderer = await createMarkdownRenderer(process.cwd(), {
  config(instance) { internalReferences(instance) }
})
assert.equal(renderer.parse('[[toc]]', {}).some((token) => token.type === 'mpe_wikilink_block'), true)
const articles = readAllArticles()
const sourceArticle = articles[0]
const targetArticle = articles[1]
const targetFromSource = path.relative(path.dirname(sourceArticle.file), targetArticle.file)
  .replace(/\\/g, '/')
  .replace(/\.md$/, '')
const renderedLink = renderer.render(`[[${targetFromSource}|target-link]]`, { frontmatter: sourceArticle.frontmatter })
assert.match(renderedLink, new RegExp(`href="\.\./${targetArticle.id}/"`))
assert.match(renderedLink, />target-link<\/a>/)
const renderedMissingLink = renderer.render('[[../never-created/never-created|future-note]]', { frontmatter: sourceArticle.frontmatter })
assert.match(renderedMissingLink, /class="internal-reference is-missing"/)
assert.match(renderedMissingLink, /href="\.\.\/never-created\/"/)
assert.match(renderer.render('paragraph ^block-id', { frontmatter: sourceArticle.frontmatter }), /id="block-id" class="block-id"/)
const renderedEmbed = renderer.render(`![[${targetFromSource}]]`, { frontmatter: sourceArticle.frontmatter })
assert.match(renderedEmbed, /class="wikilink-embed-content"/)

console.log('MPE wikilink compatibility checks passed: parser, resolver, fragments, renderer, embeds, rename')

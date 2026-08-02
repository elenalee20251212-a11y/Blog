import assert from 'node:assert/strict'
import { findInternalReferences, internalReferencesToText, parseInternalReference, replaceInternalReferenceTarget } from './internal-references.mjs'

assert.deepEqual(parseInternalReference('article-name|显示文字'), { id: 'article-name', fragment: '', label: '显示文字' })
assert.deepEqual(parseInternalReference('article-name#章节|上一节'), { id: 'article-name', fragment: '章节', label: '上一节' })
assert.equal(parseInternalReference('not a valid id'), null)

const markdown = [
  '[[article-name|正文引用]]',
  '',
  '$k[[x]]$ and `[[inline-code]]`',
  '',
  '```text',
  '[[fenced-code]]',
  '```',
  '',
  '![[embedded-image]] and \\[[escaped-reference]]'
].join('\n')
assert.deepEqual(findInternalReferences(markdown).map((item) => item.id), ['article-name'])
assert.equal(replaceInternalReferenceTarget(markdown, 'article-name', 'renamed-article').startsWith('[[renamed-article|正文引用]]'), true)
assert.equal(internalReferencesToText('参见 [[article-name|这篇文章]]。'), '参见 这篇文章。')

console.log('Internal reference compatibility tests passed.')

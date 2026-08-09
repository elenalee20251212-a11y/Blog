import { createMarkdownRenderer } from 'vitepress'
import { markdownPreviewEnhancedCore } from '../content/.vitepress/markdown-mpe-core.mjs'
import { markdownPreviewEnhancedMath } from '../content/.vitepress/markdown-mpe-math.mjs'
import { readAllArticles } from './site-lib.mjs'

const renderer = await createMarkdownRenderer(process.cwd(), {
  math: false,
  breaks: true,
  typographer: false,
  linkify: false,
  config(md) {
    markdownPreviewEnhancedCore(md)
    markdownPreviewEnhancedMath(md)
  }
})

const failures = []
const articles = readAllArticles()
for (const article of articles) {
  const html = renderer.render(article.content, { path: article.file })
  const messages = [...html.matchAll(/<span class="mpe-math-error"[^>]*>([\s\S]*?)<\/span>/g)]
    .map((match) => match[1].replace(/<[^>]+>/g, '').trim())
  for (const message of messages) failures.push(`${article.id}: ${message}`)
}

if (failures.length) {
  for (const failure of failures) console.error(`ERROR: ${failure}`)
  console.error(`\nMath rendering check failed: ${failures.length} formula(s).`)
  process.exit(1)
}

console.log(`Math rendering check passed: ${articles.length} article(s).`)

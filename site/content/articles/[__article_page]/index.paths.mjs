import fs from 'node:fs'
import { readAllArticles, rebaseMarkdownResources } from '../../../scripts/site-lib.mjs'
import './version.mjs'

export default {
  paths() {
    return readAllArticles().map((article) => ({
      params: { __article_page: article.id },
      content: rebaseMarkdownResources(
        fs.readFileSync(article.file, 'utf8'),
        `articles/${article.id}/index.md`,
        article.file
      )
    }))
  }
}

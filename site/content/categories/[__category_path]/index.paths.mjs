import fs from 'node:fs'
import { readCategoryDefinitions, rebaseMarkdownResources } from '../../../scripts/site-lib.mjs'
import './version.mjs'

export default {
  paths() {
    return readCategoryDefinitions().definitions.map((category) => ({
      params: { __category_path: category.path },
      content: rebaseMarkdownResources(
        fs.readFileSync(category.file, 'utf8'),
        `categories/${category.path}/index.md`,
        category.file
      )
    }))
  }
}

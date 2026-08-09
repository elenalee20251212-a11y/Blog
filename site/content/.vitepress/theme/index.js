import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import HomeCategories from './components/HomeCategories.vue'
import TagIndex from './components/TagIndex.vue'
import 'katex/dist/katex.min.css'
import './tikz-fonts.generated.css'
import './site-settings.generated.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('HomeCategories', HomeCategories)
    app.component('TagIndex', TagIndex)
  }
}

<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { catalog, categoryByPath } from './catalog.js'

const { page } = useData()
const category = computed(() => categoryByPath(page.value.relativePath))
const depth = computed(() => category.value?.lineage.length ?? 0)
const children = computed(() => {
  if (!category.value) return []
  return category.value.childRoutes
    .map((route) => catalog.categories.find((item) => item.route === route))
    .filter(Boolean)
})
const articles = computed(() => {
  if (!category.value) return []
  return category.value.articleIds
    .map((id) => catalog.articles.find((article) => article.id === id))
    .filter(Boolean)
})
const sectionLabel = computed(() => depth.value === 1 ? '二级主题' : depth.value === 2 ? '三级系列' : '系列文章')
const sectionMeta = computed(() => children.value.length
  ? `${children.value.length} 个${depth.value === 1 ? '主题' : '系列'}`
  : `${articles.value.length} 篇文章`
)

function countArticles(item) {
  return catalog.articles.filter((article) => article.categoryRoute.startsWith(item.route)).length
}
</script>

<template>
  <section v-if="category" class="category-index" :data-depth="depth" aria-labelledby="category-contents-title">
    <header class="category-index-heading">
      <h2 id="category-contents-title">{{ sectionLabel }}</h2>
      <span>{{ sectionMeta }}</span>
    </header>

    <div v-if="children.length" class="category-chapters">
      <a v-for="child in children" :key="child.route" :href="withBase(child.route)" class="category-chapter">
        <span class="category-chapter-copy">
          <strong>{{ child.title }}</strong>
          <small v-if="child.note">{{ child.note }}</small>
        </span>
        <span class="category-chapter-count">
          <template v-if="child.childRoutes.length">{{ child.childRoutes.length }}<small>系列</small> · </template>
          {{ countArticles(child) }}<small>篇</small>
        </span>
        <span class="category-chapter-arrow" aria-hidden="true">→</span>
      </a>
    </div>

    <ol v-if="articles.length" class="category-article-list">
      <li v-for="article in articles" :key="article.id">
        <div class="category-article-copy">
          <a :href="withBase(article.route)">{{ article.title }}</a>
          <span v-if="category.articleNotes[article.id]" class="article-note">{{ category.articleNotes[article.id] }}</span>
        </div>
        <time v-if="article.date" :datetime="article.date">{{ article.date }}</time>
      </li>
    </ol>
  </section>
</template>

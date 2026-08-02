<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { articleByPath, categoryByPath } from './catalog.js'

const { page } = useData()
const crumbs = computed(() => {
  const article = articleByPath(page.value.relativePath)
  const category = categoryByPath(page.value.relativePath)
  const lineage = article?.lineage ?? category?.lineage ?? []
  const result = [{ title: '首页', route: '/' }]
  const parts = []
  for (const item of lineage) {
    parts.push(item.id)
    result.push({ title: item.title, route: `/categories/${parts.join('/')}/` })
  }
  if (article) result.push({ title: article.title, route: article.route })
  return result
})
</script>

<template>
  <nav v-if="crumbs.length > 1" class="blog-breadcrumbs" aria-label="当前位置">
    <template v-for="(crumb, index) in crumbs" :key="crumb.route">
      <span v-if="index" class="breadcrumb-separator" aria-hidden="true">/</span>
      <a v-if="index < crumbs.length - 1" :href="withBase(crumb.route)">{{ crumb.title }}</a>
      <span v-else aria-current="page">{{ crumb.title }}</span>
    </template>
  </nav>
</template>

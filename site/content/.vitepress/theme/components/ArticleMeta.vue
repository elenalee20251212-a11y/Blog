<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { articleByPath } from './catalog.js'

const { page } = useData()
const article = computed(() => articleByPath(page.value.relativePath))
</script>

<template>
  <template v-if="article">
    <h1 class="article-title">{{ article.title }}</h1>
    <div class="article-meta">
      <time v-if="article.date" :datetime="article.date">{{ article.date }}</time>
      <span v-if="article.date && article.tags.length" aria-hidden="true">·</span>
      <span v-if="article.tags.length" class="article-tags">
        <a v-for="tag in article.tags" :key="tag" :href="withBase(`/tags/?tag=${encodeURIComponent(tag)}`)">#{{ tag }}</a>
      </span>
    </div>
  </template>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { catalog } from './catalog.js'

const selected = ref('')
onMounted(() => {
  selected.value = new URLSearchParams(location.search).get('tag') ?? ''
})
const tags = computed(() => {
  const counts = new Map()
  for (const article of catalog.articles) {
    for (const tag of article.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1)
  }
  return [...counts].sort((a, b) => a[0].localeCompare(b[0], 'zh-CN'))
})
const articles = computed(() => selected.value
  ? catalog.articles.filter((article) => article.tags.includes(selected.value))
  : catalog.articles
)
function choose(tag) {
  selected.value = tag
  const url = new URL(location.href)
  if (tag) url.searchParams.set('tag', tag)
  else url.searchParams.delete('tag')
  history.replaceState({}, '', url)
}
</script>

<template>
  <div class="tag-cloud" aria-label="标签筛选">
    <button :class="{ active: !selected }" type="button" @click="choose('')">全部 <span>{{ catalog.articles.length }}</span></button>
    <button v-for="([tag, count]) in tags" :key="tag" :class="{ active: selected === tag }" type="button" @click="choose(tag)">
      {{ tag }} <span>{{ count }}</span>
    </button>
  </div>
  <p class="tag-result-summary">{{ selected ? `标签「${selected}」` : '全部文章' }}：{{ articles.length }} 篇</p>
  <ol class="article-list tag-results">
    <li v-for="article in articles" :key="article.id">
      <a :href="withBase(article.route)">{{ article.title }}</a>
      <time v-if="article.date" :datetime="article.date">{{ article.date }}</time>
    </li>
  </ol>
</template>

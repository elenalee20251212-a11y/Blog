<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { catalog } from './catalog.js'

const roots = computed(() => catalog.categories.filter((item) => item.lineage.length === 1))
const site = computed(() => catalog.site ?? {})
const brand = computed(() => site.value.brand ?? {})
const brandImage = computed(() => brand.value.image?.trim() ?? '')
const latest = computed(() => [...catalog.articles]
  .filter((article) => article.date)
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 8)
)

function childrenOf(category) {
  return category.childRoutes
    .map((route) => catalog.categories.find((item) => item.route === route))
    .filter(Boolean)
}

function countArticles(category) {
  return catalog.articles.filter((article) => article.categoryRoute.startsWith(category.route)).length
}

function leafTitle(article) {
  return article.lineage.at(-1)?.title ?? ''
}
</script>

<template>
  <div class="home-shell">
    <section class="home-hero" aria-labelledby="home-title">
      <img
        v-if="brandImage"
        class="home-emblem home-emblem-image"
        :src="withBase(brandImage)"
        :alt="brand.imageAlt"
        :style="{ objectFit: brand.imageFit || 'contain' }"
      >
      <div v-else-if="brand.mark" class="home-emblem" aria-hidden="true">{{ brand.mark }}</div>
      <h1 id="home-title">{{ site.title || "Elena's Blog" }}</h1>
      <span class="home-hero-rule" aria-hidden="true"></span>
      <p>{{ site.description || '数学笔记、编程记录与随笔' }}</p>
      <a class="home-down" href="#structure" aria-label="查看分类结构">↓</a>
    </section>

    <section id="structure" class="home-structure" aria-labelledby="structure-title">
      <header class="home-section-heading">
        <h2 id="structure-title">Structure</h2>
        <p>领域 / 主题 / 系列</p>
      </header>

      <section v-for="root in roots" :key="root.route" class="structure-part">
        <header class="structure-part-heading">
          <div>
            <a :href="withBase(root.route)">{{ root.title }}</a>
            <p>{{ root.note }}</p>
          </div>
          <small>{{ countArticles(root) }} 篇</small>
        </header>

        <div class="structure-subjects">
          <section v-for="subject in childrenOf(root)" :key="subject.route" class="structure-subject">
            <header>
              <a :href="withBase(subject.route)">{{ subject.title }}</a>
              <small>{{ countArticles(subject) }}</small>
            </header>
            <nav :aria-label="`${subject.title}的系列`">
              <a v-for="series in childrenOf(subject)" :key="series.route" :href="withBase(series.route)">
                <span>{{ series.title }}</span>
                <small>{{ series.articleIds.length }}</small>
              </a>
            </nav>
          </section>
        </div>
      </section>
    </section>

    <section class="home-recent" aria-labelledby="recent-title">
      <header class="home-section-heading">
        <h2 id="recent-title">Recent changes</h2>
        <p>最近更新</p>
      </header>
      <ol>
        <li v-for="article in latest" :key="article.id">
          <time :datetime="article.date">{{ article.date }}</time>
          <a :href="withBase(article.route)">{{ article.title }}</a>
          <span>{{ leafTitle(article) }}</span>
        </li>
      </ol>
    </section>
  </div>
</template>

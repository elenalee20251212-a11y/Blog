<script setup>
import { nextTick, onBeforeUnmount, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Breadcrumbs from './components/Breadcrumbs.vue'
import ArticleMeta from './components/ArticleMeta.vue'
import CategoryIndex from './components/CategoryIndex.vue'

const { Layout } = DefaultTheme
const route = useRoute()

let resizeObserver
let mutationObserver
let scheduled = false

function syncOutlineMath() {
  const links = document.querySelectorAll('.VPDocOutlineItem .outline-link:not([data-rich-outline])')
  for (const link of links) {
    const href = link.getAttribute('href')
    if (!href?.startsWith('#')) continue
    let heading
    try {
      heading = document.getElementById(decodeURIComponent(href.slice(1)))
    } catch {
      continue
    }
    if (!heading?.querySelector('mjx-container, .katex')) continue

    const copy = heading.cloneNode(true)
    copy.querySelectorAll('.header-anchor').forEach((anchor) => anchor.remove())
    link.replaceChildren(...copy.childNodes)
    link.dataset.richOutline = 'true'
  }
}

function refreshRenderedContent() {
  scheduled = false
  const formulas = [...document.querySelectorAll('.vp-doc .katex')]
    .filter((formula) => !formula.closest('.katex-display'))
  for (const formula of formulas) {
    formula.classList.remove('math-overflow')
    const available = formula.parentElement?.clientWidth ?? 0
    if (available && formula.scrollWidth > available + 1) formula.classList.add('math-overflow')
  }
  syncOutlineMath()
}

function scheduleRenderedContentRefresh() {
  if (scheduled) return
  scheduled = true
  requestAnimationFrame(refreshRenderedContent)
}

onMounted(() => {
  scheduleRenderedContentRefresh()
  const content = document.querySelector('.VPContent')
  if (!content) return
  resizeObserver = new ResizeObserver(scheduleRenderedContentRefresh)
  resizeObserver.observe(content)
  mutationObserver = new MutationObserver(scheduleRenderedContentRefresh)
  mutationObserver.observe(content, { childList: true, subtree: true })
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  mutationObserver?.disconnect()
})

watch(() => route.path, () => nextTick(scheduleRenderedContentRefresh))
</script>

<template>
  <Layout>
    <template #doc-before>
      <Breadcrumbs />
      <ArticleMeta />
    </template>
    <template #doc-footer-before>
      <CategoryIndex />
    </template>
  </Layout>
</template>

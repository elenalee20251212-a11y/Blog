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

function markOverflowingMath() {
  scheduled = false
  const formulas = document.querySelectorAll('.vp-doc mjx-container:not([display="true"])')
  for (const formula of formulas) {
    formula.classList.remove('math-overflow')
    const available = formula.parentElement?.clientWidth ?? 0
    if (available && formula.scrollWidth > available + 1) formula.classList.add('math-overflow')
  }
}

function scheduleMathCheck() {
  if (scheduled) return
  scheduled = true
  requestAnimationFrame(markOverflowingMath)
}

onMounted(() => {
  scheduleMathCheck()
  const content = document.querySelector('.VPContent')
  if (!content) return
  resizeObserver = new ResizeObserver(scheduleMathCheck)
  resizeObserver.observe(content)
  mutationObserver = new MutationObserver(scheduleMathCheck)
  mutationObserver.observe(content, { childList: true, subtree: true })
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  mutationObserver?.disconnect()
})

watch(() => route.path, () => nextTick(scheduleMathCheck))
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

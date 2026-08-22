<template>
  <button
    v-show="visible"
    class="back-to-top"
    type="button"
    aria-label="返回顶部"
    @click="scrollToTop"
  >
    ↑
  </button>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const visible = ref(false)

function updateVisibility() {
  visible.value = window.scrollY > 520
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', updateVisibility, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateVisibility)
})
</script>

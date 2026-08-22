<template>
  <button class="image-lightbox-trigger" type="button" :aria-label="`放大查看：${alt}`" @click="openLightbox">
    <img :src="src" :alt="alt" loading="lazy" />
    <span aria-hidden="true">点击放大</span>
  </button>

  <Teleport to="body">
    <div v-if="isOpen" class="image-lightbox" role="dialog" aria-modal="true" :aria-label="alt" @click.self="closeLightbox">
      <button class="image-lightbox-close" type="button" aria-label="关闭大图" @click="closeLightbox">×</button>
      <img :src="src" :alt="alt" />
    </div>
  </Teleport>
</template>

<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'

defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true }
})

const isOpen = ref(false)

function openLightbox() {
  isOpen.value = true
}

function closeLightbox() {
  isOpen.value = false
}

function handleKeydown(event) {
  if (event.key === 'Escape') closeLightbox()
}

watch(isOpen, (open) => {
  if (open) {
    document.addEventListener('keydown', handleKeydown)
    document.body.classList.add('lightbox-open')
  } else {
    document.removeEventListener('keydown', handleKeydown)
    document.body.classList.remove('lightbox-open')
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.classList.remove('lightbox-open')
})
</script>

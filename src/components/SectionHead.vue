<template>
  <div class="section-head">
    <h2 class="section-title">{{ title }}</h2>
    <p class="section-subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true }
})
</script>

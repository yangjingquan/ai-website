<template>
  <footer class="footer">
    <div class="wrap">{{ text }}</div>
  </footer>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

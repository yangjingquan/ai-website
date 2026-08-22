<template>
  <footer class="footer">
    <div class="wrap">
      <span>{{ text }}</span>
      <a class="filing-link" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">辽ICP备2026015396号</a>
      <RouterLink class="footer-link" to="/privacy">隐私与服务说明</RouterLink>
    </div>
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

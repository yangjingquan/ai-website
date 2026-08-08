<template>
  <nav class="nav">
    <RouterLink class="brand" to="/" aria-label="返回首页">
      <span class="mark">羊</span>
      <span>小肥羊开发工作室</span>
    </RouterLink>
    <div class="navlinks">
      <RouterLink to="/product-solution" active-class="active">产品方案</RouterLink>
      <RouterLink to="/system-capability" active-class="active">系统能力</RouterLink>
      <RouterLink to="/development-capability" active-class="active">开发能力</RouterLink>
      <RouterLink to="/delivery-process" active-class="active">交付流程</RouterLink>
      <button class="btn primary" type="button" @click="goContact">免费需求评估</button>
    </div>
  </nav>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function goContact() {
  router.push({ path: route.path, hash: '#contact' })
}
</script>

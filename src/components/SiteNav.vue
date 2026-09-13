<template>
  <nav class="nav" aria-label="主导航">
    <RouterLink class="brand" to="/" aria-label="返回首页">
      <span class="mark">Nex</span>
      <span>纳启字节信息技术工作室</span>
    </RouterLink>
    <div class="navlinks" aria-label="页面导航">
      <RouterLink to="/services" active-class="active">服务方案</RouterLink>
      <div class="case-nav-dropdown" :class="{ open: caseMenuOpen }" @click.stop>
        <button
          class="case-nav-trigger"
          type="button"
          :class="{ active: isCaseRoute }"
          :aria-expanded="caseMenuOpen"
          aria-haspopup="true"
          @click="toggleCaseMenu"
        >
          项目案例
          <span class="case-nav-chevron" aria-hidden="true">⌄</span>
        </button>
        <div v-if="caseMenuOpen" class="case-nav-menu" role="menu">
          <RouterLink class="case-nav-all" to="/cases" role="menuitem" @click="closeCaseMenu">全部案例</RouterLink>
          <RouterLink
            v-for="item in caseCatalog"
            :key="item.slug"
            :to="`/cases/${item.slug}`"
            role="menuitem"
            @click="closeCaseMenu"
          >
            <span>{{ item.name }}</span>
            <small>{{ item.category }}</small>
          </RouterLink>
        </div>
      </div>
      <RouterLink to="/pricing" active-class="active">报价说明</RouterLink>
      <RouterLink to="/process" active-class="active">合作流程</RouterLink>
      <RouterLink to="/about" active-class="active">关于我们</RouterLink>
      <button class="btn primary" type="button" @click="goContact">发起需求评估</button>
    </div>
  </nav>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { caseCatalog } from '../data/cases'

const router = useRouter()
const route = useRoute()
const caseMenuOpen = ref(false)
const isCaseRoute = computed(() => route.path === '/cases' || route.path.startsWith('/cases/'))

function toggleCaseMenu() {
  caseMenuOpen.value = !caseMenuOpen.value
}

function closeCaseMenu() {
  caseMenuOpen.value = false
}

function handleDocumentClick() {
  closeCaseMenu()
}

function handleKeydown(event) {
  if (event.key === 'Escape') closeCaseMenu()
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
  document.removeEventListener('keydown', handleKeydown)
})

watch(() => route.path, closeCaseMenu)

function goContact() {
  router.push({ path: '/contact' })
}
</script>

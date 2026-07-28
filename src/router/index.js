import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductSolutionView from '../views/ProductSolutionView.vue'
import SystemCapabilityView from '../views/SystemCapabilityView.vue'
import DevelopmentCapabilityView from '../views/DevelopmentCapabilityView.vue'
import DeliveryProcessView from '../views/DeliveryProcessView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: '小肥羊开发工作室 - 商业系统定制开发' } },
  { path: '/product-solution', name: 'product-solution', component: ProductSolutionView, meta: { title: '产品方案 - 小肥羊开发工作室' } },
  { path: '/system-capability', name: 'system-capability', component: SystemCapabilityView, meta: { title: '系统能力 - 小肥羊开发工作室' } },
  { path: '/development-capability', name: 'development-capability', component: DevelopmentCapabilityView, meta: { title: '开发能力 - 小肥羊开发工作室' } },
  { path: '/delivery-process', name: 'delivery-process', component: DeliveryProcessView, meta: { title: '交付流程 - 小肥羊开发工作室' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 16 }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || '小肥羊开发工作室 - 商业系统定制开发'
})

export default router

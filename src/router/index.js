import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductSolutionView from '../views/ProductSolutionView.vue'
import SystemCapabilityView from '../views/SystemCapabilityView.vue'
import DevelopmentCapabilityView from '../views/DevelopmentCapabilityView.vue'
import DeliveryProcessView from '../views/DeliveryProcessView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import CasesView from '../views/CasesView.vue'
import ProcessView from '../views/ProcessView.vue'
import PricingView from '../views/PricingView.vue'
import ContactView from '../views/ContactView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import CaseDetailView from '../views/CaseDetailView.vue'
import { getCaseBySlug } from '../data/cases'

export const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: '纳启字节信息技术工作室 - 商业系统定制开发', description: '从多商户商城小程序到制造业 ERP，纳启字节为中小企业梳理、开发并交付交易与内部管理系统，也提供存量系统升级维护。' } },
  { path: '/about', name: 'about', component: AboutView, meta: { title: '关于我 - 纳启字节信息技术工作室', description: '了解纳启字节信息技术工作室的个人背景、擅长方向、合作方式和能力边界。' } },
  { path: '/services', name: 'services', component: ServicesView, meta: { title: '服务方案 - 纳启字节信息技术工作室', description: '产品方案、业务系统、多端开发和分阶段交付服务说明。' } },
  { path: '/cases', name: 'cases', component: CasesView, meta: { title: '项目案例 - 纳启字节信息技术工作室', description: '查看项目背景、解决方案、交付范围和结果说明。' } },
  { path: '/cases/:slug', name: 'case-detail', component: CaseDetailView, beforeEnter: (to) => getCaseBySlug(to.params.slug) ? true : { name: 'not-found' }, meta: { title: '案例详情 - 纳启字节信息技术工作室', description: '查看项目背景、解决方案、技术栈、交付周期和项目结果。' } },
  { path: '/process', name: 'process', component: ProcessView, meta: { title: '合作流程 - 纳启字节信息技术工作室', description: '从需求评估、原型设计到开发、验收、上线和维护的合作流程。' } },
  { path: '/pricing', name: 'pricing', component: PricingView, meta: { title: '报价说明 - 纳启字节信息技术工作室', description: '查看服务范围、报价方式、付款节点、验收和维护说明。' } },
  { path: '/contact', name: 'contact', component: ContactView, meta: { title: '联系我 - 纳启字节信息技术工作室', description: '通过微信、邮箱或电话提交业务目标和需求信息。' } },
  { path: '/privacy', name: 'privacy', component: PrivacyView, meta: { title: '隐私与服务说明 - 纳启字节信息技术工作室', description: '网站隐私、版权、案例授权和服务条款说明。' } },
  { path: '/404', name: 'not-found', component: NotFoundView, meta: { title: '页面不存在 - 纳启字节信息技术工作室', description: '你访问的页面不存在，请返回首页或查看服务方案。' } },
  { path: '/product-solution', name: 'product-solution', component: ProductSolutionView, meta: { title: '产品方案 - 纳启字节信息技术工作室', description: '商城、团购、点餐、预约、APP、CRM、ERP 产品方案与定制模块。' } },
  { path: '/system-capability', name: 'system-capability', component: SystemCapabilityView, meta: { title: '系统能力 - 纳启字节信息技术工作室', description: '围绕订单、客户、库存、权限、数据和接口的商业系统能力。' } },
  { path: '/development-capability', name: 'development-capability', component: DevelopmentCapabilityView, meta: { title: '开发能力 - 纳启字节信息技术工作室', description: '小程序、APP、管理后台、接口、数据库和部署能力。' } },
  { path: '/delivery-process', name: 'delivery-process', component: DeliveryProcessView, meta: { title: '交付流程 - 纳启字节信息技术工作室', description: '从需求评估、原型设计到开发、验收、上线和维护的交付流程。' } },
  { path: '/:pathMatch(.*)*', name: 'not-found-catchall', component: NotFoundView, meta: { title: '页面不存在 - 纳启字节信息技术工作室', description: '你访问的页面不存在，请返回首页或查看服务方案。' } }
]

export function createSiteRouter(ssr = false) {
  const router = createRouter({
    history: ssr ? createMemoryHistory() : createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition
      if (to.hash) return { el: to.hash, behavior: 'smooth', top: 16 }
      return { top: 0 }
    }
  })

  if (!ssr) {
    router.afterEach((to) => {
      const { title, description, canonical, image, imageAlt } = getPageMetadata(to)
      document.title = title
      document.querySelector('meta[name="description"]')?.setAttribute('content', description)
      document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical)
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonical)
      document.querySelector('meta[property="og:image"]')?.setAttribute('content', image)
      document.querySelector('meta[property="og:image:alt"]')?.setAttribute('content', imageAlt)
      document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title)
      document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
      document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', image)
      document.querySelector('meta[name="twitter:image:alt"]')?.setAttribute('content', imageAlt)
    })
  }

  return router
}

export function getPageMetadata(to) {
  const project = to.name === 'case-detail' ? getCaseBySlug(to.params.slug) : null
  const title = project ? `${project.name} - 纳启字节信息技术工作室` : to.meta.title || '纳启字节信息技术工作室'
  const description = project ? project.summary : to.meta.description || ''
  const canonicalPath = to.name === 'not-found' || to.name === 'not-found-catchall' ? '/404' : to.path
  const canonical = `https://www.nexbyte.top${canonicalPath}`
  const image = `https://www.nexbyte.top${project?.shareImage || '/og/home.png'}`
  const imageAlt = project?.shareImageAlt || '纳启字节信息技术工作室：多商户商城小程序与制造业 ERP 项目'
  return { title, description, canonical, image, imageAlt }
}

import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'
import { createSiteRouter, getPageMetadata, routes } from './router'
import { caseCatalog } from './data/cases'

export const prerenderPaths = [
  ...routes.filter(({ path }) => !path.includes(':')).map(({ path }) => path),
  ...caseCatalog.map(({ slug }) => `/cases/${slug}`)
]

export async function render(path) {
  const router = createSiteRouter(true)
  await router.push(path)
  await router.isReady()
  const app = createSSRApp(App).use(router)
  const html = await renderToString(app)
  return { html, metadata: getPageMetadata(router.currentRoute.value) }
}

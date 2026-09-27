import { createApp } from 'vue'
import App from './App.vue'
import { createSiteRouter } from './router'
import './styles/site.css'

const router = createSiteRouter()
const app = createApp(App).use(router)
router.isReady().then(() => app.mount('#app'))

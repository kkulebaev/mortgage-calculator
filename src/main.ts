import './plugins/color-scheme'
import './plugins/fontawesome'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createRouter } from 'vue-router'

import { i18n } from '@/plugins/i18n'

import App from './app.vue'
import routerConfig from './router/router.config'

const pinia = createPinia()
const app = createApp(App)
const router = createRouter(routerConfig)

app.use(pinia)
app.use(router)
app.use(i18n)
app.mount('#app')

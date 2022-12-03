import './plugins/color-scheme'
import './plugins/fontawesome'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createRouter } from 'vue-router'

import App from './app.vue'
import routerConfig from './router/router.config'

const pinia = createPinia()
const app = createApp(App)
const router = createRouter(routerConfig)

app.use(pinia)
app.use(router)
app.mount('#app')

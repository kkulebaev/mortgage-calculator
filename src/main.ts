import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import { createPinia } from 'pinia'

// Element Plus
import 'element-plus/dist/index.css'

// Animate.css: library for animation (https://animate.style/)
import 'animate.css/source/animate.css'

import App from './app.vue'

import './plugins/fontawesome'

import routerConfig from './router/router.config'

const pinia = createPinia()
const app = createApp(App)
const router = createRouter(routerConfig)

app.use(pinia)
app.use(router)
app.mount('#app')

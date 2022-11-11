import { createApp } from 'vue'
import { createRouter } from 'vue-router'

// Element Plus
import 'element-plus/dist/index.css'

// Animate.css: library for animation (https://animate.style/)
import 'animate.css/source/animate.css'

import App from './app.vue'

import routerConfig from './router/router.config'

const app = createApp(App)

const router = createRouter(routerConfig)

app.use(router)

app.mount('#app')

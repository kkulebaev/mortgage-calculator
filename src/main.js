import { createApp } from 'vue'
import { createRouter } from 'vue-router'

// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

import routerConfig from './router/router.config.js'

const app = createApp(App)

const router = createRouter(routerConfig)

app.use(router)
app.use(ElementPlus)

app.mount('#app')

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { i18n } from '@/plugins/i18n'
import { router } from '@/router/router.config'

import App from './app.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')

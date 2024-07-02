import './plugins/fontawesome'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { tolgee, VueTolgee } from '@/plugins/tolgee'
import { router } from '@/router/router.config'

import App from './app.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueTolgee, { tolgee })

app.mount('#app')

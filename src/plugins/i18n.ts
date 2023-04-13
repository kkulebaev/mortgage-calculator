import { createI18n } from 'vue-i18n'

import { locales } from '@/locales'

export const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: locales, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

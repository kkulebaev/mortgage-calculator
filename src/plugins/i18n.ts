import { createI18n } from 'vue-i18n'

import { LOCALES } from '@/locales'
import { en } from '@/locales/en'

type MessageSchema = typeof en
export const i18n = createI18n<[MessageSchema], 'en' | 'ru'>({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: LOCALES, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

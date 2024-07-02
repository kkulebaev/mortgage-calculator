import { createI18n } from 'vue-i18n'

import EN from '@/locales/en.json'
import RU from '@/locales/ru.json'

type MessageSchema = typeof EN

export const enum LANG {
  en = 'en',
  ru = 'ru',
}

export const i18n = createI18n<[MessageSchema], LANG, false>({
  legacy: false,
  locale: getUserLocale(),
  fallbackLocale: LANG.en,
  messages: {
    [LANG.en]: EN,
    [LANG.ru]: RU,
  },
})

function getUserLocale() {
  return localStorage.getItem('locale') ?? LANG.en
}

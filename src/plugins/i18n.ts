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
  pluralRules: {
    [LANG.ru]: slavicLangPluralRule,
  },
})

function getUserLocale() {
  return localStorage.getItem('locale') ?? LANG.en
}

/* https://vue-i18n.intlify.dev/guide/essentials/pluralization.html#custom-pluralization */
function slavicLangPluralRule(choice: number, choicesLength: number): 0 | 1 | 2 | 3 {
  if (choice === 0) {
    return 0
  }

  const teen = choice > 10 && choice < 20
  const endsWithOne = choice % 10 === 1
  if (!teen && endsWithOne) {
    return 1
  }
  if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
    return 2
  }

  return choicesLength < 4 ? 2 : 3
}

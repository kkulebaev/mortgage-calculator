import {
  BackendFetch,
  DevTools,
  FormatSimple,
  LanguageStorage,
  Tolgee,
  VueTolgee,
} from '@tolgee/vue'

export const enum Language {
  EN = 'en',
  RU = 'ru',
}

const availableLocales = [Language.EN, Language.RU]

const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .use(LanguageStorage())
  .use(BackendFetch({ prefix: 'https://cdn.tolg.ee/585d9283cc54953be971b3997c848c00' }))
  .init({
    apiUrl: import.meta.env.VITE_APP_TOLGEE_API_URL,
    apiKey: import.meta.env.VITE_APP_TOLGEE_API_KEY,

    defaultLanguage: Language.EN,
    availableLanguages: availableLocales,
  })

export { availableLocales, tolgee, VueTolgee }

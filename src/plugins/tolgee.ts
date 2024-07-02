import { FormatIcu } from '@tolgee/format-icu'
import { BackendFetch, DevTools, LanguageStorage, Tolgee, VueTolgee } from '@tolgee/vue'

export const enum Language {
  EN = 'en',
  RU = 'ru',
}

const availableLocales = [Language.EN, Language.RU]

const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatIcu())
  .use(LanguageStorage())
  .use(BackendFetch({ prefix: import.meta.env.VITE_APP_TOLGEE_CDN_URL }))
  .init({
    apiUrl: import.meta.env.VITE_APP_TOLGEE_API_URL,
    apiKey: import.meta.env.VITE_APP_TOLGEE_API_KEY,

    defaultLanguage: Language.EN,
    availableLanguages: availableLocales,
  })

export { availableLocales, tolgee, VueTolgee }

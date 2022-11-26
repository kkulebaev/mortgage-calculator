import { useLocalStorage, useColorMode } from '@vueuse/core'
import { defineStore } from 'pinia'

export enum COLOR_SCHEME {
  dark = 'dark',
  light = 'light',
}

interface State {
  colorScheme: COLOR_SCHEME
}

const colorScheme = useLocalStorage<COLOR_SCHEME>(
  'color-scheme',
  COLOR_SCHEME.light
)

const scheme = useColorMode()

export const useSettingsStore = defineStore('settings', {
  state: (): State => ({
    colorScheme: colorScheme.value,
  }),

  actions: {
    setColorScheme(mode: COLOR_SCHEME) {
      scheme.value = mode
      colorScheme.value = mode
      this.colorScheme = mode
    },
  },
})

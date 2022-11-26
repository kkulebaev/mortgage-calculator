import { defineStore } from 'pinia'

export enum COLOR_SCHEME {
  dark = 'dark',
  light = 'light',
  auto = 'auto',
}

interface State {
  colorScheme: COLOR_SCHEME
}

export const useSettingsStore = defineStore('settings', {
  state: (): State => ({
    colorScheme: COLOR_SCHEME.auto,
  }),

  getters: {
    isDarkScheme: state => state.colorScheme === COLOR_SCHEME.dark,
  },

  actions: {
    setColorScheme(mode: COLOR_SCHEME) {
      this.colorScheme = mode
    },
  },
})

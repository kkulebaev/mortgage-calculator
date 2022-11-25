import { defineStore } from 'pinia'

enum COLOR_MODES {
  dark = 'dark',
  light = 'light',
}

interface State {
  mode: COLOR_MODES
}

export const useSettingsStore = defineStore('settings', {
  state: (): State => ({
    mode: COLOR_MODES.light,
  }),

  getters: {
    isDarkMode: state => state.mode === COLOR_MODES.dark,
  },

  actions: {
    setMode(mode: COLOR_MODES | boolean) {
      if (typeof mode === 'boolean') {
        this.mode = mode ? COLOR_MODES.dark : COLOR_MODES.light
        return
      }
      this.mode = mode
    },
  },
})

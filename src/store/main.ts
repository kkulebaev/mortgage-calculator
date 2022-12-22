import { defineStore } from 'pinia'

import { apiClient } from '@/api'
import type { Input, Output } from '@/helpers'
import { DEFAULT_INPUT, DEFAULT_OUTPUT } from '@/helpers'

interface State {
  inputValues: Input
  outputValues: Output
  isLoading: boolean
}

export const useMainStore = defineStore('main', {
  state: (): State => ({
    inputValues: DEFAULT_INPUT(),
    outputValues: DEFAULT_OUTPUT(),
    isLoading: false,
  }),

  actions: {
    async calcMortgage(input: Input) {
      this.isLoading = true

      const { data } = await apiClient.calculate
        .calculateMortgage(input)
        .catch(error => {
          throw Error(error)
        })
        .finally(() => {
          this.isLoading = false
        })

      this.inputValues = input
      this.outputValues = data
    },

    clearOutput() {
      this.outputValues = DEFAULT_OUTPUT()
    },
  },
})

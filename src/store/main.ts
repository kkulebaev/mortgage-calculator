import { defineStore } from 'pinia'

import { apiClient } from '@/api'
import type { Input, Output } from '@/helpers'
import { DEFAULT_INPUT, DEFAULT_OUTPUT } from '@/helpers'

interface State {
  inputValues: Input
  outputValues: Output
}

export const useMainStore = defineStore('main', {
  state: (): State => ({
    inputValues: DEFAULT_INPUT(),
    outputValues: DEFAULT_OUTPUT(),
  }),

  actions: {
    async calcMortgage(input: Input) {
      this.inputValues = input
      const response = await this.postCalculateMortgage(input)
      if (response) {
        this.outputValues = response
      }
    },

    async postCalculateMortgage(input: Input) {
      try {
        const { data } = await apiClient.calculate.calculateMortgage(input)
        return data
      } catch (error) {
        return null
      }
    },

    clearOutput() {
      this.outputValues = DEFAULT_OUTPUT()
    },
  },
})

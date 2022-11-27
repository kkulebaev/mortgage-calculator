import { defineStore } from 'pinia'
import { calcMortgage } from '@/services'
import { DEFAULT_INPUT, DEFAULT_OUTPUT } from '@/helpers'
import type { Input, Output } from '@/helpers'

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
    calcMortgage(input: Input) {
      this.inputValues = input
      this.outputValues = calcMortgage(input)
    },

    clearOutput() {
      this.outputValues = DEFAULT_OUTPUT()
    },
  },
})

import { defineStore } from 'pinia'
import { PERIOD, MORTGAGE_TYPE } from '@/helpers'
import { calcMortgage } from '@/services'

export interface PaymentByMonth {
  id: number
  monthPay: number
  repayPer: number
  repayBody: number
  debtEnd: number
}

export interface Input {
  amount: number
  term: number
  period: PERIOD
  rate: number
  type: MORTGAGE_TYPE
}

export interface Output {
  takeValue: number
  repayValue: number
  overpaymentValue: number
  paymentTable: PaymentByMonth[]
}

interface State {
  inputValues: Input
  outputValues: Output
}

export const DEFAULT_INPUT = (): Input => ({
  amount: 1000000,
  term: 12,
  period: PERIOD.months,
  rate: 10,
  type: MORTGAGE_TYPE.an,
})

const DEFAULT_OUTPUT = (): Output => ({
  takeValue: 0,
  repayValue: 0,
  overpaymentValue: 0,
  paymentTable: [],
})

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

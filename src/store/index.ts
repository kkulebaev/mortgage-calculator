import { defineStore } from 'pinia'
import { PERIOD, MORTGAGE_TYPE } from '@/helpers'
import { calcMortgage } from '@/services'

export interface Input {
  mortgageAmount: number
  initialPayment: number
  mortgageTerm: number
  mortgagePeriod: PERIOD
  mortgageRate: number
  paymentType: MORTGAGE_TYPE
}

export interface Output {
  takeValue: number
  repayValue: number
  overpaymentValue: number
  monthlyPayment: number
  totalCost: number
}

interface State {
  inputValues: Input
  outputValues: Output
}

const DEFAULT_INPUT = (): Input =>
  ({
    mortgageAmount: 1500000,
    initialPayment: 500000,
    mortgageTerm: 10,
    mortgagePeriod: PERIOD.years,
    mortgageRate: 10,
    paymentType: MORTGAGE_TYPE.an,
  } as const)

const DEFAULT_OUTPUT = (): Output =>
  ({
    takeValue: 0,
    repayValue: 0,
    overpaymentValue: 0,
    monthlyPayment: 0,
    totalCost: 0,
  } as const)

export const useMainStore = defineStore('main', {
  state: (): State => ({
    inputValues: DEFAULT_INPUT(),
    outputValues: DEFAULT_OUTPUT(),
  }),

  actions: {
    calcMortgage() {
      this.outputValues = calcMortgage(this.inputValues)
    },

    clearOutput() {
      this.outputValues = DEFAULT_OUTPUT()
    },
  },
})

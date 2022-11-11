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

const paymentTable: PaymentByMonth[] = [
  { id: 1, monthPay: 4680, repayPer: 917, repayBody: 3763, debtEnd: 46237 },
  { id: 2, monthPay: 4680, repayPer: 848, repayBody: 3832, debtEnd: 42405 },
  { id: 3, monthPay: 4680, repayPer: 777, repayBody: 3902, debtEnd: 38503 },
  { id: 4, monthPay: 4680, repayPer: 706, repayBody: 3974, debtEnd: 34529 },
  { id: 5, monthPay: 4680, repayPer: 633, repayBody: 4047, debtEnd: 30482 },
  { id: 6, monthPay: 4680, repayPer: 559, repayBody: 4121, debtEnd: 26361 },
  { id: 7, monthPay: 4680, repayPer: 483, repayBody: 4196, debtEnd: 22165 },
  { id: 8, monthPay: 4680, repayPer: 406, repayBody: 4273, debtEnd: 17891 },
  { id: 9, monthPay: 4680, repayPer: 328, repayBody: 4352, debtEnd: 13540 },
  { id: 10, monthPay: 4680, repayPer: 248, repayBody: 4431, debtEnd: 9108 },
  { id: 11, monthPay: 4680, repayPer: 167, repayBody: 4513, debtEnd: 4595 },
  { id: 12, monthPay: 4680, repayPer: 84, repayBody: 4595, debtEnd: 0 },
]

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
  paymentTable: PaymentByMonth[]
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
    paymentTable,
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

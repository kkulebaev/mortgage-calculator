import { MORTGAGE_TYPE, PERIOD } from '@/helpers'

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
  mortgageType: MORTGAGE_TYPE
}

export interface Output {
  takeValue: number
  repayValue: number
  overpaymentValue: number
  paymentTable: PaymentByMonth[]
}

export const DEFAULT_INPUT = (): Input => ({
  amount: 1000000,
  term: 12,
  period: PERIOD.months,
  rate: 10,
  mortgageType: MORTGAGE_TYPE.an,
})

export const DEFAULT_OUTPUT = (): Output => ({
  takeValue: 0,
  repayValue: 0,
  overpaymentValue: 0,
  paymentTable: [],
})

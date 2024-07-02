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
  type: MORTGAGE_TYPE
}

export interface Output {
  takeValue: number
  repayValue: number
  overpaymentValue: number
  paymentTable: PaymentByMonth[]
}

export const DEFAULT_INPUT = (): Input => ({
  amount: 10_000_000,
  term: 20,
  period: PERIOD.years,
  rate: 15,
  type: MORTGAGE_TYPE.an,
})

export const DEFAULT_OUTPUT = (): Output => ({
  takeValue: 0,
  repayValue: 0,
  overpaymentValue: 0,
  paymentTable: [],
})

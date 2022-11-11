import type { Input, Output } from '@/store'

export function calcMortgageDif(input: Input): Output {
  console.log(input)
  return {
    takeValue: 0,
    repayValue: 0,
    overpaymentValue: 0,
    monthlyPayment: 0,
    totalCost: 0,
    paymentTable: [],
  }
}

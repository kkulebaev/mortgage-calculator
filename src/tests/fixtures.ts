import type { Input, Output } from '@/store'
import { PERIOD, MORTGAGE_TYPE } from '@/helpers'

export const inputValue: Input = {
  mortgageAmount: 1500000,
  initialPayment: 500000,
  mortgageTerm: 10,
  mortgagePeriod: PERIOD.years,
  mortgageRate: 10,
  paymentType: MORTGAGE_TYPE.an,
}

export const outputValue: Output = {
  takeValue: 1500000,
  repayValue: 2085808.8425811431,
  overpaymentValue: 585808.8425811431,
  monthlyPayment: 13215.073688176193,
  totalCost: 2085808.8425811431,
  paymentTable: [],
}

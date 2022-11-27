import { MORTGAGE_TYPE, PERIOD } from '@/helpers'
import type { Input, Output } from '@/helpers'
import { calcMortgageAn } from './calc-mortgage-an'
import { calcMortgageDif } from './calc-mortgage-dif'

export interface InputPart {
  amount: number
  monthTerm: number
  monthRate: number
}

export default function calcMortgage({
  amount,
  term,
  period,
  rate,
  type,
}: Input): Output {
  const monthTerm = period === PERIOD.years ? term * 12 : term

  const monthRate = rate / 100 / 12

  const mortgageOutput =
    type === MORTGAGE_TYPE.an
      ? calcMortgageAn({ amount, monthTerm, monthRate })
      : calcMortgageDif({ amount, monthTerm, monthRate })

  return mortgageOutput
}

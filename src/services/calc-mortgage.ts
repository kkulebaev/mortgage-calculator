import { MORTGAGE_TYPE, PERIOD } from '@/helpers'
import type { Input, Output } from '@/store'
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
  let mortgageOutput

  const monthTerm = period === PERIOD.years ? term * 12 : term

  const monthRate = rate / 100 / 12

  if (type === MORTGAGE_TYPE.an) {
    mortgageOutput = calcMortgageAn({ amount, monthTerm, monthRate })
  }

  if (type === MORTGAGE_TYPE.dif) {
    mortgageOutput = calcMortgageDif({ amount, monthTerm, monthRate })
  }

  return mortgageOutput
}

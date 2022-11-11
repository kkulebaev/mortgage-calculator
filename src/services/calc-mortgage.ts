import { MORTGAGE_TYPE } from '@/helpers'
import type { Input, Output } from '@/store'
import { calcMortgageAn } from './calc-mortgage-an'
import { calcMortgageDif } from './calc-mortgage-dif'

export default function calcMortgage(input: Input): Output {
  let mortgageOutput

  if (input.paymentType === MORTGAGE_TYPE.an) {
    mortgageOutput = calcMortgageAn(input)
  }

  if (input.paymentType === MORTGAGE_TYPE.dif) {
    mortgageOutput = calcMortgageDif(input)
  }

  return mortgageOutput
}

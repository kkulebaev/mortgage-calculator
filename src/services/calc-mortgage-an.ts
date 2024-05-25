import type { Output } from '@/helpers'
import { roundNumber } from '@/utils'

import type { InputPart } from './calc-mortgage'
import { calcPaymentDetailAn } from './calc-payment-detail'

export function calcMortgageAn({ amount: takeValue, monthTerm, monthRate }: InputPart): Output {
  const monthPay = roundNumber(takeValue * (monthRate / (1 - Math.pow(1 + monthRate, -monthTerm))))

  const overpaymentValue = roundNumber(monthPay * monthTerm - takeValue)

  const repayValue = roundNumber(overpaymentValue + takeValue)

  const paymentTable = calcPaymentDetailAn(takeValue, monthRate, monthPay, monthTerm)

  return {
    takeValue,
    repayValue,
    overpaymentValue,
    paymentTable,
  }
}

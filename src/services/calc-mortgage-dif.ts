import type { Output } from '@/helpers'
import { roundNumber } from '@/utils'

import type { InputPart } from './calc-mortgage'
import { calcPaymentDetailDif } from './calc-payment-detail'

export function calcMortgageDif({
  amount: takeValue,
  monthTerm,
  monthRate,
}: InputPart): Output {
  const repayBody = roundNumber(takeValue / monthTerm)

  const paymentTable = calcPaymentDetailDif(
    takeValue,
    monthRate,
    repayBody,
    monthTerm
  )

  const repayValue = paymentTable.reduce((acc, item) => acc + item.monthPay, 0)

  const overpaymentValue = repayValue - takeValue

  return {
    takeValue,
    repayValue,
    overpaymentValue,
    paymentTable,
  }
}

import type { Output } from '@/store'
import type { InputPart } from './calc-mortgage'
import { roundNumber } from '@/utils'
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

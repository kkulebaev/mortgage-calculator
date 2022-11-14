import { PERIOD } from '@/helpers'
import type { Input, Output } from '@/store'
import { roundNumber } from '@/utils'
import { calcPaymentDetailDif } from './calc-payment-detail'

export function calcMortgageDif({
  amount: takeValue,
  term,
  period,
  rate,
}: Input): Output {
  const monthTerm = period === PERIOD.years ? term * 12 : term

  const monthRate = rate / 100 / 12

  const repayBody = roundNumber(takeValue / monthTerm)

  const paymentTable = calcPaymentDetailDif(takeValue, monthRate, repayBody)

  const repayValue = paymentTable.reduce((acc, item) => acc + item.monthPay, 0)

  const overpaymentValue = repayValue - takeValue

  return {
    takeValue,
    repayValue,
    overpaymentValue,
    paymentTable,
  }
}

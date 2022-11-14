import { PERIOD } from '@/helpers'
import type { Input, Output } from '@/store'
import { roundNumber } from '@/utils'
import { calcPaymentDetailAn } from './calc-payment-detail'

export function calcMortgageAn({
  amount: takeValue,
  term,
  period,
  rate,
}: Input): Output {
  const monthTerm = period === PERIOD.years ? term * 12 : term

  const monthRate = rate / 100 / 12

  const monthPay = roundNumber(
    takeValue * (monthRate / (1 - Math.pow(1 + monthRate, -monthTerm)))
  )

  const overpaymentValue = roundNumber(monthPay * monthTerm - takeValue)

  const repayValue = roundNumber(overpaymentValue + takeValue)

  const paymentTable = calcPaymentDetailAn(takeValue, monthRate, monthPay)

  return {
    takeValue,
    repayValue,
    overpaymentValue,
    paymentTable,
  }
}

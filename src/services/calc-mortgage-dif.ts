import { PERIOD } from '@/helpers'
import type { Input, Output } from '@/store'
import { roundNumber } from '@/utils'
import { calcPaymentDetailDif } from './calc-payment-detail'

export function calcMortgageDif({ amount, term, period, rate }: Input): Output {
  const takeValue = roundNumber(amount)

  // estMortgageTerm - расчетное значение срока ипотеки выраженное в месяцах. Если пользователь выбрал ввод количества лет, то приводим значение к количеству месяцев
  const estMortgageTerm = period === PERIOD.years ? term * 12 : term

  // repayBody - сумма, которая идёт на погашение тела кредита;
  const repayBody = roundNumber(takeValue / estMortgageTerm)

  // estMortgageRate - расчетное значение месячной процентной ставки
  const estMortgageRate = rate / 100 / 12

  const paymentTable = calcPaymentDetailDif(
    takeValue,
    estMortgageRate,
    repayBody
  )

  const repayValue = paymentTable.reduce((acc, item) => {
    return acc + item.monthPay
  }, 0)

  const overpaymentValue = repayValue - takeValue

  return {
    takeValue,
    repayValue,
    overpaymentValue,
    paymentTable,
  }
}

import { PERIOD } from '@/helpers'
import type { Input, Output } from '@/store'
import { roundNumber } from '@/utils'
import { calcPaymentDetailDif } from './calc-payment-detail'

export function calcMortgageDif({
  mortgageAmount,
  mortgageTerm,
  mortgagePeriod,
  mortgageRate,
}: Input): Output {
  const takeValue = roundNumber(mortgageAmount)

  // estMortgageTerm - расчетное значение срока ипотеки выраженное в месяцах. Если пользователь выбрал ввод количества лет, то приводим значение к количеству месяцев
  const estMortgageTerm =
    mortgagePeriod === PERIOD.years ? mortgageTerm * 12 : mortgageTerm

  // repayBody - сумма, которая идёт на погашение тела кредита;
  const repayBody = roundNumber(takeValue / estMortgageTerm)

  // estMortgageRate - расчетное значение месячной процентной ставки
  const estMortgageRate = mortgageRate / 100 / 12

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

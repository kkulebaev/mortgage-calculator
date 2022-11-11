import { PERIOD } from '@/helpers'
import type { Input, Output } from '@/store'
import { roundNumber } from '@/utils'

import { calcPaymentDetailAn } from './calc-payment-detail'

export function calcMortgageAn({
  mortgageAmount,
  initialPayment,
  mortgageTerm,
  mortgagePeriod,
  mortgageRate,
}: Input): Output {
  const takeValue = roundNumber(mortgageAmount)

  // estMortgageBody - расчетное значение начального тела кредита.
  const estMortgageBody = mortgageAmount - initialPayment

  // estMortgageTerm - расчетное значение срока ипотеки выраженное в месяцах. Если пользователь выбрал ввод количества лет, то приводим значение к количеству месяцев
  const estMortgageTerm =
    mortgagePeriod === PERIOD.years ? mortgageTerm * 12 : mortgageTerm

  // estMortgageRate - расчетное значение месячной процентной ставки
  const estMortgageRate = mortgageRate / 100 / 12

  // Ежемесячный платеж по аннуитетному типу равен:
  const monthlyPayment = roundNumber(
    estMortgageBody *
      (estMortgageRate / (1 - Math.pow(1 + estMortgageRate, -estMortgageTerm)))
  )

  // Переплата по ипотеке по аннуитетному типу равна:
  const overpaymentValue = roundNumber(
    monthlyPayment * estMortgageTerm - estMortgageBody
  )

  const repayValue = roundNumber(overpaymentValue + mortgageAmount)

  const totalCost = roundNumber(repayValue)

  const paymentTable = calcPaymentDetailAn(
    estMortgageBody,
    estMortgageRate,
    monthlyPayment
  )

  return {
    takeValue,
    repayValue,
    overpaymentValue,
    totalCost,
    paymentTable,
  }
}

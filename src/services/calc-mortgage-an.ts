import { PERIOD } from '@/helpers'
import type { Input, Output } from '@/store'
import { roundNumber } from '@/utils'
import { calcPaymentDetailAn } from './calc-payment-detail'

export function calcMortgageAn({ amount, term, period, rate }: Input): Output {
  const takeValue = roundNumber(amount)

  // estMortgageTerm - расчетное значение срока ипотеки выраженное в месяцах. Если пользователь выбрал ввод количества лет, то приводим значение к количеству месяцев
  const estMortgageTerm = period === PERIOD.years ? term * 12 : term

  // estMortgageRate - расчетное значение месячной процентной ставки
  const estMortgageRate = rate / 100 / 12

  // Ежемесячный платеж по аннуитетному типу равен:
  const monthlyPayment = roundNumber(
    takeValue *
      (estMortgageRate / (1 - Math.pow(1 + estMortgageRate, -estMortgageTerm)))
  )

  // Переплата по ипотеке по аннуитетному типу равна:
  const overpaymentValue = roundNumber(
    monthlyPayment * estMortgageTerm - takeValue
  )

  const repayValue = roundNumber(overpaymentValue + amount)

  const paymentTable = calcPaymentDetailAn(
    takeValue,
    estMortgageRate,
    monthlyPayment
  )

  return {
    takeValue,
    repayValue,
    overpaymentValue,
    paymentTable,
  }
}

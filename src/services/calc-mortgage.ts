import { PERIOD } from '@/helpers'
import type { Input, Output } from '@/store'

export default function calcMortgage({
  mortgageAmount,
  initialPayment,
  mortgageTerm,
  mortgagePeriod,
  mortgageRate,
}: Input): Output {
  const takeValue = mortgageAmount

  // estMortgageBody - расчетное значение начального тела кредита.
  const estMortgageBody = mortgageAmount - initialPayment

  // estMortgageTerm - расчетное значение срока ипотеки выраженное в месяцах. Если пользователь выбрал ввод количества лет, то приводим значение к количеству месяцев
  const estMortgageTerm =
    mortgagePeriod === PERIOD.years ? mortgageTerm * 12 : mortgageTerm

  // estMortgageRate - расчетное значение месячной процентной ставки
  const estMortgageRate = mortgageRate / 100 / 12

  // Ежемесячный платеж по аннуитетному типу равен:
  const monthlyPayment =
    estMortgageBody *
    (estMortgageRate / (1 - Math.pow(1 + estMortgageRate, -estMortgageTerm)))

  // Переплата по ипотеке по аннуитетному типу равна:
  const overpaymentValue = monthlyPayment * estMortgageTerm - estMortgageBody

  const repayValue = overpaymentValue + mortgageAmount

  const totalCost = repayValue

  return {
    takeValue,
    repayValue,
    overpaymentValue,
    monthlyPayment,
    totalCost,
    paymentTable: [],
  }
}

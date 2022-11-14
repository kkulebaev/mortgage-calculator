import type { PaymentByMonth } from '@/store'
import { roundNumber } from '@/utils'

// estMortgageBody – сумма оставшейся задолженности по кредиту (остаток по кредиту);
// estMortgageRate – ежемесячная процентная ставка;
// monthPay - ежемесячный аннуитетный платёж;

export function calcPaymentDetailAn(
  estMortgageBody: number,
  estMortgageRate: number,
  monthPay: number
): PaymentByMonth[] {
  const paymentDetail = []
  let debtEnd = estMortgageBody
  let i = 0

  while (roundNumber(debtEnd, 0) > 0) {
    i = i + 1
    const repayPer = roundNumber(debtEnd * estMortgageRate)
    const repayBody = roundNumber(monthPay - repayPer)
    debtEnd = roundNumber(debtEnd - repayBody)

    const paymentByMonth: PaymentByMonth = {
      id: i,
      monthPay,
      repayPer,
      repayBody,
      debtEnd,
    }

    paymentDetail.push(paymentByMonth)
  }

  return paymentDetail
}

export function calcPaymentDetailDif(
  estMortgageBody: number,
  estMortgageRate: number,
  repayBody: number
): PaymentByMonth[] {
  const paymentDetail = []
  let debtEnd = estMortgageBody
  let i = 0

  while (roundNumber(debtEnd, 0) > 0) {
    i = i + 1
    const repayPer = roundNumber(debtEnd * estMortgageRate)
    const monthPay = roundNumber(repayBody + repayPer)
    debtEnd = roundNumber(debtEnd - repayBody)

    const paymentByMonth: PaymentByMonth = {
      id: i,
      monthPay,
      repayPer,
      repayBody,
      debtEnd,
    }

    paymentDetail.push(paymentByMonth)
  }

  return paymentDetail
}

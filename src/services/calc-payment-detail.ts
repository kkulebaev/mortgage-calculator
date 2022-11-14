import type { PaymentByMonth } from '@/store'
import { roundNumber } from '@/utils'

// estMortgageBody – сумма оставшейся задолженности по кредиту (остаток по кредиту);
// monthRate – ежемесячная процентная ставка;
// monthPay - ежемесячный аннуитетный платёж;

export function calcPaymentDetailAn(
  estMortgageBody: number,
  monthRate: number,
  monthPay: number
): PaymentByMonth[] {
  const paymentDetail = []
  let debtEnd = estMortgageBody
  let i = 0

  while (roundNumber(debtEnd, 0) > 0) {
    i = i + 1
    const repayPer = roundNumber(debtEnd * monthRate)
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
  monthRate: number,
  repayBody: number
): PaymentByMonth[] {
  const paymentDetail = []
  let debtEnd = estMortgageBody
  let i = 0

  while (roundNumber(debtEnd, 0) > 0) {
    i = i + 1
    const repayPer = roundNumber(debtEnd * monthRate)
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

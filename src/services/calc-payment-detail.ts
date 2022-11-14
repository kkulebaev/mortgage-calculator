import type { PaymentByMonth } from '@/store'
import { roundNumber } from '@/utils'

// estMortgageBody – сумма оставшейся задолженности по кредиту (остаток по кредиту);
// monthRate – ежемесячная процентная ставка;
// monthPay - ежемесячный платёж;

export function calcPaymentDetailAn(
  estMortgageBody: number,
  monthRate: number,
  monthPay: number,
  monthTerm: number
): PaymentByMonth[] {
  const paymentDetail = []
  let debtEnd = estMortgageBody

  for (let i = 1; i <= monthTerm; i++) {
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
  repayBody: number,
  monthTerm: number
): PaymentByMonth[] {
  const paymentDetail = []
  let debtEnd = estMortgageBody

  for (let i = 1; i <= monthTerm; i++) {
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

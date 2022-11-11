import { MORTGAGE_TYPE } from '@/helpers'
import type { PaymentByMonth } from '@/store'

export function calcPaymentDetail(
  paymentType: MORTGAGE_TYPE
): PaymentByMonth[] {
  let paymentDetail

  if (paymentType === MORTGAGE_TYPE.an) {
    paymentDetail = calcPaymentDetailAn()
  }

  if (paymentType === MORTGAGE_TYPE.dif) {
    paymentDetail = calcPaymentDetailDif()
  }

  return paymentDetail
}

function calcPaymentDetailAn(): PaymentByMonth[] {
  return []
}

function calcPaymentDetailDif(): PaymentByMonth[] {
  return []
}

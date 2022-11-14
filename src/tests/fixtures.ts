import type { Input, Output } from '@/store'
import { PERIOD, MORTGAGE_TYPE } from '@/helpers'

export const inputValue: Input = {
  mortgageAmount: 1000000,
  mortgageTerm: 12,
  mortgagePeriod: PERIOD.months,
  mortgageRate: 10,
  paymentType: MORTGAGE_TYPE.an,
}

export const outputValue: Output = {
  takeValue: 1000000,
  repayValue: 1054990.68,
  overpaymentValue: 54990.68,
  paymentTable: [
    {
      id: 1,
      monthPay: 87915.89,
      repayPer: 8333.33,
      repayBody: 79582.56,
      debtEnd: 920417.44,
    },
    {
      id: 2,
      monthPay: 87915.89,
      repayPer: 7670.15,
      repayBody: 80245.74,
      debtEnd: 840171.7,
    },
    {
      id: 3,
      monthPay: 87915.89,
      repayPer: 7001.43,
      repayBody: 80914.46,
      debtEnd: 759257.24,
    },
    {
      id: 4,
      monthPay: 87915.89,
      repayPer: 6327.14,
      repayBody: 81588.75,
      debtEnd: 677668.49,
    },
    {
      id: 5,
      monthPay: 87915.89,
      repayPer: 5647.24,
      repayBody: 82268.65,
      debtEnd: 595399.84,
    },
    {
      id: 6,
      monthPay: 87915.89,
      repayPer: 4961.67,
      repayBody: 82954.22,
      debtEnd: 512445.62,
    },
    {
      id: 7,
      monthPay: 87915.89,
      repayPer: 4270.38,
      repayBody: 83645.51,
      debtEnd: 428800.11,
    },
    {
      id: 8,
      monthPay: 87915.89,
      repayPer: 3573.33,
      repayBody: 84342.56,
      debtEnd: 344457.55,
    },
    {
      id: 9,
      monthPay: 87915.89,
      repayPer: 2870.48,
      repayBody: 85045.41,
      debtEnd: 259412.14,
    },
    {
      id: 10,
      monthPay: 87915.89,
      repayPer: 2161.77,
      repayBody: 85754.12,
      debtEnd: 173658.02,
    },
    {
      id: 11,
      monthPay: 87915.89,
      repayPer: 1447.15,
      repayBody: 86468.74,
      debtEnd: 87189.28,
    },
    {
      id: 12,
      monthPay: 87915.89,
      repayPer: 726.58,
      repayBody: 87189.31,
      debtEnd: -0.03,
    },
  ],
}

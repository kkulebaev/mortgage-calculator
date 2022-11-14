import type { Input, Output } from '@/store'
import { PERIOD, MORTGAGE_TYPE } from '@/helpers'

export const inputAnMortgage: Input = {
  amount: 1000000,
  term: 12,
  period: PERIOD.months,
  rate: 10,
  type: MORTGAGE_TYPE.an,
}

export const outputAnMortgage: Output = {
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

export const inputDifMortgage: Input = {
  amount: 1000000,
  term: 12,
  period: PERIOD.months,
  rate: 10,
  type: MORTGAGE_TYPE.dif,
}

export const outputDifMortgage: Output = {
  takeValue: 1000000,
  repayValue: 1054166.62,
  overpaymentValue: 54166.62000000011,
  paymentTable: [
    {
      id: 1,
      monthPay: 91666.66,
      repayPer: 8333.33,
      repayBody: 83333.33,
      debtEnd: 916666.67,
    },
    {
      id: 2,
      monthPay: 90972.22,
      repayPer: 7638.89,
      repayBody: 83333.33,
      debtEnd: 833333.34,
    },
    {
      id: 3,
      monthPay: 90277.77,
      repayPer: 6944.44,
      repayBody: 83333.33,
      debtEnd: 750000.01,
    },
    {
      id: 4,
      monthPay: 89583.33,
      repayPer: 6250,
      repayBody: 83333.33,
      debtEnd: 666666.68,
    },
    {
      id: 5,
      monthPay: 88888.89,
      repayPer: 5555.56,
      repayBody: 83333.33,
      debtEnd: 583333.35,
    },
    {
      id: 6,
      monthPay: 88194.44,
      repayPer: 4861.11,
      repayBody: 83333.33,
      debtEnd: 500000.02,
    },
    {
      id: 7,
      monthPay: 87500,
      repayPer: 4166.67,
      repayBody: 83333.33,
      debtEnd: 416666.69,
    },
    {
      id: 8,
      monthPay: 86805.55,
      repayPer: 3472.22,
      repayBody: 83333.33,
      debtEnd: 333333.36,
    },
    {
      id: 9,
      monthPay: 86111.11,
      repayPer: 2777.78,
      repayBody: 83333.33,
      debtEnd: 250000.03,
    },
    {
      id: 10,
      monthPay: 85416.66,
      repayPer: 2083.33,
      repayBody: 83333.33,
      debtEnd: 166666.7,
    },
    {
      id: 11,
      monthPay: 84722.22,
      repayPer: 1388.89,
      repayBody: 83333.33,
      debtEnd: 83333.37,
    },
    {
      id: 12,
      monthPay: 84027.77,
      repayPer: 694.44,
      repayBody: 83333.33,
      debtEnd: 0.04,
    },
  ],
}

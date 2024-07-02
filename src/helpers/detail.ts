import { tolgee } from '@/plugins/tolgee'

export enum CellType {
  string = 'string',
  number = 'number',
}

const CURRENCY_IN_BRACKETS = () => `(${tolgee.t('currency')})`

export const DETAIL_FIELDS = [
  {
    prop: 'id',
    type: CellType.number,
    label: () => 'ID',
    width: 80,
    align: 'center',
  },
  {
    prop: 'monthPay',
    type: CellType.number,
    label: () => tolgee.t('detail.monthly-payment') + ' ' + CURRENCY_IN_BRACKETS(),
    align: 'center',
  },
  {
    prop: 'repayBody',
    type: CellType.number,
    label: () => tolgee.t('detail.repayment-body') + ' ' + CURRENCY_IN_BRACKETS(),
    align: 'center',
  },
  {
    prop: 'repayPer',
    type: CellType.number,
    label: () => tolgee.t('detail.repayment-interest') + ' ' + CURRENCY_IN_BRACKETS(),
    align: 'center',
  },
  {
    prop: 'debtEnd',
    type: CellType.number,
    label: () => tolgee.t('detail.debt-end') + ' ' + CURRENCY_IN_BRACKETS(),
    align: 'center',
  },
] as const

export enum CellType {
  string = 'string',
  number = 'number',
}

export const DETAIL_FIELDS = [
  {
    prop: 'id',
    type: CellType.number,
    label: 'ID',
    width: 80,
    align: 'center',
  },
  {
    prop: 'monthPay',
    type: CellType.number,
    label: 'Ежемесячный платеж (р.)',
    align: 'center',
  },
  {
    prop: 'repayBody',
    type: CellType.number,
    label: 'Погашение тела кредита (р.)',
    align: 'center',
  },
  {
    prop: 'repayPer',
    type: CellType.number,
    label: 'Погашение процентов (р.)',
    align: 'center',
  },
  {
    prop: 'debtEnd',
    type: CellType.number,
    label: 'Долг на конец месяца (р.)',
    align: 'center',
  },
] as const

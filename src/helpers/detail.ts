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
    prop: 'month_pay',
    type: CellType.number,
    label: 'Ежемесячный платеж (р.)',
    align: 'center',
  },
  {
    prop: 'repay_body',
    type: CellType.number,
    label: 'Погашение тела кредита (р.)',
    align: 'center',
  },
  {
    prop: 'repay_per',
    type: CellType.number,
    label: 'Погашение процентов (р.)',
    align: 'center',
  },
  {
    prop: 'debt_end',
    type: CellType.number,
    label: 'Долг на конец месяца (р.)',
    align: 'center',
  },
] as const

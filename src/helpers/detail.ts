export const DETAIL_FIELDS = [
  {
    prop: 'id',
    label: 'ID',
    width: 80,
    align: 'center',
  },
  {
    prop: 'tdMonPay',
    label: 'Ежемесячный платеж (р.)',
    align: 'center',
  },
  {
    prop: 'repayPer',
    label: 'Погашение процентов (р.)',
    align: 'center',
  },
  {
    prop: 'repayBody',
    label: 'Погашение тела кредита (р.)',
    align: 'center',
  },
  {
    prop: 'debtEnd',
    label: 'Долг на конец месяца (р.)',
    align: 'center',
  },
] as const

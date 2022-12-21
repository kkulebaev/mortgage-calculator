export const DETAIL_FIELDS = [
  {
    prop: 'id',
    label: 'ID',
    width: 80,
    align: 'center',
  },
  {
    prop: 'month_pay',
    label: 'Ежемесячный платеж (р.)',
    align: 'center',
  },
  {
    prop: 'repay_body',
    label: 'Погашение тела кредита (р.)',
    align: 'center',
  },
  {
    prop: 'repay_per',
    label: 'Погашение процентов (р.)',
    align: 'center',
  },
  {
    prop: 'debt_end',
    label: 'Долг на конец месяца (р.)',
    align: 'center',
  },
] as const

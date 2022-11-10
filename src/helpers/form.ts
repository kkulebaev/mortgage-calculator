export enum MORTGAGE_TYPE {
  an = 'an',
  dif = 'dif',
}

export enum MORTGAGE_TYPE_LABEL {
  an = 'Аннуитетный',
  dif = 'Дифференцированный',
}

export enum PERIOD {
  years = 'years',
  months = 'months',
}

export enum PERIOD_LABEL {
  years = 'лет',
  months = 'мес',
}

export const TYPE_MORTGAGE_OPTIONS = [
  { value: MORTGAGE_TYPE.an, label: MORTGAGE_TYPE_LABEL.an },
  { value: MORTGAGE_TYPE.dif, label: MORTGAGE_TYPE_LABEL.dif },
] as const

export const PERIOD_OPTIONS = [
  { value: PERIOD.years, label: PERIOD_LABEL.years },
  { value: PERIOD.months, label: PERIOD_LABEL.months },
] as const

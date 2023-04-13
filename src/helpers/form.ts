import { i18n } from '@/plugins/i18n'

const { t } = i18n.global

export interface OptionRaw {
  label: () => string
  value: string
}

export enum MORTGAGE_TYPE {
  an = 'an',
  dif = 'dif',
}

export const MORTGAGE_TYPE_LABEL = {
  an: () => t('type.an'),
  dif: () => t('type.dif'),
}

export enum PERIOD {
  years = 'years',
  months = 'months',
}

export const PERIOD_LABEL = {
  years: () => t('period.years'),
  months: () => t('period.months'),
}

export const TYPE_MORTGAGE_OPTIONS: OptionRaw[] = [
  { value: MORTGAGE_TYPE.an, label: MORTGAGE_TYPE_LABEL.an },
  { value: MORTGAGE_TYPE.dif, label: MORTGAGE_TYPE_LABEL.dif },
]

export const PERIOD_OPTIONS: OptionRaw[] = [
  { value: PERIOD.years, label: PERIOD_LABEL.years },
  { value: PERIOD.months, label: PERIOD_LABEL.months },
]

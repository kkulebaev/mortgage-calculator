import { useStorage } from '@vueuse/core'
import {
  TYPE_MORTGAGE_OPTIONS,
  PERIOD_OPTIONS,
} from '@/components/the-form/form-helpers.js'

export function useData() {
  const inputValues = useStorage('input-values', {
    mortgageAmount: 30000,
    initialPayment: 10000,
    mortgageTerm: 3,
    mortgagePeriod: PERIOD_OPTIONS[0].value,
    mortgageRate: 12,
    paymentType: TYPE_MORTGAGE_OPTIONS[0].value,
  })

  return { inputValues }
}

<template>
  <div class="description">
    <span>
      {{ $t('mortgage-amount') }}: {{ numberWithSpaces(inputValues.amount) }}
      {{ $t('currency') }}
    </span>
    <span>
      {{ $t('mortgage-term') }}: {{ inputValues.term }}
      {{ PERIOD_LABEL[inputValues.period]() }}
    </span>
    <span> {{ $t('mortgage-rate') }}: {{ inputValues.rate }} % </span>
    <span>
      {{ $t('mortgage-payment-type') }}:
      {{ MORTGAGE_TYPE_LABEL[inputValues.type]() }}
    </span>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

import type { Input } from '@/helpers'
import { MORTGAGE_TYPE_LABEL, PERIOD_LABEL } from '@/helpers'
import { numberWithSpaces } from '@/utils'

export default defineComponent({
  name: 'DetailDescription',

  props: {
    inputValues: {
      type: Object as PropType<Input>,
      required: true,
    },
  },

  setup() {
    return {
      PERIOD_LABEL,
      MORTGAGE_TYPE_LABEL,
      numberWithSpaces,
    }
  },
})
</script>

<style lang="postcss" scoped>
.description {
  display: flex;
  flex-flow: column wrap;
  gap: 0.5rem;
  font-size: 1.2rem;
  color: var(--dark-gray);
}
</style>

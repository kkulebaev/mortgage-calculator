<template>
  <form class="form" netlify>
    <div class="form__item">
      <span class="form__item__label"> Сумма ипотеки </span>
      <ElInput
        v-model="mortgageAmountValue"
        placeholder="50 000"
        :maxlength="13"
        @input="$emit('change')"
      >
        <template #append>руб</template>
      </ElInput>
    </div>
    <div class="form__item">
      <span class="form__item__label"> Срок ипотеки </span>
      <ElInput
        v-model="mortgageTermValue"
        placeholder="10"
        :maxlength="3"
        @input="$emit('change')"
      >
        <template #append>
          <BaseSelect
            v-model="mortgagePeriodValue"
            class="form__item__select"
            :options="PERIOD_OPTIONS"
            @change="$emit('change')"
          />
        </template>
      </ElInput>
    </div>
    <div class="form__item">
      <span class="form__item__label"> Годовая процентная ставка </span>
      <ElInputNumber
        v-model="mortgageRateValue"
        :min="0.1"
        :max="1000"
        :step="0.1"
        :value-on-clear="0.1"
        controls-position="right"
        @input="$emit('change')"
      />
    </div>
    <div class="form__item">
      <span class="form__item__label"> Тип платежей </span>
      <BaseSelect
        v-model="paymentTypeValue"
        :options="TYPE_MORTGAGE_OPTIONS"
        @change="$emit('change')"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import type { PropType } from 'vue'
import {
  TYPE_MORTGAGE_OPTIONS,
  PERIOD_OPTIONS,
  MORTGAGE_TYPE,
  PERIOD,
} from '@/helpers'

import { toNumber, numberWithSpaces } from '@/utils'

import { BaseSelect } from '@/components'
import { ElInput, ElInputNumber } from 'element-plus'
import { useVModel } from '@vueuse/core'

export default defineComponent({
  name: 'AppForm',

  components: {
    BaseSelect,
    ElInput,
    ElInputNumber,
  },

  props: {
    mortgageAmount: {
      type: Number,
      required: true,
    },

    mortgageTerm: {
      type: Number,
      required: true,
    },

    mortgagePeriod: {
      type: String as PropType<PERIOD>,
      required: true,
    },

    mortgageRate: {
      type: Number,
      required: true,
    },

    paymentType: {
      type: String as PropType<MORTGAGE_TYPE>,
      required: true,
    },
  },

  emits: [
    'update:paymentType',
    'update:mortgageAmount',
    'update:mortgageTerm',
    'update:mortgagePeriod',
    'update:mortgageRate',
    'change',
  ],

  setup(props, { emit }) {
    const mortgageAmountValue = computed({
      get() {
        return numberWithSpaces(props.mortgageAmount)
      },
      set(value) {
        if (typeof value === 'number') {
          emit('update:mortgageAmount', toNumber(value))
        }
      },
    })

    const mortgageTermValue = computed({
      get() {
        return numberWithSpaces(props.mortgageTerm)
      },
      set(value) {
        if (typeof value === 'number') {
          emit('update:mortgageTerm', toNumber(value))
        }
      },
    })

    const mortgagePeriodValue = useVModel(props, 'mortgagePeriod', emit)
    const mortgageRateValue = useVModel(props, 'mortgageRate', emit)
    const paymentTypeValue = useVModel(props, 'paymentType', emit)

    return {
      mortgageAmountValue,
      mortgageTermValue,
      mortgagePeriodValue,
      mortgageRateValue,
      paymentTypeValue,
      TYPE_MORTGAGE_OPTIONS,
      PERIOD_OPTIONS,
    }
  },
})
</script>

<style scoped>
.form {
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
}

.form__item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: calc(50% - 2rem);
}

.form__item__label {
  color: var(--black);
  font-size: 1.8rem;
  width: fit-content;
  cursor: default;
  position: relative;
}

.form__item__select {
  max-width: 7rem;
}
</style>

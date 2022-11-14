<template>
  <form class="form">
    <div class="form__item">
      <span class="form__item__label">
        Сумма ипотеки
        <BaseTooltip
          content="Сумма, которую вы хотите взять (с учетом первоначального взноса)"
        />
      </span>
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
      <span class="form__item__label">Срок ипотеки</span>
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
      <span class="form__item__label">Годовая процентная ставка</span>
      <ElInputNumber
        v-model="mortgageRateValue"
        :min="0.1"
        :step="0.1"
        controls-position="right"
        @input="$emit('change')"
      />
    </div>
    <div class="form__item">
      <span class="form__item__label">
        Тип платежей
        <BaseTooltip
          content="Аннуитетный тип – размер ежемесячного платежа одинаковый.
        Дифференцированный тип – тело кредита одинаковое, а размер ежемесячного платежа постепенно уменьшается."
        />
      </span>
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
import { TYPE_MORTGAGE_OPTIONS, PERIOD_OPTIONS } from '@/helpers'

import { toNumber, numberWithSpaces } from '@/utils'

import { BaseSelect, BaseTooltip } from '@/components'
import { ElInput, ElInputNumber } from 'element-plus'

export default defineComponent({
  name: 'AppForm',

  components: {
    BaseSelect,
    BaseTooltip,
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
      type: String,
      required: true,
      validator(val) {
        return !!PERIOD_OPTIONS.find(x => x.value === val)
      },
    },

    mortgageRate: {
      type: Number,
      required: true,
    },

    paymentType: {
      type: String,
      required: true,
      validator(val) {
        return !!TYPE_MORTGAGE_OPTIONS.find(x => x.value === val)
      },
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
        emit('update:mortgageAmount', toNumber(value))
      },
    })

    const mortgageTermValue = computed({
      get() {
        return numberWithSpaces(props.mortgageTerm)
      },
      set(value) {
        emit('update:mortgageTerm', toNumber(value))
      },
    })

    const mortgagePeriodValue = computed({
      get() {
        return props.mortgagePeriod
      },
      set(value) {
        emit('update:mortgagePeriod', value)
      },
    })

    const mortgageRateValue = computed({
      get() {
        return props.mortgageRate
      },
      set(value) {
        emit('update:mortgageRate', value)
      },
    })

    const paymentTypeValue = computed({
      get() {
        return props.paymentType
      },
      set(value) {
        emit('update:paymentType', value)
      },
    })

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

<style lang="scss" scoped>
.form {
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;

  &__item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: calc(50% - 2rem);

    &__label {
      color: $black;
      font-size: 1.8rem;
      width: fit-content;
      cursor: default;
      position: relative;
    }

    &__select {
      max-width: 7rem;
    }
  }
}
</style>

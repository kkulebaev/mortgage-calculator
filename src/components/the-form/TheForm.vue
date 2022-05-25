<template>
  <form class="form">
    <div class="form__item">
      <span class="form__item__label">
        Сумма ипотеки
        <base-tooltip
          content="Сумма, которую вы хотите взять (с учетом первоначального взноса)"
        />
      </span>
      <el-input
        v-model="mortgageAmountValue"
        placeholder="50 000"
        :maxlength="13"
        @input="$emit('change')"
      >
        <template #append>руб</template>
      </el-input>
    </div>
    <div class="form__item">
      <span class="form__item__label">Первоначальный взнос</span>
      <el-input
        v-model="initialPaymentValue"
        placeholder="20 000"
        @input="$emit('change')"
      >
        <template #append>руб</template>
      </el-input>
    </div>
    <div class="form__item">
      <span class="form__item__label">Срок ипотеки</span>
      <el-input
        v-model="mortgageTermValue"
        placeholder="10"
        :maxlength="3"
        @input="$emit('change')"
      >
        <template #append>
          <base-select
            v-model="mortgagePeriodValue"
            class="form__item__select"
            :options="PERIOD_OPTIONS"
            @change="$emit('change')"
          />
        </template>
      </el-input>
    </div>
    <div class="form__item">
      <span class="form__item__label">Годовая процентная ставка</span>
      <el-input-number
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
        <base-tooltip
          content="Аннуитетный тип – размер ежемесячного платежа одинаковый.
        Дифференцированный тип – тело кредита одинаковое, а размер ежемесячного платежа постепенно уменьшается."
        />
      </span>
      <base-select
        v-model="paymentTypeValue"
        :options="TYPE_MORTGAGE_OPTIONS"
        @change="$emit('change')"
      />
    </div>
  </form>
</template>

<script setup>
import { computed } from 'vue'
import {
  TYPE_MORTGAGE_OPTIONS,
  PERIOD_OPTIONS,
} from '/src/components/the-form/form-helpers.js'

import numberWithSpaces from '/src/utils/numberWithSpaces.js'
import toNumber from '/src/utils/toNumber.js'

import BaseSelect from '../base/BaseSelect.vue'
import BaseTooltip from '../base/BaseTooltip.vue'

const props = defineProps({
  mortgageAmount: {
    type: Number,
    required: true,
  },

  initialPayment: {
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
})

const emit = defineEmits([
  'update:paymentType',
  'update:mortgageAmount',
  'update:initialPayment',
  'update:mortgageTerm',
  'update:mortgagePeriod',
  'update:mortgageRate',
  'change',
])

const mortgageAmountValue = computed({
  get() {
    return numberWithSpaces(props.mortgageAmount)
  },
  set(value) {
    emit('update:mortgageAmount', toNumber(value))
  },
})

const initialPaymentValue = computed({
  get() {
    return numberWithSpaces(props.initialPayment)
  },
  set(value) {
    emit('update:initialPayment', toNumber(value))
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

<template>
  <form class="form" netlify>
    <div class="form-item">
      <span class="form-item__label"> Сумма ипотеки </span>
      <ElInputNumber
        v-model="curAmount"
        :min="1"
        :max="100000000000"
        :step="100000"
        :value-on-clear="100000"
        @input="$emit('change')"
      />
    </div>
    <div class="form-item">
      <span class="form-item__label"> Срок ипотеки </span>
      <div class="form-item__group">
        <ElInputNumber
          v-model="curTerm"
          :min="1"
          :max="1000"
          :step="1"
          :value-on-clear="1"
          @input="$emit('change')"
        />
        <BaseSelect
          v-model="curPeriod"
          class="form-item__select"
          :options="PERIOD_OPTIONS"
          @change="$emit('change')"
        />
      </div>
    </div>
    <div class="form-item">
      <span class="form-item__label"> Годовая процентная ставка </span>
      <ElInputNumber
        v-model="curRate"
        :min="0.1"
        :max="1000"
        :step="0.1"
        :value-on-clear="0.1"
        @input="$emit('change')"
      />
    </div>
    <div class="form-item">
      <span class="form-item__label"> Тип платежей </span>
      <BaseSelect
        v-model="curPaymentType"
        :options="TYPE_MORTGAGE_OPTIONS"
        @change="$emit('change')"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { useVModels } from '@vueuse/core'
import { ElInputNumber } from 'element-plus'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

import {
  MORTGAGE_TYPE,
  PERIOD,
  PERIOD_OPTIONS,
  TYPE_MORTGAGE_OPTIONS,
} from '@/helpers'

import BaseSelect from './base/base-select.vue'

export default defineComponent({
  name: 'AppForm',

  components: {
    BaseSelect,
    ElInputNumber,
  },

  props: {
    amount: {
      type: Number,
      required: true,
    },

    term: {
      type: Number,
      required: true,
    },

    period: {
      type: String as PropType<PERIOD>,
      required: true,
    },

    rate: {
      type: Number,
      required: true,
    },

    paymentType: {
      type: String as PropType<MORTGAGE_TYPE>,
      required: true,
    },
  },

  emits: [
    'update:amount',
    'update:term',
    'update:period',
    'update:rate',
    'update:paymentType',
    'change',
  ],

  setup(props, { emit }) {
    const {
      amount: curAmount,
      term: curTerm,
      period: curPeriod,
      rate: curRate,
      paymentType: curPaymentType,
    } = useVModels(props, emit)

    return {
      curAmount,
      curTerm,
      curPeriod,
      curRate,
      curPaymentType,
      TYPE_MORTGAGE_OPTIONS,
      PERIOD_OPTIONS,
    }
  },
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/vars.css';

.form {
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: calc(50% - 2rem);
}

.form-item__label {
  color: var(--black);
  font-size: 1.6rem;
  width: fit-content;
  cursor: default;
  position: relative;
}

.form-item__group {
  display: flex;
  gap: 1rem;
}

.form-item__select {
  max-width: 7rem;
}

@media (--mobile-tablet) {
  .form {
    flex-direction: column;
    gap: 2rem;
  }

  .form-item {
    width: 100%;
  }
}
</style>

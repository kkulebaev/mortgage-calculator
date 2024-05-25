<template>
  <form class="form" netlify>
    <div class="form-item">
      <span class="form-item__label"> {{ t('mortgage-amount') }} </span>
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
      <span class="form-item__label"> {{ t('mortgage-term') }} </span>
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
          :options="PERIOD_OPTIONS_NORMALIZED"
          @change="$emit('change')"
        />
      </div>
    </div>
    <div class="form-item">
      <span class="form-item__label"> {{ t('mortgage-rate') }} </span>
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
      <span class="form-item__label"> {{ t('mortgage-payment-type') }} </span>
      <BaseSelect
        v-model="curPaymentType"
        :options="TYPE_MORTGAGE_OPTIONS_NORMALIZED"
        @change="$emit('change')"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { useVModels } from '@vueuse/core'
import { ElInputNumber } from 'element-plus'
import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import { Option } from '@/components/base/base-select.vue'
import { MORTGAGE_TYPE, OptionRaw, PERIOD, PERIOD_OPTIONS, TYPE_MORTGAGE_OPTIONS } from '@/helpers'

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

    const { t } = useI18n()

    const TYPE_MORTGAGE_OPTIONS_NORMALIZED = computed(() => normalizedData(TYPE_MORTGAGE_OPTIONS))

    const PERIOD_OPTIONS_NORMALIZED = computed(() => normalizedData(PERIOD_OPTIONS))

    function normalizedData(arr: OptionRaw[]): Option[] {
      return arr.map(x => ({
        label: x.label(),
        value: x.value,
      }))
    }

    return {
      curAmount,
      curTerm,
      curPeriod,
      curRate,
      curPaymentType,
      TYPE_MORTGAGE_OPTIONS_NORMALIZED,
      PERIOD_OPTIONS_NORMALIZED,
      t,
    }
  },
})
</script>

<style lang="postcss" scoped>
@import url('@/assets/styles/vars.css');

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

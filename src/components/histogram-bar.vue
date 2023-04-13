<template>
  <div v-if="value" class="histogram">
    <span class="histogram__label"> {{ label }} </span>
    <span class="histogram__value">
      {{ numberWithSpaces(value) }} {{ t('currency') }}
    </span>

    <div
      class="histogram__scale-bar"
      :class="{ secondary: type === HistogramTypes.secondary }"
      :style="{ height: `${height}%` }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useI18n } from 'vue-i18n'

import { numberWithSpaces } from '@/utils'

export enum HistogramTypes {
  primary = 'primary',
  secondary = 'secondary',
}

export default defineComponent({
  name: 'HistogramBar',

  props: {
    height: {
      type: Number,
      required: true,
    },

    value: {
      type: Number,
      required: true,
    },

    label: {
      type: String,
      required: true,
    },

    type: {
      type: String as PropType<HistogramTypes>,
      default: HistogramTypes.primary,
    },
  },

  setup() {
    const { t } = useI18n()

    return {
      numberWithSpaces,
      HistogramTypes,
      t,
    }
  },
})
</script>

<style lang="postcss" scoped>
@import url('@/assets/styles/vars.css');

.histogram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  height: 100%;
}

.histogram__label {
  color: var(--black);
  font-size: 1.8rem;
}

.histogram__value {
  font-size: 2rem;
  font-weight: 900;
  color: var(--black);
}

.histogram__scale-bar {
  width: 100%;
  min-width: 18rem;
  background-color: var(--primary);
  border-radius: 15px;
}

.histogram__scale-bar.secondary {
  background-color: var(--secondary);
}

@media (--mobile) {
  .histogram__scale-bar {
    min-width: auto;
  }
}
</style>

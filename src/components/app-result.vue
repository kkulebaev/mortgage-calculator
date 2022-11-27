<template>
  <div class="result-block">
    <HistogramChart :take-value="takeValue" :repay-value="repayValue" />

    <div class="info-block">
      <Transition
        class="transition"
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutUp"
      >
        <div v-if="overpaymentValue" class="info-block__item">
          <span class="info-block__item__label"> Переплата по ипотеке: </span>

          <span class="info-block__item__label">
            {{ numberWithSpaces(overpaymentValue) }} RUB
          </span>
        </div>
      </Transition>
    </div>

    <BaseButton @click="$emit('submitForm')"> Рассчитать ипотеку </BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { BaseButton, HistogramChart } from '@/components'
import { numberWithSpaces } from '@/utils'

export default defineComponent({
  name: 'AppResult',

  components: {
    HistogramChart,
    BaseButton,
  },

  props: {
    takeValue: {
      type: Number,
      required: true,
    },

    repayValue: {
      type: Number,
      required: true,
    },

    overpaymentValue: {
      type: Number,
      required: true,
    },
  },

  emits: ['submitForm'],

  setup() {
    return {
      numberWithSpaces,
    }
  },
})
</script>

<style scoped>
.result-block {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.info-block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-block__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.info-block__item__label {
  color: var(--black);
  font-size: 1.8rem;
}

.transition {
  --animate-duration: 1s;
}
</style>

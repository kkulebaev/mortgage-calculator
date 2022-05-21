<template>
  <div class="result-block">
    <the-histogram :take-value="takeValue" :repay-value="repayValue" />

    <div class="info-block">
      <div class="info-block__item">
        <span class="info-block__item__label"> Переплата по ипотеке: </span>
        <span class="info-block__item__label">
          {{ numberWithSpaces(overpaymentValue) }} RUB
        </span>
      </div>
      <div class="info-block__item">
        <span class="info-block__item__label"> Ежемесячный платеж: </span>
        <span class="info-block__item__label">
          {{ numberWithSpaces(monthlyPayment) }} RUB
        </span>
      </div>
      <div class="info-block__item">
        <span class="info-block__item__label"> Общая стоимость ипотеки: </span>
        <span class="info-block__item__label">
          {{ numberWithSpaces(totalCost) }} RUB
        </span>
      </div>
    </div>

    <base-button @click="$emit('submitForm')"> Рассчитать ипотеку </base-button>
  </div>
</template>

<script setup>
import numberWithSpaces from '/src/utils/numberWithSpaces.js'

import TheHistogram from '/src/components/the-histogram/TheHistogram.vue'
import BaseButton from '/src/components/base/BaseButton.vue'

defineProps({
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

  monthlyPayment: {
    type: Number,
    required: true,
  },

  totalCost: {
    type: Number,
    required: true,
  },
})

defineEmits(['submitForm'])
</script>

<style lang="scss" scoped>
.result-block {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.info-block {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__label {
      color: $black;
      font-size: 1.8rem;
    }
  }
}
</style>

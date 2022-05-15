<template>
  <form class="form" action="/">
    <div class="form__item">
      <span class="form__item__label">Сумма ипотеки</span>
      <base-input-number v-model="mortgageAmount" :step="100000" :min="0" />
    </div>
    <div class="form__item">
      <span class="form__item__label">Первоначальный взнос</span>
      <base-input-number v-model="initialPayment" :step="100000" :min="0" />
    </div>
    <div class="form__item">
      <span class="form__item__label">Срок ипотеки</span>
      <base-input-number v-model="mortgageTerm" :step="1" :min="0" />
    </div>
    <div class="form__item">
      <span class="form__item__label">Годовая ставка по ипотеке</span>
      <base-input-number v-model="mortgageRate" :step="0.1" :min="0" />
    </div>
    <div class="form__item">
      <span class="form__item__label">Тип платежей</span>
      <base-select v-model="paymentType" :options="selectOptions" />
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

import BaseInputNumber from '../base/BaseInputNumber.vue'
import BaseSelect from '../base/BaseSelect.vue'

const selectOptions = [
  { value: 'an', label: 'Аннуитетный' },
  { value: 'dif', label: 'Дифференцированный' },
]

const paymentType = ref(selectOptions[0])
const mortgageAmount = ref(50000)
const initialPayment = ref(20000)
const mortgageTerm = ref(10)
const mortgageRate = ref(6.5)
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

    &__label {
      color: $black;
      font-size: 1.8rem;
    }
  }
}
</style>

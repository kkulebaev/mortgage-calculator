<template>
  <form class="form" action="/">
    <div class="form__item">
      <span class="form__item__label">
        Сумма ипотеки
        <base-tooltip
          content="Сумма, которую вы хотите взять (с учетом первоначального взноса)"
        />
      </span>
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
      <span class="form__item__label">
        Тип платежей
        <base-tooltip
          content="Аннуитетный тип – размер ежемесячного платежа одинаковый.
        Дифференцированный тип – тело кредита одинаковое, а размер ежемесячного платежа постепенно уменьшается."
        />
      </span>
      <base-select v-model="paymentType" :options="selectOptions" />
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

import BaseInputNumber from '../base/BaseInputNumber.vue'
import BaseSelect from '../base/BaseSelect.vue'
import BaseTooltip from '../base/BaseTooltip.vue'

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
    width: calc(50% - 2rem);

    &__label {
      color: $black;
      font-size: 1.8rem;
      width: fit-content;
      cursor: default;
      position: relative;
    }
  }
}
</style>

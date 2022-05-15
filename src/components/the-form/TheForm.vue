<template>
  <form class="form" action="/">
    <div class="form__item">
      <span class="form__item__label">Сумма ипотеки</span>
      <base-input-number v-model="testVal" />
    </div>
    <div class="form__item">
      <span class="form__item__label">Первоначальный взнос</span>
      <base-input-number v-model="testVal" />
    </div>
    <div class="form__item">
      <span class="form__item__label">Срок ипотеки</span>
      <base-input-number v-model="testVal" />
    </div>
    <div class="form__item">
      <span class="form__item__label">Годовая ставка по ипотеке</span>
      <base-input-number v-model="testVal" />
    </div>
    <div class="form__item">
      <span class="form__item__label">Тип платежей</span>
      <base-select v-model="type" :options="selectOptions" />
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

import BaseSelect from '../base/BaseSelect.vue'
import BaseInputNumber from '../base/BaseInputNumber.vue'

const selectOptions = [
  { value: 'an', label: 'Аннуитетный' },
  { value: 'dif', label: 'Дифференцированный' },
]

const type = ref(selectOptions[0])
const testVal = ref(0)
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

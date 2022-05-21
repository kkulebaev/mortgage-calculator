<template>
  <form class="form" action="/">
    <div class="form__item">
      <span class="form__item__label">
        Сумма ипотеки
        <base-tooltip
          content="Сумма, которую вы хотите взять (с учетом первоначального взноса)"
        />
      </span>
      <el-input
        v-model="mortgageAmount"
        placeholder="50 000"
        :formatter="numberWithSpaces"
      >
        <template #append>руб</template>
      </el-input>
    </div>
    <div class="form__item">
      <span class="form__item__label">Первоначальный взнос</span>
      <el-input
        v-model="initialPayment"
        placeholder="20 000"
        :formatter="numberWithSpaces"
      >
        <template #append>руб</template>
      </el-input>
    </div>
    <div class="form__item">
      <span class="form__item__label">Срок ипотеки</span>
      <el-input v-model="mortgageTerm" placeholder="10">
        <template #append>
          <base-select
            v-model="select"
            :options="TEMP_OPTIONS"
            style="width: 70px"
          />
        </template>
      </el-input>
    </div>
    <div class="form__item">
      <span class="form__item__label">Годовая ставка по ипотеке</span>
      <el-input v-model="mortgageRate" placeholder="6.5">
        <template #append>%</template>
      </el-input>
    </div>
    <div class="form__item">
      <span class="form__item__label">
        Тип платежей
        <base-tooltip
          content="Аннуитетный тип – размер ежемесячного платежа одинаковый.
        Дифференцированный тип – тело кредита одинаковое, а размер ежемесячного платежа постепенно уменьшается."
        />
      </span>
      <base-select v-model="paymentType" :options="TYPE_MORTGAGE_OPTIONS" />
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

import {
  TYPE_MORTGAGE_OPTIONS,
  TEMP_OPTIONS,
} from '/src/components/the-form/form-helpers.js'

import numberWithSpaces from '/src/utils/numberWithSpaces.js'

import BaseSelect from '../base/BaseSelect.vue'
import BaseTooltip from '../base/BaseTooltip.vue'

const paymentType = ref(TYPE_MORTGAGE_OPTIONS[0])
const mortgageAmount = ref('')
const initialPayment = ref('')
const mortgageTerm = ref('')
const mortgageRate = ref('')
const select = ref('years')
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

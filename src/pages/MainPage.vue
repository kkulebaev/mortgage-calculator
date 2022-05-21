<template>
  <div class="main-page">
    <div class="main-page__data">
      <div class="title">
        <img
          class="title__logo"
          src="../assets/img/calculator.svg"
          alt="logo-calculator"
        />
        <h1 class="title__title">Калькулятор ипотеки</h1>
      </div>
      <the-form
        v-model:paymentType="paymentType"
        v-model:mortgageAmount="mortgageAmount"
        v-model:initialPayment="initialPayment"
        v-model:mortgageTerm="mortgageTerm"
        v-model:mortgagePeriod="mortgagePeriod"
        v-model:mortgageRate="mortgageRate"
      />
    </div>
    <the-result
      class="main-page__result"
      :take-value="takeValue"
      :repay-value="repayValue"
      @submit-form="submitForm"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import {
  TYPE_MORTGAGE_OPTIONS,
  PERIOD_OPTIONS,
} from '/src/components/the-form/form-helpers.js'

import TheForm from './../components/the-form/TheForm.vue'
import TheResult from '../components/the-result/TheResult.vue'

const mortgageAmount = ref(0)
const initialPayment = ref(0)
const mortgageTerm = ref(0)
const mortgagePeriod = ref(PERIOD_OPTIONS[0].value)
const mortgageRate = ref(0)
const paymentType = ref(TYPE_MORTGAGE_OPTIONS[0].value)

const takeValue = ref(0)
const repayValue = ref(0)

const submitForm = () => {
  takeValue.value = mortgageAmount.value
  repayValue.value = mortgageAmount.value
}
</script>

<style lang="scss">
.main-page {
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 2rem;
  gap: 4rem;

  &__data {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    flex: 2;
  }

  &__result {
    flex: 1;
  }
}

.title {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.title__logo {
  display: block;
  padding: 1rem;
  width: 48px;

  background-color: $primary;
  border-radius: 9px;
}

.title__title {
  font-size: 3.6rem;
  line-height: 1.15;
  font-weight: 700;
  color: $black;
}
</style>

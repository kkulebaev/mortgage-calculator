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
        v-model:paymentType="inputValues.paymentType"
        v-model:mortgageAmount="inputValues.mortgageAmount"
        v-model:initialPayment="inputValues.initialPayment"
        v-model:mortgageTerm="inputValues.mortgageTerm"
        v-model:mortgagePeriod="inputValues.mortgagePeriod"
        v-model:mortgageRate="inputValues.mortgageRate"
      />
    </div>
    <the-result
      class="main-page__result"
      :take-value="outputValues.takeValue"
      :repay-value="outputValues.repayValue"
      :overpayment-value="outputValues.overpaymentValue"
      :monthly-payment="outputValues.monthlyPayment"
      :total-cost="outputValues.totalCost"
      @submit-form="submitForm"
    />
  </div>
</template>

<script setup>
import { reactive, onMounted, onBeforeUnmount } from 'vue'

import {
  TYPE_MORTGAGE_OPTIONS,
  PERIOD_OPTIONS,
} from '/src/components/the-form/form-helpers.js'

import TheForm from './../components/the-form/TheForm.vue'
import TheResult from '../components/the-result/TheResult.vue'

const inputValues = reactive({
  mortgageAmount: 50000,
  initialPayment: 10000,
  mortgageTerm: 1,
  mortgagePeriod: PERIOD_OPTIONS[0].value,
  mortgageRate: 6.5,
  paymentType: TYPE_MORTGAGE_OPTIONS[0].value,
})

const outputValues = reactive({
  takeValue: 0,
  repayValue: 0,
  overpaymentValue: 0,
  monthlyPayment: 0,
  totalCost: 0,
})

const submitForm = () => {
  outputValues.takeValue = inputValues.mortgageAmount
  outputValues.repayValue = inputValues.mortgageAmount
  outputValues.overpaymentValue = inputValues.mortgageAmount
  outputValues.monthlyPayment = inputValues.mortgageAmount
  outputValues.totalCost = inputValues.mortgageAmount
}

function handleEnterPress(event) {
  if (event.key === 'Enter') {
    submitForm()
  }
}

onMounted(() => {
  document.addEventListener('keypress', handleEnterPress)
})

onBeforeUnmount(() => {
  document.removeEventListener('keypress', handleEnterPress)
})
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

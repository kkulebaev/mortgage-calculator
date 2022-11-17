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
      <AppForm
        v-model:paymentType="inputValues.type"
        v-model:mortgageAmount="inputValues.amount"
        v-model:mortgageTerm="inputValues.term"
        v-model:mortgagePeriod="inputValues.period"
        v-model:mortgageRate="inputValues.rate"
        @change="clearOutput"
      />
      <img
        class="intro-picture"
        src="./../assets/img/owl.png"
        width="957"
        height="1060"
        alt="owl"
      />
      <SocialNetworks class="network-icons" />
    </div>
    <AppResult
      class="main-page__result"
      :take-value="outputValues.takeValue"
      :repay-value="outputValues.repayValue"
      :overpayment-value="outputValues.overpaymentValue"
      @submit-form="calcMortgage(inputValues)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { onKeyStroke } from '@vueuse/core'
import { storeToRefs } from 'pinia'

import { AppForm, AppResult, SocialNetworks } from '@/components'
import { useMainStore, DEFAULT_INPUT } from '@/store'

export default defineComponent({
  name: 'MainPage',

  components: {
    AppForm,
    AppResult,
    SocialNetworks,
  },

  setup() {
    const mainStore = useMainStore()
    const { outputValues } = storeToRefs(mainStore)
    const { calcMortgage, clearOutput } = mainStore

    const inputValues = ref(DEFAULT_INPUT())

    onKeyStroke('Enter', () => calcMortgage(inputValues.value))

    return {
      inputValues,
      outputValues,
      calcMortgage,
      clearOutput,
    }
  },
})
</script>

<style lang="scss">
.main-page {
  display: flex;
  justify-content: space-between;
  height: 100%;
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

  &__logo {
    display: block;
    padding: 1rem;
    width: 48px;

    background-color: $primary;
    border-radius: 9px;
  }

  &__title {
    font-size: 3.6rem;
    font-weight: 700;
    color: $black;
  }
}

.intro-picture {
  max-width: 25rem;
  margin-left: auto;
}

.network-icons {
  margin-top: auto;
}
</style>

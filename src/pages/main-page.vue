<template>
  <div class="main-page">
    <div class="main-page__data">
      <div class="title">
        <FontAwesomeIcon
          class="title__logo"
          :icon="['fas', 'calculator']"
          size="4x"
        />
        <PageTitle title="Калькулятор ипотеки" />
        <ColorSchemeSwitcher />
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
      <SocialNetworks />
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

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  AppForm,
  AppResult,
  SocialNetworks,
  PageTitle,
  ColorSchemeSwitcher,
} from '@/components'
import { useMainStore, DEFAULT_INPUT } from '@/store'

export default defineComponent({
  name: 'MainPage',

  components: {
    AppForm,
    AppResult,
    SocialNetworks,
    PageTitle,
    ColorSchemeSwitcher,
    FontAwesomeIcon,
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

<style>
.main-page {
  display: flex;
  justify-content: space-between;
  height: 100%;
  gap: 4rem;
}

.main-page__data {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex: 2;
}

.main-page__result {
  flex: 1;
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
  background-color: var(--primary);
  color: var(--white);
  border-radius: 9px;
}

.intro-picture {
  max-width: 25rem;
  margin-left: auto;
}

.social-networks {
  margin-top: auto;
}
</style>

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
      <TheForm
        v-model:paymentType="inputValues.paymentType"
        v-model:mortgageAmount="inputValues.mortgageAmount"
        v-model:initialPayment="inputValues.initialPayment"
        v-model:mortgageTerm="inputValues.mortgageTerm"
        v-model:mortgagePeriod="inputValues.mortgagePeriod"
        v-model:mortgageRate="inputValues.mortgageRate"
        @change="clearOutput"
      />
      <img
        class="intro-picture"
        src="./../assets/img/owl.png"
        width="957"
        height="1060"
        alt="owl"
      />
    </div>
    <TheResult
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

<script>
import { reactive, onMounted, onBeforeUnmount } from 'vue'

import { useData } from '../composables/useData'

import { TheForm, TheResult } from '/src/components'

export default {
  components: {
    TheForm,
    TheResult,
  },

  setup() {
    const { inputValues } = useData()

    const outputValues = reactive({
      takeValue: 0,
      repayValue: 0,
      overpaymentValue: 0,
      monthlyPayment: 0,
      totalCost: 0,
    })

    const submitForm = () => {
      const {
        mortgageAmount,
        initialPayment,
        mortgageTerm,
        mortgagePeriod,
        mortgageRate,
      } = inputValues.value

      outputValues.takeValue = inputValues.value.mortgageAmount

      // estMortgageBody - расчетное значение начального тела кредита.
      const estMortgageBody = mortgageAmount - initialPayment

      // estMortgageTerm - расчетное значение срока ипотеки выраженное в месяцах. Если пользователь выбрал ввод количества лет, то приводим значение к количеству месяцев
      const estMortgageTerm =
        mortgagePeriod === 'years' ? mortgageTerm * 12 : mortgageTerm

      // estMortgageRate - расчетное значение месячной процентной ставки
      const estMortgageRate = mortgageRate / 100 / 12

      // Ежемесячный платеж по аннуитетному типу равен:
      outputValues.monthlyPayment =
        estMortgageBody *
        (estMortgageRate /
          (1 - Math.pow(1 + estMortgageRate, -estMortgageTerm)))

      // Переплата по ипотеке по аннуитетному типу равна:
      outputValues.overpaymentValue =
        outputValues.monthlyPayment * estMortgageTerm - estMortgageBody

      outputValues.repayValue = outputValues.overpaymentValue + mortgageAmount

      outputValues.totalCost = outputValues.repayValue
    }

    const clearOutput = () => {
      for (const prop of Object.getOwnPropertyNames(outputValues)) {
        delete outputValues[prop]
      }
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

    return {
      inputValues,
      outputValues,
      clearOutput,
      submitForm,
    }
  },
}
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
</style>

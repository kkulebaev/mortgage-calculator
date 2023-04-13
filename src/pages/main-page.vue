<template>
  <div class="main-page">
    <div class="main-page__data">
      <header class="header">
        <FontAwesomeIcon
          class="app-logo"
          :icon="['fas', 'calculator']"
          :size="isMobile ? '3x' : '4x'"
        />
        <PageTitle :title="t('app-title')" />
        <ColorSchemeSwitcher v-if="!isMobile" class="header__switcher" />
      </header>
      <AppForm
        v-model:amount="inputValues.amount"
        v-model:term="inputValues.term"
        v-model:period="inputValues.period"
        v-model:rate="inputValues.rate"
        v-model:paymentType="inputValues.type"
        @change="clearOutput"
      />
      <img
        v-if="isDesktop"
        class="intro-picture"
        src="./../assets/img/owl.png"
        width="957"
        height="1060"
        :alt="t('owl')"
      />
      <SocialNetworks v-if="isDesktop" />
    </div>
    <AppResult
      :take-value="outputValues.takeValue"
      :repay-value="outputValues.repayValue"
      :overpayment-value="outputValues.overpaymentValue"
      @submit-form="onCalcHandler(inputValues)"
    />
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onKeyStroke } from '@vueuse/core'
import { ElNotification } from 'element-plus'
import { storeToRefs } from 'pinia'
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import {
  AppForm,
  AppResult,
  ColorSchemeSwitcher,
  PageTitle,
  SocialNetworks,
} from '@/components'
import { useBreakpoints } from '@/composables'
import type { Input } from '@/helpers'
import { DEFAULT_INPUT } from '@/helpers'
import { useMainStore } from '@/store'

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
    type ErrorTuple = [true] | [false, string]

    const { t } = useI18n()

    const mainStore = useMainStore()
    const { outputValues } = storeToRefs(mainStore)
    const { calcMortgage, clearOutput } = mainStore

    const inputValues = ref(DEFAULT_INPUT())

    onKeyStroke('Enter', () => onCalcHandler(inputValues.value))

    const onCalcHandler = (inputValues: Input): void => {
      const [isValid, error] = isValidForm(inputValues)
      if (!isValid) {
        ElNotification.error(error)
        return
      }

      calcMortgage(inputValues)
    }

    const isValidForm = (inputValues: Input): ErrorTuple => {
      if (inputValues.amount <= 0)
        return [false, 'Введите корректное значение в поле "Сумма ипотеки"']
      if (inputValues.term <= 0)
        return [false, 'Введите корректное значение в поле "Срок ипотеки"']
      if (inputValues.rate <= 0)
        return [
          false,
          'Введите корректное значение в поле "Годовая процентная ставка"',
        ]

      return [true]
    }

    const { isDesktop, isMobile } = useBreakpoints()

    return {
      inputValues,
      outputValues,
      onCalcHandler,
      clearOutput,

      isDesktop,
      isMobile,
      t,
    }
  },
})
</script>

<style lang="postcss" scoped>
@import url('@/assets/styles/vars.css');

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

.result-block {
  flex: 1;
}

.header {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.app-logo {
  display: block;
  padding: 1rem;

  /* width: 48px; */
  background-color: var(--primary);
  color: var(--white);
  border-radius: 9px;
}

.intro-picture {
  max-width: 25rem;
  margin-left: auto;
  margin-top: auto;
}

.social-networks {
  margin-top: auto;
}

@media (--mobile-tablet) {
  .main-page {
    flex-direction: column;
    gap: 1rem;
  }

  .main-page__data {
    flex: 1;
  }

  .header__switcher.switcher {
    margin-left: auto;
  }
}

@media (--mobile) {
  .header {
    gap: 1rem;
  }
}
</style>

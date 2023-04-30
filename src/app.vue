<template>
  <div class="mortgage-calculator">
    <div class="app-wrapper">
      <AppNav class="app__nav" />
      <div class="container">
        <MobileHeader v-if="isMobile" />
        <RouterView v-slot="{ Component }">
          <Transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in"
          >
            <Component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useTitle } from '@vueuse/core'
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import { AppNav, MobileHeader } from '@/components'
import { useBreakpoints } from '@/composables'
import { LANG } from '@/plugins/i18n'

export default defineComponent({
  name: 'App',

  components: {
    AppNav,
    MobileHeader,
  },

  setup() {
    const { isMobile } = useBreakpoints()

    const { locale } = useI18n()

    const TITLE_EN = 'Mortgage calculator'
    const TITLE_RU = 'Калькулятор ипотеки'
    const titleText = computed(() =>
      locale.value === LANG.ru ? TITLE_RU : TITLE_EN
    )
    useTitle(titleText)

    return {
      isMobile,
    }
  },
})
</script>

<style lang="postcss" scoped>
@import url('./assets/styles/vars.css');

.mortgage-calculator {
  --animate-duration: 200ms;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.app-wrapper {
  display: flex;
  width: 100%;
  max-width: 152rem;
  min-height: 80rem;
  margin: auto;
  box-shadow: 0 0 2rem rgba(0 0 0 / 15%);
  overflow: hidden;
}

.container {
  width: 100%;
  padding: 4rem;
  margin: 0 auto;
}

@media (--mobile-tablet) {
  .app-wrapper {
    height: 100%;
  }
}

@media (--mobile) {
  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }

  .nav.app__nav {
    display: none;
  }
}
</style>

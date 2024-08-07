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
import { useBreakpoints, useColorScheme } from '@/composables'

export default defineComponent({
  name: 'App',

  components: {
    AppNav,
    MobileHeader,
  },

  setup() {
    useColorScheme()
    const { isMobile } = useBreakpoints()

    const { t } = useI18n()

    const title = computed(() => t('app-title', 'Mortgage calculator'))
    useTitle(title)

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
  height: 100%;
  max-height: 80rem;
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

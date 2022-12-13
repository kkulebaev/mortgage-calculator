<template>
  <div class="mortgage-calculator">
    <div class="app-wrapper">
      <AppNav class="app__nav" />
      <div class="container">
        <MobileHeader v-if="isMobile" />
        <RouterView v-slot="{ Component }">
          <Transition
            class="transition"
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
import { defineComponent } from 'vue'

import { AppNav, MobileHeader } from '@/components'
import { useBreakpoints } from '@/composables'

export default defineComponent({
  name: 'App',

  components: {
    AppNav,
    MobileHeader,
  },

  setup() {
    const { isMobile } = useBreakpoints()

    return {
      isMobile,
    }
  },
})
</script>

<style lang="postcss" scoped>
@import './assets/styles/vars.css';

.mortgage-calculator {
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

.transition {
  --animate-duration: 0.2s;
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

<template>
  <div class="app">
    <div class="app-wrapper">
      <AppNav />

      <div class="container">
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
import { AppNav } from '@/components'

export default defineComponent({
  name: 'App',

  components: {
    AppNav,
  },
})
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.app-wrapper {
  display: flex;
  width: 100%;
  max-width: 152rem;
  min-height: 72rem;
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
</style>

<template>
  <div class="burger-menu">
    <component
      :is="icon"
      class="burger"
      :size="32"
      @click="isShowMenu = !isShowMenu"
    />
    <AppNav
      class="mobile-menu"
      :class="{ open: isShowMenu }"
      @click="isShowMenu = false"
    />
  </div>
</template>

<script lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { computed, defineComponent, ref } from 'vue'

import AppNav from './app-nav.vue'

export default defineComponent({
  name: 'BurgerMenu',

  components: {
    AppNav,
  },

  setup() {
    const isShowMenu = ref(false)

    const icon = computed(() => (isShowMenu.value ? X : Menu))

    return {
      isShowMenu,
      icon,
    }
  },
})
</script>

<style lang="postcss" scoped>
.burger-menu {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
}

.burger {
  padding: 1.5rem;
  cursor: pointer;
  color: var(--primary);
  transition: color 0.2s ease-in-out;
}

.burger:hover {
  color: var(--secondary);
}

.mobile-menu {
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 100%);
  width: auto;
  background: var(--white);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
}

.mobile-menu.open {
  max-height: 20rem;
}
</style>

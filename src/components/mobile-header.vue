<template>
  <div class="mobile-header">
    <SocialNetworks />
    <ColorSchemeSwitcher />
    <BurgerMenu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import BurgerMenu from './burger-menu.vue'
import ColorSchemeSwitcher from './color-scheme-switcher.vue'
import SocialNetworks from './social-networks.vue'

export default defineComponent({
  name: 'MobileHeader',

  components: {
    BurgerMenu,
    SocialNetworks,
    ColorSchemeSwitcher,
  },
})
</script>

<style lang="postcss" scoped>
.mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

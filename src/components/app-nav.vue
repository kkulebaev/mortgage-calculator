<template>
  <nav class="nav">
    <RouterLink
      v-for="item in NAV_ITEMS"
      :key="item.id"
      class="nav__link"
      :to="item.to"
    >
      <FontAwesomeIcon class="nav__icon" :icon="item.icon" size="3x" />
    </RouterLink>
  </nav>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { defineComponent } from 'vue'

import { NAV_ITEMS } from '@/helpers'

export default defineComponent({
  name: 'AppNav',

  components: {
    FontAwesomeIcon,
  },

  setup() {
    return {
      NAV_ITEMS,
    }
  },
})
</script>

<style lang="postcss" scoped>
.nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 6rem;
  background: var(--bg-primary);
}

.nav__link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.nav__icon {
  color: var(--black);
  transition: all 0.2s ease-in-out;
}

.router-link-active > .nav__icon {
  color: var(--secondary);
}

.nav__link:hover > .nav__icon {
  color: var(--secondary);
}

.router-link-active {
  background: var(--white);
}
</style>

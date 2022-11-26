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
import { defineComponent } from 'vue'
import { NAV_ITEMS } from '@/helpers'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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

<style scoped>
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
  width: 6rem;
  height: 6rem;
}

.nav__icon {
  color: var(--black);
}

.router-link-active {
  background: var(--white);
}
</style>

<template>
  <nav class="nav">
    <RouterLink
      v-for="item in NAV_ITEMS"
      :key="item.id"
      class="nav__link"
      :to="item.to"
    >
      <img class="nav__icon" :src="item.icon" :alt="`${item.id}-icon`" />
    </RouterLink>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NAV_ITEMS } from '@/helpers'

export default defineComponent({
  name: 'AppNav',

  setup() {
    return {
      NAV_ITEMS,
    }
  },
})
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 6rem;
  background: #fafafa;
}

.nav__link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
}

.nav__icon {
  width: 3.2rem;
}

.router-link-active {
  background: $white;
}
</style>

<template>
  <div class="social-networks">
    <a
      v-for="item in SOCIAL_NETWORKS"
      :key="item.id"
      class="social-networks__item"
      :href="item.link"
      target="_blank"
    >
      <BaseSimpleIcon
        :path="item.icon"
        :size="32"
      />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { SOCIAL_NETWORKS } from '@/helpers'

import BaseSimpleIcon from './base/base-simple-icon.vue'

export default defineComponent({
  name: 'SocialNetworks',

  components: {
    BaseSimpleIcon,
  },

  setup() {
    return {
      SOCIAL_NETWORKS,
    }
  },
})
</script>

<style lang="postcss" scoped>
.social-networks {
  display: flex;
  gap: 1rem;
}

.social-networks__item {
  color: var(--primary);
  transition: color 0.2s ease-in-out;
}

.social-networks__item:hover {
  color: var(--additional);
}
</style>

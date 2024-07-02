<template>
  <div class="social-networks">
    <a
      v-for="item in SOCIAL_NETWORKS"
      :key="item.id"
      class="social-networks__item"
      :href="item.link"
      target="_blank"
    >
      <FontAwesomeIcon
        :icon="item.icon"
        size="3x"
      />
    </a>
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { defineComponent } from 'vue'

import { SOCIAL_NETWORKS } from '@/helpers'

export default defineComponent({
  name: 'SocialNetworks',

  components: {
    FontAwesomeIcon,
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

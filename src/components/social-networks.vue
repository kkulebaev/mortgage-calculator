<template>
  <div class="social-networks">
    <a
      v-for="item in SOCIAL_NETWORKS"
      :key="item.icon"
      class="social-networks__item"
      :href="item.link"
      target="_blank"
    >
      <BaseIcon :icon="item.icon" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BaseIcon } from '@/components'
import { SOCIAL_NETWORKS } from '@/helpers'

export default defineComponent({
  name: 'SocialNetworks',

  components: {
    BaseIcon,
  },

  setup() {
    return {
      SOCIAL_NETWORKS,
    }
  },
})
</script>

<style lang="scss" scoped>
.social-networks {
  display: flex;
  gap: 1rem;
}

.social-networks__item {
  width: 32px;
}
</style>

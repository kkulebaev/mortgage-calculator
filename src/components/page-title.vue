<template>
  <h1 class="page-title">{{ title }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageTitle',

  props: {
    title: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      default: null,
    },
  },
})
</script>

<style lang="postcss" scoped>
.page-title {
  font-size: 3.6rem;
  font-weight: 700;
  color: var(--black);
}
</style>

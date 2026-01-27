<template>
  <span
    class="simple-icon"
    v-html="svg"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseSimpleIcon',

  props: {
    path: {
      type: String,
      required: true,
    },

    size: {
      type: Number,
      default: 24,
    },

    color: {
      type: String,
      default: 'currentColor',
    },
  },

  setup(props) {
    const svg = computed(() => {
      return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}"><path d="${props.path}"/></svg>`
    })

    return {
      svg,
    }
  },
})
</script>

<style lang="postcss" scoped>
.simple-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.simple-icon :deep(svg) {
  display: block;
}
</style>

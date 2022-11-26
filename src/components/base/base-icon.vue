<template>
  <i
    :class="{ clickable }"
    :style="{ width: `${size}px` }"
    @click="$emit('click')"
    v-html="currentIcon"
  ></i>
</template>

<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'BaseIcon',

  props: {
    icon: {
      type: String,
      required: true,
      validator(val: string) {
        const ICONS_DIR = '../../assets/img/icons/'
        const ICONS_FORMAT = '.svg'

        const dirObj = import.meta.glob('../../assets/img/icons/*.svg')
        const iconNames = Object.keys(dirObj).map(
          x => x.split(ICONS_DIR)[1].split(ICONS_FORMAT)[0]
        )
        return iconNames.includes(val)
      },
    },

    size: {
      type: [String, Number],
      default: '16',
    },

    clickable: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['click'],

  setup(props) {
    const currentIcon = ref('')

    import(`../../assets/img/icons/${props.icon}.svg?raw`).then(val => {
      currentIcon.value = val.default
    })

    return {
      currentIcon,
    }
  },
})
</script>

<style scoped>
.clickable {
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
}
</style>

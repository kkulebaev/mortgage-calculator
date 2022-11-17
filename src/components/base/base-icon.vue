<template>
  <i :style="{ width: `${size}px` }" v-html="currentIcon"></i>
</template>

<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script lang="ts">
import { defineComponent, ref } from 'vue'

import GitHub from '@/assets/img/icons/github.svg'
import Twitter from '@/assets/img/icons/twitter.svg'
import Telegram from '@/assets/img/icons/telegram.svg'

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
  },

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

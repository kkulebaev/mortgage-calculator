<template>
  <ElSelect v-model="value" @change="$emit('change')">
    <ElOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </ElSelect>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import { ElSelect, ElOption } from 'element-plus'
import { useVModel } from '@vueuse/core'

interface Option {
  value: string
  label: string
}

export default defineComponent({
  name: 'BaseSelect',

  components: {
    ElSelect,
    ElOption,
  },

  props: {
    modelValue: {
      type: [String, Number, Boolean, Object],
      required: true,
    },

    options: {
      type: Array as PropType<Readonly<Option[]>>,
      required: true,
    },
  },

  emits: ['update:modelValue', 'change'],

  setup(props, { emit }) {
    const value = useVModel(props, 'modelValue', emit)

    return { value }
  },
})
</script>

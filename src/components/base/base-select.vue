<template>
  <ElSelect
    v-model="value"
    @change="$emit('change')"
  >
    <ElOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </ElSelect>
</template>

<script lang="ts">
import { useVModel } from '@vueuse/core'
import { ElOption, ElSelect } from 'element-plus'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export interface Option {
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
      type: Array as PropType<Option[]>,
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

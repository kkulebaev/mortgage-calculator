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

<script>
import { computed } from 'vue'
import { ElSelect, ElOption } from 'element-plus'

export default {
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
      type: Array,
      default: () => [],
    },
  },

  emits: ['update:modelValue', 'change'],

  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.modelValue
      },

      set(val) {
        return emit('update:modelValue', val)
      },
    })

    return { value }
  },
}
</script>

<style lang="scss" scoped></style>

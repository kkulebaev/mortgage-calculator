<template>
  <el-select v-model="value">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script setup>
import { computed } from '@vue/reactivity'

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean, Object],
    required: true,
  },

  options: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },

  set(val) {
    return emit('update:modelValue', val)
  },
})
</script>

<style lang="scss" scoped></style>

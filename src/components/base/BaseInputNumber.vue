<template>
  <el-input-number
    class="base-input-number"
    v-model="value"
    :step="step"
    :max="max"
    :min="min"
    :controls="false"
  />
</template>

<script setup>
import { computed } from '@vue/reactivity'

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },

  step: {
    type: Number,
    default: 1,
  },

  max: {
    type: Number,
    default: Infinity,
  },

  min: {
    type: Number,
    default: -Infinity,
  },
})

const emit = defineEmits({
  'update:modelValue': val => typeof val === 'number',
})

const value = computed({
  get() {
    return props.modelValue
  },

  set(val) {
    return emit('update:modelValue', val)
  },
})
</script>

<style lang="scss" scoped>
.base-input-number {
  width: 100%;
}
</style>

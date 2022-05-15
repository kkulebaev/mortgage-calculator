<template>
  <el-input-number
    class="base-input-number"
    v-model="value"
    :min="minVal"
    :max="maxVal"
  />
</template>

<script setup>
import { computed } from '@vue/reactivity'

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },

  minVal: {
    type: Number,
    default: null,
  },

  maxVal: {
    type: Number,
    default: null,
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

<style lang="scss" scoped>
.base-input-number {
  width: 100%;
}
</style>

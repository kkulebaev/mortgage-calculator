<template>
  <ElPagination
    v-model:currentPage="curValue"
    class="pagination"
    layout="prev, pager, next"
    :total="total"
    :page-size="size"
    background
    hide-on-single-page
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElPagination } from 'element-plus'
import { useVModel } from '@vueuse/core'

export default defineComponent({
  name: 'BasePagination',

  components: {
    ElPagination,
  },

  props: {
    modelValue: {
      type: Number,
      default: null,
    },

    total: {
      type: Number,
      default: null,
    },

    size: {
      type: Number,
      default: null,
    },
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const curValue = useVModel(props, 'modelValue', emit)

    return {
      curValue,
    }
  },
})
</script>

<template>
  <ElPagination
    v-model:currentPage="curValue"
    class="pagination"
    layout="prev, pager, next"
    :total="total"
    :page-size="size"
    :background="true"
    :hide-on-single-page="true"
  />
</template>

<script lang="ts">
import { useVModel } from '@vueuse/core'
import { ElPagination } from 'element-plus'
import { defineComponent } from 'vue'

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

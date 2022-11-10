<template>
  <ElTable :data="data">
    <ElTableColumn
      v-for="field in fields"
      :key="field.prop"
      :prop="field.prop"
      :label="field.label"
      :width="field.width"
      :align="field.align"
    />
  </ElTable>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import { ElTable, ElTableColumn } from 'element-plus'

interface TableColumn {
  prop: string
  label: string
  width?: number
  align?: string
}

export default defineComponent({
  name: 'BaseTable',

  components: {
    ElTable,
    ElTableColumn,
  },

  props: {
    data: {
      type: Array,
      required: true,
    },

    fields: {
      type: Array as PropType<Readonly<TableColumn[]>>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>

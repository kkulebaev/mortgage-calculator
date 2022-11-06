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

<script>
import { ElTable, ElTableColumn } from 'element-plus'

export default {
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
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>

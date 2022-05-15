<template>
  <el-table :data="data">
    <el-table-column
      v-for="field in fields"
      :prop="field.prop"
      :label="field.label"
      :width="field.width"
      :align="field.align"
    />
  </el-table>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: true,
  },

  fields: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>

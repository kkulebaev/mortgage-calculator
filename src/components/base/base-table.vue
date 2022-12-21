<template>
  <ElTable class="base-table" :data="data" empty-text="Нет данных">
    <ElTableColumn
      v-for="field in fields"
      :key="field.prop"
      :prop="field.prop"
      :formatter="getFormatter(field.type)"
      :label="field.label"
      :width="field.width"
      :align="field.align"
    />
  </ElTable>
</template>

<script lang="ts">
import { ElTable, ElTableColumn } from 'element-plus'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

import { CellType } from '@/helpers'
import { numberWithSpaces } from '@/utils'

interface TableColumn {
  prop: string
  label: string
  type: CellType
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

  setup() {
    const numberWithSpacesFormatter = (row: any, col: any, cellValue: any) =>
      numberWithSpaces(cellValue)

    function getFormatter(cellType: string): any {
      if (cellType === CellType.number) {
        return numberWithSpacesFormatter
      }

      return undefined
    }

    return {
      getFormatter,
    }
  },
})
</script>

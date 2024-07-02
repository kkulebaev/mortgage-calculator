<template>
  <div class="detail-info">
    <header class="header">
      <PageTitle :title="$t('mortgage-payment-schedule')" />
      <DetailDescription :input-values="inputValues" />
    </header>
    <template v-if="paginatedData.length">
      <BaseTable
        :data="paginatedData"
        :fields="DETAIL_FIELDS"
      />
      <BasePagination
        v-model="pageNumber"
        :total="total"
        :page-size="size"
      />
    </template>
    <ElEmpty
      v-else
      class="detail-info__empty"
      :description="$t('empty-description')"
    />
  </div>
</template>

<script lang="ts">
import { ElEmpty } from 'element-plus'
import { storeToRefs } from 'pinia'
import { defineComponent, ref, toRef } from 'vue'

import { BasePagination, BaseTable, DetailDescription, PageTitle } from '@/components'
import { usePagination } from '@/composables'
import { DETAIL_FIELDS } from '@/helpers'
import { useMainStore } from '@/store'

export default defineComponent({
  name: 'DetailPage',

  components: {
    BaseTable,
    BasePagination,
    DetailDescription,
    PageTitle,
    ElEmpty,
  },

  setup() {
    const mainStore = useMainStore()
    const { inputValues, outputValues } = storeToRefs(mainStore)
    const paymentTable = toRef(outputValues.value, 'paymentTable')

    const pageNumber = ref(1)
    const size = ref(12)
    const total = ref(paymentTable.value.length)

    const { paginatedData } = usePagination(paymentTable, pageNumber, size)

    return {
      inputValues,
      DETAIL_FIELDS,
      paginatedData,
      pageNumber,
      total,
      size,
    }
  },
})
</script>

<style lang="postcss" scoped>
@import url('@/assets/styles/vars.css');

.detail-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
}

.detail-info__empty {
  margin: auto;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.description {
  text-align: right;
}

.pagination {
  margin-top: auto;
  justify-content: end;
}

@media (--mobile) {
  .header {
    gap: 1rem;
    flex-direction: column;
    align-items: stretch;
  }

  .base-table {
    font-size: inherit;
  }

  .description {
    text-align: justify;
  }
}
</style>

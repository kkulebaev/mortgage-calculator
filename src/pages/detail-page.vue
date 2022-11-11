<template>
  <div class="detail-info">
    <div class="title">
      <h1 class="title__title">График платежей</h1>
      <div class="title__desc">
        <span>
          Сумма ипотеки: {{ numberWithSpaces(inputValues.mortgageAmount) }} RUB
        </span>
        <span>
          Первоначальный взнос:
          {{ numberWithSpaces(inputValues.initialPayment) }} RUB
        </span>
        <span>
          Срок ипотеки: {{ inputValues.mortgageTerm }}
          {{ PERIOD_LABEL[inputValues.mortgagePeriod] }}
        </span>
        <span>
          Годовая процентная ставка: {{ inputValues.mortgageRate }} %
        </span>
        <span>
          Тип платежей: {{ MORTGAGE_TYPE_LABEL[inputValues.paymentType] }}
        </span>
      </div>
    </div>
    <BaseTable :data="paginatedData" :fields="DETAIL_FIELDS" />
    <ElPagination
      v-model:currentPage="pageNumber"
      class="pagination"
      layout="prev, pager, next"
      :total="total"
      :page-size="size"
      background
      hide-on-single-page
    />
  </div>
</template>

<script lang="ts">
import { ElPagination } from 'element-plus'
import { storeToRefs } from 'pinia'
import { defineComponent, ref, toRef } from 'vue'

import { BaseTable } from '@/components'
import { usePagination } from '@/composables'
import { DETAIL_FIELDS,MORTGAGE_TYPE_LABEL, PERIOD_LABEL } from '@/helpers'
import { useMainStore } from '@/store'
import { numberWithSpaces } from '@/utils'

export default defineComponent({
  name: 'DetailPage',

  components: {
    BaseTable,
    ElPagination,
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
      MORTGAGE_TYPE_LABEL,
      PERIOD_LABEL,
      DETAIL_FIELDS,
      paginatedData,
      pageNumber,
      total,
      size,
      numberWithSpaces,
    }
  },
})
</script>

<style lang="scss" scoped>
.detail-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
}

.title {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  &__title {
    font-size: 3.6rem;
    font-weight: 700;
    color: $black;
  }

  &__desc {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0.5rem;
    font-size: 1.4rem;
    color: #909399;
  }
}

.pagination {
  margin-top: auto;
  justify-content: end;
}
</style>

<template>
  <div class="detail-info">
    <div class="title">
      <h1 class="title__title">График платежей</h1>
      <div class="title__desc">
        <span>
          Сумма ипотеки: {{ numberWithSpaces(inputValues.amount) }} RUB
        </span>
        <span>
          Срок ипотеки: {{ inputValues.term }}
          {{ PERIOD_LABEL[inputValues.period] }}
        </span>
        <span> Годовая процентная ставка: {{ inputValues.rate }} % </span>
        <span> Тип платежей: {{ MORTGAGE_TYPE_LABEL[inputValues.type] }} </span>
      </div>
    </div>
    <BaseTable :data="paginatedData" :fields="DETAIL_FIELDS" />
    <BasePagination v-model="pageNumber" :total="total" :page-size="size" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, toRef } from 'vue'
import { storeToRefs } from 'pinia'

import { useMainStore } from '@/store'
import { MORTGAGE_TYPE_LABEL, PERIOD_LABEL, DETAIL_FIELDS } from '@/helpers'
import { usePagination } from '@/composables'
import { numberWithSpaces } from '@/utils'

import { BaseTable, BasePagination } from '@/components'

export default defineComponent({
  name: 'DetailPage',

  components: {
    BaseTable,
    BasePagination,
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
    flex-flow: row wrap;
    flex-direction: column;
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

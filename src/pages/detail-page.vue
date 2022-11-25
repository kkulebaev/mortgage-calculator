<template>
  <div class="detail-info">
    <div class="title">
      <PageTitle title="График платежей" />
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
    <template v-if="paginatedData.length">
      <BaseTable :data="paginatedData" :fields="DETAIL_FIELDS" />
      <BasePagination v-model="pageNumber" :total="total" :page-size="size" />
    </template>
    <ElEmpty v-else description="Нет данных" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, toRef } from 'vue'
import { storeToRefs } from 'pinia'

import { useMainStore } from '@/store'
import { MORTGAGE_TYPE_LABEL, PERIOD_LABEL, DETAIL_FIELDS } from '@/helpers'
import { usePagination } from '@/composables'
import { numberWithSpaces } from '@/utils'

import { BaseTable, BasePagination, PageTitle } from '@/components'
import { ElEmpty } from 'element-plus'

export default defineComponent({
  name: 'DetailPage',

  components: {
    BaseTable,
    BasePagination,
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
}

.title__desc {
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.4rem;
  color: $dark-gray;
}

.pagination {
  margin-top: auto;
  justify-content: end;
}
</style>

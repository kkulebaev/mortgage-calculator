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
          Срок ипотеки: {{ inputValues.mortgageTerm }} {{ labelOfTypePeriod }}
        </span>
        <span>
          Годовая процентная ставка: {{ inputValues.mortgageRate }} %
        </span>
        <span> Тип платежей: {{ labelOfTypeMortgage }} </span>
      </div>
    </div>
    <BaseTable :data="paginatedData" :fields="DETAIL_FIELDS" />
    <ElPagination
      v-model:currentPage="pageNumber"
      class="pagination"
      layout="prev, pager, next"
      :total="tableData.length"
      :page-size="size"
      background
      hide-on-single-page
    />
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from 'vue'
import { TYPE_MORTGAGE_OPTIONS, PERIOD_OPTIONS } from '@/constants'

import { useData } from '@/composables'

import { numberWithSpaces } from '@/utils'

import { BaseTable } from '@/components'
import { ElPagination } from 'element-plus'

export default defineComponent({
  name: 'DetailPage',

  components: {
    BaseTable,
    ElPagination,
  },

  setup() {
    const { inputValues } = useData()

    const labelOfTypeMortgage = computed(
      () =>
        TYPE_MORTGAGE_OPTIONS.find(
          x => x.value === inputValues.value.paymentType
        )?.label
    )

    const labelOfTypePeriod = computed(
      () =>
        PERIOD_OPTIONS.find(x => x.value === inputValues.value.mortgagePeriod)
          ?.label
    )

    const DETAIL_FIELDS = [
      {
        prop: 'id',
        label: 'ID',
        width: 80,
        align: 'center',
      },
      {
        prop: 'tdMonPay',
        label: 'Ежемесячный платеж (р.)',
        align: 'center',
      },
      {
        prop: 'repayPer',
        label: 'Погашение процентов (р.)',
        align: 'center',
      },
      {
        prop: 'repayBody',
        label: 'Погашение тела кредита (р.)',
        align: 'center',
      },
      {
        prop: 'debtEnd',
        label: 'Долг на конец месяца (р.)',
        align: 'center',
      },
    ]

    const tableData = [
      { id: 1, tdMonPay: 4680, repayPer: 917, repayBody: 3763, debtEnd: 46237 },
      { id: 2, tdMonPay: 4680, repayPer: 848, repayBody: 3832, debtEnd: 42405 },
      { id: 3, tdMonPay: 4680, repayPer: 777, repayBody: 3902, debtEnd: 38503 },
      { id: 4, tdMonPay: 4680, repayPer: 706, repayBody: 3974, debtEnd: 34529 },
      { id: 5, tdMonPay: 4680, repayPer: 633, repayBody: 4047, debtEnd: 30482 },
      { id: 6, tdMonPay: 4680, repayPer: 559, repayBody: 4121, debtEnd: 26361 },
      { id: 7, tdMonPay: 4680, repayPer: 483, repayBody: 4196, debtEnd: 22165 },
      { id: 8, tdMonPay: 4680, repayPer: 406, repayBody: 4273, debtEnd: 17891 },
      { id: 9, tdMonPay: 4680, repayPer: 328, repayBody: 4352, debtEnd: 13540 },
      { id: 10, tdMonPay: 4680, repayPer: 248, repayBody: 4431, debtEnd: 9108 },
      { id: 11, tdMonPay: 4680, repayPer: 167, repayBody: 4513, debtEnd: 4595 },
      { id: 12, tdMonPay: 4680, repayPer: 84, repayBody: 4595, debtEnd: 0 },
    ]

    const pageNumber = ref(1)
    const size = ref(12)

    const paginatedData = computed(() => {
      const start = (pageNumber.value - 1) * size.value
      const end = start + size.value
      return tableData.slice(start, end)
    })

    return {
      inputValues,
      labelOfTypeMortgage,
      labelOfTypePeriod,
      DETAIL_FIELDS,
      paginatedData,
      pageNumber,
      tableData,
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

<template>
  <div class="detail-info">
    <base-table :data="tableData" :fields="DETAIL_FIELDS" />
  </div>
</template>

<script setup>
import BaseTable from './../components/base/BaseTable.vue'

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
</script>

<style lang="scss" scoped>
.detail-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
}
}
</style>

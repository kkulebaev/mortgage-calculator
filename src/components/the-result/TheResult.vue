<template>
  <div class="result-block">
    <the-histogram />

    <div class="info-block">
      <div class="info-block__item">
        <span class="info-block__item__label"> Переплата по ипотеке: </span>
        <span class="info-block__item__label"> 10000 RUB </span>
      </div>
      <div class="info-block__item">
        <span class="info-block__item__label"> Ежемесячный платеж: </span>
        <span class="info-block__item__label"> 10000 RUB </span>
      </div>
      <div class="info-block__item">
        <span class="info-block__item__label"> Общая стоимость ипотеки: </span>
        <span class="info-block__item__label"> 10000 RUB </span>
      </div>
    </div>

    <base-button> Рассчитать ипотеку </base-button>
  </div>
</template>

<script setup>
import TheHistogram from '/src/components/the-histogram/TheHistogram.vue'
import BaseButton from '/src/components/base/BaseButton.vue'
</script>

<style lang="scss" scoped>
.result-block {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.info-block {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__label {
      color: $black;
      font-size: 1.8rem;
    }
  }
}
</style>

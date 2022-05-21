<template>
  <div class="histogram">
    <div class="histogram__item">
      <span class="histogram__item__label"> Возьмете </span>
      <span class="histogram__item__value">
        {{ numberWithSpaces(takeValue) }} RUB
      </span>
      <div class="histogram__item__scale" />
    </div>
    <div class="histogram__item">
      <span class="histogram__item__label"> Вернете </span>
      <span class="histogram__item__value">
        {{ numberWithSpaces(repayValue) }} RUB
      </span>
      <div class="histogram__item__scale" />
    </div>
  </div>
</template>

<script setup>
import numberWithSpaces from '/src/utils/numberWithSpaces.js'

defineProps({
  takeValue: {
    type: Number,
    required: true,
  },

  repayValue: {
    type: Number,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.histogram {
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  gap: 2rem;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    &__label {
      color: $black;
      font-size: 1.8rem;
    }

    &__value {
      font-size: 2rem;
      font-weight: 900;
      color: $black;
    }

    &__scale {
      height: 20rem;
      width: 100%;
      min-width: 18rem;
      background-color: $primary;
      border-radius: 15px;
    }

    &:nth-child(2) {
      .histogram__item__scale {
        background-color: $secondary;
      }
    }
  }
}
</style>

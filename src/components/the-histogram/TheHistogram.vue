<template>
  <div class="histogram">
    <div class="histogram__item">
      <span class="histogram__item__label"> Возьмете </span>
      <span class="histogram__item__value">
        {{ numberWithSpaces(takeValue) }} RUB
      </span>
      <div class="histogram__item__scale">
        <div
          class="histogram__item__scale__bar"
          :style="{ height: `${takeHistogramHeight}%` }"
        />
      </div>
    </div>
    <div class="histogram__item">
      <span class="histogram__item__label"> Вернете </span>
      <span class="histogram__item__value">
        {{ numberWithSpaces(repayValue) }} RUB
      </span>
      <div class="histogram__item__scale">
        <div
          class="histogram__item__scale__bar"
          :style="{ height: `${repayHistogramHeight}%` }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import numberWithSpaces from '/src/utils/numberWithSpaces.js'

const props = defineProps({
  takeValue: {
    type: Number,
    required: true,
  },

  repayValue: {
    type: Number,
    required: true,
  },
})

const repayHistogramHeight = 100

const takeHistogramHeight = computed(
  () => (props.takeValue * 100) / props.repayValue
)
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
      height: 100%;

      &__bar {
        width: 100%;
        min-width: 18rem;
        background-color: $primary;
        border-radius: 15px;
      }
    }

    &:nth-child(2) {
      .histogram__item__scale__bar {
        background-color: $secondary;
      }
    }
  }
}
</style>

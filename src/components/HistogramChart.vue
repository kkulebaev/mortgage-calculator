<template>
  <div class="histogram">
    <Transition
      class="transition"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutUp"
    >
      <div v-if="takeValue" class="histogram__item">
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
    </Transition>
    <Transition
      class="transition"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutUp"
    >
      <div v-if="repayValue" class="histogram__item">
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
    </Transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { numberWithSpaces } from '@/utils'

export default defineComponent({
  name: 'HistogramChart',

  props: {
    takeValue: {
      type: Number,
      required: true,
    },

    repayValue: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const repayHistogramHeight = 100

    const takeHistogramHeight = computed(
      () => (props.takeValue * 100) / props.repayValue
    )

    return {
      repayHistogramHeight,
      takeHistogramHeight,
      numberWithSpaces,
    }
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
    flex: 1;

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

.transition {
  --animate-duration: 1s;
}
</style>

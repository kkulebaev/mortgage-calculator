<template>
  <div class="histogram-chart">
    <Transition
      v-for="(item, index) in histograms"
      :key="index"
      class="transition"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutUp"
    >
      <HistogramBar
        :height="item.height"
        :value="item.value"
        :label="item.label"
        :type="item.type"
      />
    </Transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import HistogramBar, { HistogramTypes } from './histogram-bar.vue'

export default defineComponent({
  name: 'HistogramChart',

  components: {
    HistogramBar,
  },

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
    const { t } = useI18n()

    const histograms = computed(() => [
      {
        height: (props.takeValue * 100) / props.repayValue || 0,
        value: props.takeValue,
        label: t('take'),
        type: HistogramTypes.primary,
      },

      {
        height: 100,
        value: props.repayValue,
        label: t('return'),
        type: HistogramTypes.secondary,
      },
    ])

    return {
      histograms,
    }
  },
})
</script>

<style lang="postcss" scoped>
.histogram-chart {
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  gap: 2rem;
}

.transition {
  --animate-duration: 1s;
}
</style>

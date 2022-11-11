<template>
  <ElTooltip effect="dark" :content="content" placement="right-end">
    <img
      class="base-tooltip"
      src="./../../assets/img/question.svg"
      alt="question-icon"
    />
  </ElTooltip>
</template>

<script lang="ts">
import { ElTooltip } from 'element-plus'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseTooltip',

  components: {
    ElTooltip,
  },

  props: {
    content: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.base-tooltip {
  position: absolute;
  right: -1.8rem;
  top: -1.3rem;
  width: 1.5rem;
}
</style>

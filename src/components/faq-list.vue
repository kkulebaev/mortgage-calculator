<template>
  <div v-for="(item, index) in FAQ" :key="index" class="faq-list">
    <h3 class="faq-list__question">{{ item.question() }}</h3>
    <p
      v-for="(p, i) in item.answer()"
      :key="i"
      class="faq-list__answer"
      v-html="p"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { FAQ } from '@/helpers'

export default defineComponent({
  name: 'FaqList',

  setup() {
    return {
      FAQ,
    }
  },
})
</script>

<style lang="postcss" scoped>
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--black);
}

.faq-list__question {
  font-size: 2rem;
  font-weight: bold;
}

.faq-list__answer {
  font-size: 1.6rem;
  text-align: justify;
}
</style>

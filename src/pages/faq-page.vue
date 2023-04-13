<template>
  <div class="faq-page">
    <PageTitle :title="FAQ_PAGE_TITLE" />
    <FaqList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { FaqList, PageTitle } from '@/components'

export default defineComponent({
  name: 'FaqPage',

  components: {
    PageTitle,
    FaqList,
  },

  setup() {
    const FAQ_PAGE_TITLE = 'FAQ'

    return {
      FAQ_PAGE_TITLE,
    }
  },
})
</script>

<style lang="postcss" scoped>
.faq-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
}
</style>

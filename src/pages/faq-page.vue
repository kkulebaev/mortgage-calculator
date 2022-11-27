<template>
  <div class="faq-page">
    <PageTitle title="FAQ" />
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
})
</script>

<style scoped>
.faq-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
}
</style>

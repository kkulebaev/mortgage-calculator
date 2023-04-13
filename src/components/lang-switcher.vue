<template>
  <ElSelect v-model="lang" class="lang-switcher">
    <ElOption
      v-for="locale in availableLocales"
      :key="`locale-${locale}`"
      :label="locale.toUpperCase()"
      :value="locale"
    />
  </ElSelect>
</template>

<script lang="ts">
import { useStorage } from '@vueuse/core'
import { ElOption, ElSelect } from 'element-plus'
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'LangSwitcher',

  components: { ElOption, ElSelect },

  setup() {
    const { availableLocales, locale } = useI18n()

    const lang = useStorage('locale', locale)

    return {
      availableLocales,
      lang,
    }
  },
})
</script>

<style lang="postcss" scoped>
.lang-switcher {
  width: 7rem;
}
</style>

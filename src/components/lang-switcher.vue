<template>
  <ElSelect
    :model-value="lang"
    class="lang-switcher"
    @change="changeLang"
  >
    <ElOption
      v-for="locale in availableLocales"
      :key="`locale-${locale}`"
      :label="locale.toUpperCase()"
      :value="locale"
    />
  </ElSelect>
</template>

<script lang="ts">
import { ElOption, ElSelect } from 'element-plus'
import { defineComponent, ref } from 'vue'

import { availableLocales, tolgee } from '@/plugins/tolgee'

export default defineComponent({
  name: 'LangSwitcher',

  components: { ElOption, ElSelect },

  setup() {
    const lang = ref(tolgee.getLanguage())

    function changeLang(value: string) {
      lang.value = value
      tolgee.changeLanguage(value).then(() => window.location.reload())
    }

    return {
      availableLocales,
      lang,
      changeLang,
    }
  },
})
</script>

<style lang="postcss" scoped>
.lang-switcher {
  width: 7rem;
  min-width: 7rem;
  text-transform: uppercase;
}
</style>

<template>
  <fieldset class="switcher">
    <legend class="switcher__legend">Схема</legend>
    <input
      v-model="colorSchemeValue"
      :value="COLOR_SCHEME.light"
      class="switcher__radio switcher__radio--light"
      type="radio"
      name="color-scheme"
      aria-label="Светлая"
    />
    <input
      v-model="colorSchemeValue"
      :value="COLOR_SCHEME.auto"
      class="switcher__radio switcher__radio--auto"
      type="radio"
      name="color-scheme"
      aria-label="Системная"
    />
    <input
      v-model="colorSchemeValue"
      :value="COLOR_SCHEME.dark"
      class="switcher__radio switcher__radio--dark"
      type="radio"
      name="color-scheme"
      aria-label="Тёмная"
    />
    <div class="switcher__status"></div>
  </fieldset>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { storeToRefs } from 'pinia'

import { useSettingsStore, COLOR_SCHEME } from '@/store'

export default defineComponent({
  name: 'ColorSchemeSwitcher',

  setup() {
    const settingsStore = useSettingsStore()
    const { setColorScheme } = settingsStore
    const { colorScheme } = storeToRefs(settingsStore)

    const colorSchemeValue = computed({
      get() {
        return colorScheme.value
      },

      set(colorScheme: COLOR_SCHEME) {
        setColorScheme(colorScheme)
      },
    })

    return {
      COLOR_SCHEME,
      colorSchemeValue,
    }
  },
})
</script>

<style lang="scss" scoped>
:root {
  color-scheme: light dark;
}

.switcher__radio {
  filter: invert(0);
}

.switcher__radio:checked {
  filter: invert(1);
}

.switcher__status {
  filter: invert(0);
}

.switcher {
  position: relative;
  margin: 0;
  padding: 2px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: none;
}

.switcher__legend {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.switcher__radio {
  cursor: pointer;
  appearance: none;
  margin: 0;
  width: 32px;
  height: 32px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px;
  transition: all 0.1s ease-in;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
}

.switcher__radio--light {
  background-image: url('../assets/img/light.svg');
}

.switcher__radio--auto {
  background-image: url('../assets/img/auto.svg');
}

.switcher__radio--dark {
  background-image: url('../assets/img/dark.svg');
}

.switcher__status {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  box-shadow: 0 0 0 2px rgb(0 0 0 / 0.2);
  border-radius: 18px;
  background-color: rgb(255 255 255 / 0.5);
  background-repeat: no-repeat;
  background-image: url('../assets/img/status.svg');
  background-size: 32px;
  background-position: center;
  transition: background-position 0.1s ease-in;
}

.switcher__radio:focus-visible ~ .switcher__status {
  box-shadow: 0 0 0 2px black;
}

.switcher__radio--light:checked ~ .switcher__status {
  background-position: left 2px center;
}

.switcher__radio--auto:checked ~ .switcher__status {
  background-position: center center;
}

.switcher__radio--dark:checked ~ .switcher__status {
  background-position: right 2px center;
}
</style>

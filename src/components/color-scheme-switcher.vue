<template>
  <fieldset class="switcher">
    <legend class="switcher__legend">Схема</legend>
    <input
      v-model="colorScheme"
      :value="COLOR_SCHEME.light"
      class="switcher__radio light"
      type="radio"
      name="color-scheme"
      aria-label="Светлая"
    />
    <input
      v-model="colorScheme"
      :value="COLOR_SCHEME.dark"
      class="switcher__radio dark"
      type="radio"
      name="color-scheme"
      aria-label="Тёмная"
    />
    <div class="switcher__status"></div>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { COLOR_SCHEME } from '@/helpers'
import { useColorMode } from '@vueuse/core'

export default defineComponent({
  name: 'ColorSchemeSwitcher',

  setup() {
    const colorScheme = useColorMode<COLOR_SCHEME>({
      initialValue: COLOR_SCHEME.light,
      storageKey: 'color-scheme',
    })

    return {
      COLOR_SCHEME,
      colorScheme,
    }
  },
})
</script>

<style scoped>
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
  grid-template-columns: 1fr 1fr;
  border: 0;
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
}

.switcher__radio:hover {
  opacity: 0.7;
}

.switcher__radio:focus {
  outline: none;
}

.switcher__radio.light {
  background-image: url('../assets/img/light.svg');
}

.switcher__radio.dark {
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
  box-shadow: 0 0 0 2px var(--black);
}

.switcher__radio.light:checked ~ .switcher__status {
  background-position: left 2px center;
}

.switcher__radio.dark:checked ~ .switcher__status {
  background-position: right 2px center;
}
</style>

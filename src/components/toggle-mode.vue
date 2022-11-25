<template>
  <input id="toggle" class="toggle" type="checkbox" />
  <label class="toggle__label" for="toggle">
    <FontAwesomeIcon
      class="toggle__icon sun"
      :icon="['fas', 'sun']"
      size="2x"
    />
    <FontAwesomeIcon
      class="toggle__icon moon"
      :icon="['fas', 'moon']"
      size="2x"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineComponent({
  name: 'ToggleMode',

  components: {
    FontAwesomeIcon,
  },
})
</script>

<style lang="scss" scoped>
/* stylelint-disable max-nesting-depth */

// TODO: Пофиксить stylelint disable

.toggle {
  width: 0;
  height: 0;
  visibility: hidden;
}

.toggle__label {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;

  min-width: 7rem;
  height: 3.5rem;
  background: rgb(251, 248, 248);
  border-radius: 100px;
  box-shadow: inset 0 3px 10px rgba(0, 0, 0, 0.4),
    inset 0 -3px 20px rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    width: 3rem;
    height: 3rem;
    top: 50%;
    left: 0.5rem;
    transform: translate3d(0, -50%, 0);
    background: linear-gradient(180deg, #ffcc96, #d8865d);
    border-radius: 50%;
    box-shadow: -3px -3px 10px #00000040, 3px 3px 20px #00000040;
    transition: all 0.3s ease-in-out;
  }
}

input:checked + .toggle__label {
  background: $black;

  &::after {
    transform: translate3d(100%, -50%, 0);
    background: linear-gradient(180deg, #777777, #3a3a3a);
  }
}

.toggle__icon {
  z-index: 1;
}

.toggle__icon.sun {
  color: $white;
  transition: all 0.3s ease-in-out;
}

.toggle__icon.moon {
  color: $dark-gray;
  transition: all 0.3s ease-in-out;
}

input:checked + .toggle__label .toggle__icon.sun {
  color: $dark-gray;
}

input:checked + .toggle__label .toggle__icon.moon {
  color: $white;
}
</style>

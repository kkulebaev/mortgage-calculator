<template>
  <div class="spinner">
    <div class="spinner__bar"></div>
    <div class="spinner__bar"></div>
    <div class="spinner__bar"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseSpinner',
})
</script>

<style lang="postcss" scoped>
.spinner {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: auto;
}

.spinner__bar {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: var(--primary);
  animation: spinner 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}

.spinner__bar:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}

.spinner__bar:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}

.spinner__bar:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}

@keyframes spinner {
  0% {
    top: 8px;
    height: 64px;
  }

  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
</style>

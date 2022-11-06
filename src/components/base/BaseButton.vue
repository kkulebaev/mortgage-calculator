<template>
  <ElButton class="btn" type="primary" @click="$emit('click')">
    <slot />
  </ElButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  components: {
    ElButton,
  },

  emits: ['click'],
})
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2.5rem 3.5rem;
  background: $primary;
  border-radius: 0 9rem 0 6.1rem;

  text-transform: uppercase;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.15;
  font-weight: 900;
  color: $white;

  cursor: pointer;
  border: none;

  transition: all 0.3s ease-in-out;

  &:hover:not(:disabled) {
    background: $black;
  }

  &:focus {
    outline: none;
  }
}
</style>

<template>
  <ElButton class="btn" type="primary" @click="$emit('click')">
    <slot />
  </ElButton>
</template>

<script lang="ts">
import { ElButton } from 'element-plus'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseButton',

  components: {
    ElButton,
  },

  emits: ['click'],
})
</script>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 3.5rem;
  background: var(--primary);
  border-radius: 0 9rem 0 6.1rem;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.15;
  font-weight: 900;
  color: var(--white);
  cursor: pointer;
  border: 0;
  transition: all 0.3s ease-in-out;
}

.btn:focus {
  outline: none;
}

.btn:hover:not(:disabled) {
  background: var(--black);
}
</style>

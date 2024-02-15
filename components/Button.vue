<script lang="ts" setup>
const { type, size } = defineProps<{
  type?: 'primary' | 'secondary' | 'danger'
  size?: 'normal' | 'small' | 'large'
}>()
</script>

<template>
  <button :class="`${type ?? 'primary'} ${size ?? 'normal'}`">
    <slot />
  </button>
</template>

<style scoped>
button {
  border: none;
  cursor: pointer;
}

.primary {
  background: white;
  color: black;
}

.secondary {
  background: black;
  color: white;
  border: 1px solid #606060
}

.danger {
  background: #cc0000;
  color: white;
}

.normal {
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 6px;
}

.small {
  font-size: 0.8rem
}

.large {
  font-size: 1.2rem
}
</style>

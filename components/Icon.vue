<script lang="ts" setup>
const { name } = defineProps<{
  name: string
}>()
</script>

<template>
  <NuxtImg :src="`/assets/icons/${name}.svg`" width="20" />
</template>

<style scoped></style>

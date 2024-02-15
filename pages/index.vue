<script lang="ts" setup>
useHead({
  title: 'tools. by Əkrəm Cəfər'
})
</script>

<template>
  <main>
    <h1>Nice tools to use freely</h1>
    <div>
      <Button>Get started</Button>
      <Button type="secondary"><Icon name="github" /> View on GitHub</Button>
    </div>
  </main>
</template>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 4rem;
  text-align: center
}

div {
  display: flex;
  justify-content: center;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>

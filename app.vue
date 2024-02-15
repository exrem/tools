<template>
  <Navigation />
  <NuxtPage :page-key="route => route.fullPath" />
  <Footer />
</template>

<style>
@font-face {
  font-family: 'Geist';
  src: url('/assets/fonts/Geist Variable.ttf');
}

body {
  background: black;
  color: white;
  font-family: 'Geist', sans-serif
}
</style>
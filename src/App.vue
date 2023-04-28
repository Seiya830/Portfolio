<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { RouterView } from "vue-router";
import "devicon";
</script>

<template>
  <div id="app">
    <header>
      <AppHeader />
    </header>
    <main>
      <RouterView />
    </main>
    <footer><AppFooter /></footer>
  </div>
</template>

<style lang="scss">
html {
  font-size: 62.5%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  background-color: #161b22;
}

main {
  flex-grow: 1;
  background-color: #161b22;
}
</style>

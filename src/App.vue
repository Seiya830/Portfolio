<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { RouterView } from "vue-router";
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

<style lang="scss"></style>

<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <AppHeader />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1>Portfolio</h1>
    <nav>
      <ul>
        <li>Works</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
  <main>
    <p>ここはHomeページです</p>
    <router-link to="/src/views/AboutView.vue">Aboutへ</router-link>
  </main>
  <RouterView />
</template>

<style></style>

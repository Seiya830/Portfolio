<script setup lang="ts"></script>

<template>
  <div class="about">
    <h1>ここはaboutページです</h1>
    <router-link to="/src/App.vue">Homeへ</router-link>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

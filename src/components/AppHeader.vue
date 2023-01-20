<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const open = ref(false);
    return { open };
  },
});
</script>

<template>
  <div>
    <button @click="open = !open">Toggle menu</button>
    <nav v-if="open">
      <ul>
        <li>
          <router-link to="/works">Works</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
li {
  list-style: none;
  text-align: center;
  margin-bottom: 30px;
}
</style>

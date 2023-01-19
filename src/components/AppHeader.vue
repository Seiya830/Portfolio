<!-- <nav v-if="isOpen" class="nav-menu">
  <li>
    <router-link to="/works">Works</router-link>
  </li>
  <li>
    <router-link to="/about">About</router-link>
  </li>
  <li>
    <router-link to="/contact">Contact</router-link>
  </li>
</nav> -->

<template>
  <div>
    <span :class="{ 'is-open': isOpen.value }" @click="toggle">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </span>
    <div v-if="isOpen.value" class="menu">
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
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

interface State {
  isOpen: Ref<boolean>;
}

export default {
  setup() {
    const state: State = {
      isOpen: ref(false),
    };

    function toggle() {
      state.isOpen.value = !state.isOpen.value;
    }

    return { ...state, toggle };
  },
};
</script>

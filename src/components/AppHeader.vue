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
    <button @click="open = !open" :class="{ open: open }" class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </button>
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

.hamburger {
  position: fixed;
  top: 0;
  right: 0;
  display: inline-block;
  width: 75px;
  height: 75px;
  background-color: gray;
  vertical-align: top;
  border: none;
  z-index: 999;
  cursor: pointer;

  span {
    position: absolute;
    top: 20px;
    left: 18px;
    display: inline-block;
    width: 35px;
    height: 2px;
    background-color: black;
    transition: ease 0.4s;
  }

  :nth-child(1) {
    margin-top: 5px;
  }
  :nth-child(2) {
    margin-top: 15px;
  }
  :nth-child(3) {
    margin-top: 25px;
  }

  &.open {
    span {
      &:nth-child(1) {
        transform: rotate(45deg);
        margin-top: 15px;
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
        margin-top: 15px;
      }
    }
  }
}
</style>

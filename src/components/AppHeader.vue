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
  <h1 class="home">
    <a href="/">Home</a>
  </h1>
  <button @click="open = !open" :class="{ open: open }" class="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <nav :class="{ open: open }" class="nav-content">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link @click.prevent="open = false" to="/works"
          >Works</router-link
        >
      </li>
      <li class="nav-item">
        <router-link @click.prevent="open = false" to="/about"
          >About</router-link
        >
      </li>
      <li class="nav-item">
        <router-link @click.prevent="open = false" to="/contact"
          >Contact</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import "../assets/scss/mixin";

a {
  text-decoration: none;
  color: #c8d1d9;
}

li {
  list-style: none;
}

.home {
  margin-top: 16px;
  margin-left: 24px;
  display: inline-block;
  width: auto;
  height: auto;

  a {
    color: #c8d1d9;
  }

  @include pc {
    z-index: 9999;
  }
}

.nav-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #21262c;
  z-index: 999;
  display: none;

  @include pc {
    display: flex;
    background-color: transparent;
    height: 60px;
  }

  &.open {
    display: block;
    animation: slide-in 0.4s ease-in-out forwards;
  }
}
@keyframes slide-in {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
.nav-list {
  margin-top: 120px;

  @include pc {
    display: flex;
    margin-top: 0;
    margin-left: auto;
  }

  .nav-item {
    list-style: none;
    text-align: center;
    margin-bottom: 30px;

    @include pc {
      margin-top: 30px;
      margin-right: 50px;
      margin-bottom: 0;
    }
  }
}

.hamburger {
  position: fixed;
  top: 0;
  right: 0;
  display: inline-block;
  width: 64px;
  height: 64px;
  background-color: #161b22;
  vertical-align: top;
  border: none;
  z-index: 9999;
  cursor: pointer;

  @include pc {
    display: none;
  }

  span {
    position: absolute;
    top: 18px;
    left: 16px;
    display: inline-block;
    width: 35px;
    height: 2px;
    background-color: #c8d1d9;
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
    background-color: #21262c;

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

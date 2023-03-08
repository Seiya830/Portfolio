<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<template>
  <div class="complete">
    <p>お問い合わせありがとうございました。</p>
    <router-link to="/">Homeに戻る</router-link>
  </div>
</template>

<style lang="scss">
.complete {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;

  p {
    font-size: 24px;
    margin: 20px;
    text-align: center;
  }

  a {
    font-size: 16px;
    color: #007bff;
    text-decoration: underline;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
      color: #0056b3;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<template>
  <div class="complete">
    <p>
      お問い合わせいただき、ありがとうございます。<br />確認の上、ご返信させていただきます。
    </p>
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
  background-color: #161b22;
  color: #c8d1d9;

  p {
    font-size: 24px;
    margin: 20px;
    text-align: center;
  }

  a {
    font-size: 16px;
    color: #c8d1d9;
    text-decoration: underline;
    margin-top: 20px;
    cursor: pointer;
  }
}
</style>

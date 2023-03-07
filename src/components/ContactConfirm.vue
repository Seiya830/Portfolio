<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: String,
    email: String,
    message: String,
  },

  methods: {
    submitForm() {
      // フォームの送信処理を実装する
    },
  },
});
</script>

<template>
  <div class="confirm">
    <p>以下の内容でよろしいですか？</p>

    <ul>
      <li>名前: {{ name }}</li>
      <li>メールアドレス: {{ email }}</li>
      <li>メッセージ: {{ message }}</li>
    </ul>

    <button @click="submitForm">送信</button>
  </div>
</template>

<style lang="scss">
.confirm {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 10px 0;
    }
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: #0069d9;
    }
  }
}
</style>

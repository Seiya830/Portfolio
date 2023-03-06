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
  <div>
    <p>以下の内容でよろしいですか？</p>

    <ul>
      <li>名前: {{ name }}</li>
      <li>メールアドレス: {{ email }}</li>
      <li>メッセージ: {{ message }}</li>
    </ul>

    <button @click="submitForm">送信</button>
  </div>
</template>

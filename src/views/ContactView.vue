<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },

  methods: {
    submitForm() {
      // フォームの送信処理を実装する
    },
  },
});
</script>

<template>
  <div class="contact">
    <h1>Contact</h1>

    <form @submit.prevent="submitForm">
      <label for="name">氏名</label>
      <input type="text" v-model="name" />

      <label for="email">メールアドレス</label>
      <input type="email" v-model="email" />

      <label for="content">本文</label>
      <textarea v-model="message"></textarea>

      <input type="submit" name="confirm" value="確認" class="button" />
    </form>
  </div>
</template>

<style lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    label {
      display: block;
      margin: 10px 0;
    }

    input[type="text"],
    input[type="email"],
    textarea {
      margin-bottom: 20px;
      padding: 4px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      width: 280px;
    }

    textarea {
      height: 200px;
      resize: vertical;
      min-height: 100px;
    }

    input[type="submit"] {
      background-color: #007bff;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>

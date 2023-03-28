<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },

  setup() {
    const router = useRouter();

    const submitForm = async ({
      name,
      email,
      message,
    }: {
      name: string;
      email: string;
      message: string;
    }) => {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      try {
        await axios.post("/server.js", formData);
        alert("メールが正常に送信されました");
        router.push("/components/ContactComplete");
      } catch (error) {
        console.error(error);
        alert("メールの送信中にエラーが発生しました");
      }
    };

    const goBack = () => {
      router.push("/contact");
    };

    return {
      submitForm,
      goBack,
    };
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

    <button @click="submitForm({ name, email, message })">送信</button>
    <button @click="goBack">戻る</button>
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

  button + button {
    margin-left: 14px;
  }
}
</style>

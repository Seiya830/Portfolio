<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

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
      const formData = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      const router = useRouter();
      router.push({
        name: "ContactComplete",
        path: "/components/ContactComplete",
        params: formData,
      });
    },
  },
});
</script>

<template>
  <div class="contact">
    <h1>Contact</h1>

    <form
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfXPQO7WPWUxyoh_8Ur4qIKe8oCHIfB4p_d35gePI8HSLUbuA/formResponse"
    >
      <label for="name">氏名</label>
      <input type="text" name="entry.2005620554" />

      <label for="email">メールアドレス</label>
      <input type="email" name="entry.1045781291" />

      <label for="content">本文</label>
      <textarea name="entry.839337160"></textarea>

      <input type="submit" name="confirm" value="送信" class="button" />
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

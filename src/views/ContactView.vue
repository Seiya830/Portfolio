<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      content: "",
    };
  },
  methods: {
    async submitForm() {
      const formId = "1FAIpQLSfXPQO7WPWUxyoh_8Ur4qIKe8oCHIfB4p_d35gePI8HSLUbuA";
      const formData = new FormData();
      formData.append("entry.2005620554", this.name);
      formData.append("entry.1045781291", this.email);
      formData.append("entry.839337160", this.content);
      await fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse`, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      this.$router.push("/ContactComplete");
    },
  },
};
</script>

<template>
  <div class="contact">
    <h1>Contact</h1>

    <form @submit.prevent="submitForm">
      <label for="name">氏名</label>
      <input type="text" name="entry.2005620554" v-model="name" />

      <label for="email">メールアドレス</label>
      <input type="email" name="entry.1045781291" v-model="email" />

      <label for="content">本文</label>
      <textarea name="entry.839337160" v-model="content"></textarea>

      <button type="submit" name="button" value="送信">送信</button>
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
  color: #c8d1d9;

  h1 {
    font-size: 3rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    label {
      display: block;
      margin: 10px 0;
      font-size: 1.5rem;
    }

    input[type="text"],
    input[type="email"],
    textarea {
      margin-bottom: 20px;
      padding: 4px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1.6rem;
      width: 280px;
    }

    textarea {
      height: 200px;
      resize: vertical;
      min-height: 100px;
    }

    button[type="submit"] {
      background-color: #007bff;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      font-size: 1.6rem;
      cursor: pointer;
    }
  }
}
</style>

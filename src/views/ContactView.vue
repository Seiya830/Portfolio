<script setup lang="ts"></script>

<template>
  <div class="contact">
    <h1>Contact</h1>

    <form action="./contactform.php" method="post">
      <label for="name">氏名</label>
      <input type="text" name="fullname" value="" />
      <label for="email">メールアドレス</label>
      <input type="email" name="email" value="" />
      <label for="content">本文</label>
      <textarea name="message" id="" cols="" rows=""></textarea>
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
      padding: 4px 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      width: 100%;
      max-width: 400px;
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

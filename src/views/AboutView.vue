<script setup lang="ts"></script>

<template>
  <section class="about">
    <h2>ここはaboutページです</h2>
    <div class="profile">
      <h2 class="about-heading">Profile</h2>
      <div class="image">
        <img src="" alt="プロフィール画像" />
      </div>
      <p>名前</p>
      <p>自己紹介文</p>
    </div>
    <router-link to="/">Homeへ</router-link>
  </section>
</template>

<style lang="scss">
.about {
  position: static;
}
</style>

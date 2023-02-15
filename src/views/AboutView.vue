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
    <div class="skills">
      <h2 class="about-heading">Skills</h2>
      <div class="skills-items">
        <img
          src="../assets/image/icon/kisspng-logo-cascading-style-sheets-html5-css3-prags-h-python-stickers-5b5ed262588918.5038573515329408983627.png"
          alt="HTML,CSSのアイコン"
          class="skills-icon-markup"
        />
        <p>
          静的なWebサイトを作成し、レスポンシブ対応することができます。<br />Sassを使用し、メンテナンス性を高めたコーディングをすることが可能です。
        </p>
      </div>
      <div class="skills-items">
        <img
          src="../assets/image/icon/kisspng-javascript-scalable-vector-graphics-logo-encapsula-javascript-le-ekran-grnts-almak-alpere-5b6dbeb4be0349.4316196815339189007783.png"
          alt="JavaScriptのアイコン"
          class="skills-icon"
        />
        <p>
          フェードインや要素の表示、非表示の切り替え等基本的なアニメーションの実装ができます。
        </p>
      </div>
      <div class="skills-items">
        <img
          src="../assets/image/icon/kisspng-vue-js-javascript-library-angularjs-react-vue-js-5b4ebe1c091993.8950282915318871320373.png"
          alt="Vue.jsのアイコン"
          class="skills-icon"
        />
        <p>
          Vite, Composition API,
          TypeScriptを使用し、簡単なSPAを作ることができます。
        </p>
      </div>
    </div>

    <div class="like">
      <h2 class="about-heading">Like</h2>
      <div class="like-items">
        <p>Hobby</p>
        <ul>
          <li>ウエイトトレーニング</li>
          <li>FPSゲーム</li>
          <li>塊根植物</li>
          <li>サウナ</li>
        </ul>
      </div>
      <div class="like-items">
        <p>Food</p>
        <ul>
          <li>パキスタンカレー</li>
          <li>どら焼き</li>
        </ul>
      </div>
    </div>
    <router-link to="/">Homeへ</router-link>
  </section>
</template>

<style lang="scss">
ul {
  padding-left: 10px;
}

.about-heading {
  text-align: center;
}

.skills-items {
  margin-right: 10%;
  margin-left: 10%;
}

.skills-icon-markup {
  width: 30%;
  height: 20%;
}

.skills-icon {
  width: 30%;
  height: 30%;
}
</style>

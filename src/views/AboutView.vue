<script setup lang="ts"></script>

<template>
  <section class="about">
    <div class="profile">
      <h2 class="about-heading">Profile</h2>
      <div class="image">
        <img src="" alt="プロフィール画像" />
      </div>
      <p>
        札幌市在住の大森誠也です。<br />鍼灸師として働きながらフロントエンドエンジニアを目指して学習中です。<br />業務の性質上、目の前の1人にしか影響を与えることができませんが、0から物を作り多くの人へ価値の提供ができるエンジニアに魅力を感じプログラミング学習を開始しました。
        <br />学習を始めたての頃、教材のBootstrapのコードが動かず、公式ドキュメントを参照するとコードに変更があり、たった数年で変化することが今の自分の業界では考えられず衝撃を受け、さらにプログラミングに惹かれました。<br />特に変化が激しいと言われているフロントエンドの分野に興味があり、Vue.jsやNuxt.jsを学習中です。
      </p>
    </div>
    <div class="skills">
      <h2 class="about-heading">Skills</h2>
      <div class="skills-item">
        <i class="devicon-html5-plain-wordmark icon"></i>

        <i class="devicon-css3-plain-wordmark icon"></i>

        <p>
          静的なWebサイトを作成し、レスポンシブ対応することができます。<br />Sassを使用し、メンテナンス性を高めたコーディングをすることが可能です。
        </p>
      </div>
      <div class="skills-item">
        <i class="devicon-javascript-plain icon"></i>

        <p>
          フェードインや要素の表示、非表示の切り替え等基本的なアニメーションの実装ができます。<br />jQueryでの記述も可能です。
        </p>
      </div>
      <div class="skills-item">
        <i class="devicon-vuejs-plain icon"></i>

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
        <ul class="like-list">
          <li>ウエイトトレーニング</li>
          <li>FPSゲーム</li>
          <li>塊根植物</li>
          <li>サウナ</li>
        </ul>
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
  margin-bottom: 30px;
}

.skills-item {
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #161b22;
  border-radius: 10px;

  .icon {
    font-size: 100px;
    color: #c8d1d9;
  }

  p {
    margin-top: 12px;
    color: #c8d1d9;
  }
}

.skills-icon-markup {
  width: 30%;
  height: 20%;
}

.skills-icon {
  width: 30%;
  height: 30%;
}

.like-items {
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #161b22;
  border-radius: 10px;

  .like-list {
    margin-bottom: 30px;
  }

  p {
    color: #c8d1d9;
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 8px;
    padding: 6px 14px;
    display: inline-block;
    border: solid 2px #363b41;
    border-radius: 10px;
    background-color: #21262c;
  }

  li {
    color: #c8d1d9;
  }
}
</style>

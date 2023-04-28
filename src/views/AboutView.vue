<script setup lang="ts"></script>

<template>
  <section class="about">
    <div class="profile">
      <h2 class="about-heading">Profile</h2>
      <div class="profile-pc">
        <div class="image">
          <img src="../assets/img/my_picture.jpg" alt="プロフィール画像" />
        </div>
        <p>
          はじめまして、札幌市在住の大森誠也と申します。<br />鍼灸師として働きながらフロントエンドエンジニアを目指して学習中です。<br />
          私は鍼灸師としての仕事にやりがいを感じていますが、一方でその仕事の性質上、一人ひとりにしか直接的な影響を与えることができませんでした。<br />そんな中プログラミングによって多くの人々に価値を提供できるエンジニアの魅力に惹かれ、学習を始めました。
          <br />学習を始めた当初、教材のBootstrapのコードが動かず公式ドキュメントを参照するとコードに変更がありました。たった数年で変化することが今の自分の業界では考えられず衝撃を受け、さらにプログラミング、コーディングに惹かれました。<br />特に変化が早いと言われているフロントエンドの分野に興味があり、Vue.jsやNuxt.jsを学習中です。<br />日々技術を学ぶ上で、多くのエラーに直面していますが、何が悪いのか突き止め解決策を見い出すことに楽しさを感じています。複雑で馴染みのない問題に直面した時には最もやりがいを感じます。
        </p>
      </div>
    </div>
    <div class="pc-wrap">
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
          <ul class="like-list">
            <li>パキスタンカレー</li>
            <li>どら焼き</li>
          </ul>
          <p>Tech</p>
          <ul>
            <li>JavaScript</li>
            <li>Vue.js</li>
            <li>Nuxt.js</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../assets/scss/mixin";

ul {
  padding-left: 10px;
}

.about {
  background-color: #161b22;
}

.about-heading {
  text-align: center;
  margin-bottom: 30px;
  color: #c8d1d9;
  font-size: 3rem;
  @include pc {
    margin-top: 30px;
  }
}

@include pc {
  .profile-pc {
    display: flex;
    margin-left: 2%;
    margin-right: 2%;
  }
}

.profile {
  margin-top: 10%;
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #c8d1d9;

  .image {
    width: 100%;
    margin-bottom: 50px;
    @include pc {
      margin-top: 2%;
      width: 50%;
    }
    img {
      border-radius: 10px;
    }
  }

  p {
    color: #c8d1d9;
    font-size: 1.5rem;
    @include pc {
      margin-top: 2%;
      margin-left: 40px;
      font-size: 1.9rem;
    }
  }
}
@include pc {
  .pc-wrap {
    display: flex;
  }
}

.skills {
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 60px;
  background-color: #161b22;
  border: 2px solid #c8d1d9;
  padding: 20px;
  border-radius: 10px;

  @include pc {
    margin-right: 1%;
    width: 90%;
  }

  .skills-item {
    margin-bottom: 40px;

    .icon {
      font-size: 100px;
      color: #c8d1d9;
    }

    p {
      margin-top: 12px;
      color: #c8d1d9;
      font-size: 1.5rem;
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
}

.like {
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 10%;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #c8d1d9;

  @include pc {
    margin-left: 1%;
    margin-bottom: 60px;
    width: 40%;
  }
}

.like-items {
  .like-list {
    margin-bottom: 60px;
  }

  p {
    color: #c8d1d9;
    font-size: 2rem;
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
    font-size: 1.5rem;
  }
}
</style>

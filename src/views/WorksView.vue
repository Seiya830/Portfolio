<template>
  <div class="works">
    <div class="works__item">
      <a href="https://green-care.vercel.app/" target="_blank">
        <img
          class="works__thumbnail"
          src="../assets/img/GreenCare.png"
          alt="水やり管理アプリ"
        />
        <div class="works__description">
          <h3 class="works__title">水やり管理アプリ</h3>
          <p class="works__text">
            Nuxt3,MySQL,Prismaを使用して最後に植物に水やりをした日を登録するメモ機能付きアプリケーションです。
          </p>
          <span class="works__github">
            <a href="https://github.com/Seiya830/GreenCare" target="_blank"
              ><i class="devicon-github-original"></i
            ></a>
          </span>
        </div>
      </a>
    </div>
    <div class="works__item">
      <a href="https://seiya830.github.io/sauna-quiz/" target="_blank">
        <img
          class="works__thumbnail"
          src="../assets/img/sauna-quiz.png"
          alt="サウナクイズ"
        />
        <div class="works__description">
          <h3 class="works__title">サウナクイズ</h3>
          <p class="works__text">
            4択クイズ形式でサウナに関する問題を出題するWebアプリケーションです。
          </p>
          <span class="works__github">
            <a href="https://github.com/Seiya830/sauna-quiz" target="_blank"
              ><i class="devicon-github-original"></i
            ></a>
          </span>
        </div>
      </a>
    </div>
    <div class="works__item">
      <a href="https://seiya830.github.io/english-school/" target="_blank">
        <img
          class="works__thumbnail"
          src="../assets/img/english-school.png"
          alt="架空英会話教室サイト"
        />
        <div class="works__description">
          <h3 class="works__title">英会話教室サイト</h3>
          <p class="works__text">
            架空の英会話教室のウェブサイトを模した作品です。
          </p>
          <span class="works__github">
            <a href="https://github.com/Seiya830/english-school" target="_blank"
              ><i class="devicon-github-original"></i
            ></a>
          </span>
        </div>
      </a>
    </div>
    <div class="works__item">
      <a href="https://seiya830.github.io/vue_janken/" target="_blank">
        <img
          class="works__thumbnail"
          src="../assets/img/vue-janken.png"
          alt="Vue3じゃんけんゲーム"
        />
        <div class="works__description">
          <h3 class="works__title">Vue3じゃんけんゲーム</h3>
          <p class="works__text">
            Vue3で作成したじゃんけんゲームです。人間とコンピュータの対戦ができます。
          </p>
          <span class="works__github">
            <a href="https://github.com/Seiya830/vue_janken" target="_blank"
              ><i class="devicon-github-original"></i
            ></a>
          </span>
        </div>
      </a>
    </div>
    <div class="works__item">
      <a href="https://seiya830.github.io/M-Test/" target="_blank">
        <img
          class="works__thumbnail"
          src="../assets/img/m-test.png"
          alt="Mテスト"
        />
        <div class="works__description">
          <h3 class="works__title">Mテスト</h3>
          <p class="works__text">
            鍼灸師の治療法の1つとして使われているものを診断テスト形式で作成しました。
          </p>
          <span class="works__github">
            <a href="https://github.com/Seiya830/M-Test" target="_blank"
              ><i class="devicon-github-original"></i
            ></a>
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/mixin";

.works {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 2rem;
  margin-top: 4rem;
}

.works__item {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.works__thumbnail {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.works__description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  box-sizing: border-box;
  color: #fff;
  transition: all 0.3s ease;
  display: flex;
  @include pc {
    transform: translateY(100%);
  }

  .devicon-github-original {
    font-size: 4rem;
    margin: auto;
  }
}

.works__item:hover .works__description {
  transform: translateY(0);
}

.works__title {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
}

.works__text {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.5rem;
}
</style>

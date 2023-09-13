<script>
import gsap from "gsap";

export default {
  mounted() {
    this.animateText();
  },
  methods: {
    animateText() {
      const textName = document.querySelector("#text-name");
      const textNameAnimation = gsap.from(textName, {
        opacity: 0,
        x: -70,
        duration: 2,
      });

      const textTitle = document.querySelector("#text-title");
      const textTitleAnimation = gsap.from(textTitle, {
        opacity: 0,
        x: 70,
        duration: 2,
      });
    },
  },
};
</script>

<template>
  <div class="top-title">
    <div class="home-text">
      <h2 id="text-name">SEIYA OMORI</h2>
      <h3 id="text-title">Portfolio</h3>
    </div>
  </div>
</template>

<style lang="scss">
.top-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
}

.home-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #c8d1d9;
}

h2 {
  margin: 0;
  font-size: 4rem;
}

h3 {
  margin: 0;
  font-size: 3rem;
}
</style>

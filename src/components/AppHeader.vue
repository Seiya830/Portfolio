<template>
  <header>
    <h1>Home</h1>
    <nav>
      <li>
        <router-link to="/works">Works</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
li {
  list-style: none;
  text-align: center;
  margin-bottom: 45px;
}
</style>

<template>
  <div id="app">
    <div class="container">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container{
  max-width: 800px;
  margin: 0 auto
}
</style>

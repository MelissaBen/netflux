<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import axios from "./core/axios";

export default {
  name: "App",
  components: {},   
}
</script>

<style lang="postcss" scoped>

#app {
  .nav {
    padding: 12px 0px;

    a {
      margin-right: 12px;
    }
  }
}

</style>
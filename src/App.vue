<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>

import axios from "./core/axios";
const default_layout = "default";

export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout ) + '-layout';
    }
  },
  components: {},   
}
</script>

<style lang="postcss" scoped>
 
#app {
   }

</style>
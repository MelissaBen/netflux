<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
        <h2>search</h2>


     <div v-for='search in search' :key='search'>
      <h3>coucou: </h3>  {{search}}
    </div>
   
  </div>
</template>

<script>

import { mapActions } from 'vuex'
export default {
  name: 'myStore',
  data () {
    return {
      msg: 'Welcome to my Vuex Store'
    }
  },
  computed: {
    search() {
    return this.$store.state.search;
        console.log(search)

    }
  },
  methods: {
    ...mapActions(['getSearch'])

  },
  mounted() {
      this.$store.dispatch("getSearch")
  }
}
</script>

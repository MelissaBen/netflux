<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>

     <div v-for='search in search' :key='search.id'>
      <h3>coucou: </h3>  {{search.id}}
    </div>
    <div v-for='show in shows' :key='show.name'>
      <h3>Post Title: </h3>  {{show.url}}
      <h3>Post Body: </h3>  {{show.genres}}

    </div>
   
  </div>
</template>

<script>
export default {
  name: 'myStore',
  data () {
    return {
      msg: 'Welcome to my Vuex Store'
    }
  },
  computed: {
    shows() {
    return this.$store.state.shows
    },
    search() {
    return this.$store.state.search;
        console.log('cc')
    }
  },
  mounted() {
    this.$store.dispatch("getShows" , "getSearch");
  }
}
</script>

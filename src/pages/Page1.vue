<template>
  <div class="hello">
           <Search/>

    <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
    <div v-for='show in shows' :key='show.name'>
      <h3>Post Title: </h3>  {{show.url}}
      <h3>genre: </h3>  {{show.genres}}
    </div>
   >

  </div>
</template>

<script>

import { mapActions } from 'vuex'
import Search from "../components/Search.vue";

export default {
  name: 'myStore',
  components: { Search },   

  data () {
    return {
      msg: 'Welcome to my Vuex Store'
    }
  },
  computed: {
    shows() {
    return this.$store.state.shows;
    },
  },
  methods: {
    ...mapActions(['getShows'])

  },
  mounted() {
      this.$store.dispatch("getShows")
  }
}
</script>

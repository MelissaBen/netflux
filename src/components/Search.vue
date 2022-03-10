<template>
  <div class="">
        <div class="w-25 m-auto">
            <b-form-input v-model="keyword" placeholder="Search"></b-form-input>
        </div>
     <div v-for='search in search' :key='search'>
         <p>{{search.score}}</p>

    </div>
   
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'myStore',
  data () {
    return {
      keyword: '',
    }
  },
 watch: {
  keyword: "getResults"
},
  computed: {
    search() {
    return this.$store.state.search;
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

<template>
  <div class="">
        <div class="w-25 m-auto">
            <b-form-input v-model="keyword" placeholder="Search"></b-form-input>
        </div>
     <div v-for='search in result' :key='search'>
         <p>{{search}}</p>

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
      keyword: 'girls',
      result: null,

    }
  },
  watch: {
    keyword(value){
      console.log(value)
      this.keyword = value; 
      this.search()
    } 
  },
  computed: {
    
  },
  methods: {
    ...mapActions(['getSearch']),

    search() {
      this.$store.dispatch("getSearch", this.keyword )
      this.result = this.$store.state.search;
    }

  },
    mounted() {
        this.$store.dispatch("getSearch", this.keyword )
    }
}
</script>

<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Netflux</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link " to="/shows">Shows</router-link>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" v-model="keyword" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
    </nav> 
    <div v-for='search in result' :key='search'>
         <p>{{search.show.name}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'myStore',
  data () {
    return {
      keyword: '',
      result: null,

    }
  },
  watch: {
    keyword(value){
      this.keyword = value; 
      this.search()
    } 
  },
  computed: {
    
  },
  methods: {

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

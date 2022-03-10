<template>
  <div class="">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    <Search/>
    <div class="container m-5">
      <div v-for='show in shows' :key='show.name'>
          <div class="card d-flex mx-2" style="width: 18rem;">
            <img :src="show.image.original" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title">{{show.name}}</h4>
              <h5 class="card-title">{{show.genres}}</h5>
              <p class="card-text" v-html="show.summary"></p>
              <a href="#" class="btn btn-primary">Link</a>
            </div>
          </div>
      </div>
    </div>
    
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
    }
  },
  computed: {
    shows() {
      return this.$store.state.shows;
    },
  },
  methods: {
    ...mapActions(['getShowsActions'])
  },
  mounted() {
      this.$store.dispatch("getShowsActions")
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

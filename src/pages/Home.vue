<template>
  <div class="">
    <Search/>
    <div class="container m-5">
      <div v-for='show in shows' :key='show.name'>
          <div class="card d-flex mx-2" style="width: 18rem;">
            <img :src="show.image.original" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title">{{show.name}}</h4>
              <h5 class="card-title">{{show.genres}}</h5>
              <p class="card-text" v-html="show.summary"></p>
              <a href="" @click.prevent="$router.push({ name: 'show_details', params: { id: show.id } })" class="btn btn-primary">Link</a>
            </div>
          </div>
      </div>
    </div> 
  </div>
</template>

<script>
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

<template>
  <div class="">
    <Search/>
    <h1>show :</h1>
    <div class="container m-5">
      <p>{{ show }}</p>
    </div> 

    <h1>seasons :</h1>

    <div v-for='season in saisons' :key='season.id'>
         <p>{{season.name}}</p>
    </div>

    <h1>episodes :</h1>
    <div v-for='ep in episodes' :key='ep.id'>
         <p>{{ep}}</p>
         <a href="" @click.prevent="$router.push({ name: 'single_episode', params: { id: ep.id } })" class="btn btn-primary">Link</a>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";

export default {
  name: 'Show',
  components: { Search },   

  data () {
    return {
    //   show: null,
    //   saisons: null,
    //   episodes: null,

    }
  },
  computed: {

    show() {
      return this.$store.state.show;
    },

    saisons() {
      return this.$store.state.saisons;
    },

    episodes() {
      return this.$store.state.episodes;
    },
  },
  methods: {
    getshow() {
        this.$store.dispatch("getSingleShow", this.$route.params.id)
        this.$store.dispatch("getSingleShowSaisons", this.$route.params.id)
        this.$store.dispatch("getSingleShowEpisodes", this.$route.params.id)
    },
  },
  mounted() {
      this.getshow()
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

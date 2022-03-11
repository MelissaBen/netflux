<template>
  <div class="">
    <Search/>
    <h1>Single Episode :</h1>
    <div class="container m-5">
      <p>{{ episode }}</p>
    </div> 
  </div>
</template>

<script>
import Search from "../components/Search.vue";

export default {
  name: 'SingleEpisode',
  components: { Search },   


  computed: {

    episode() {
      return this.$store.state.episode;
    },
  },
  methods: {
    getSingleEpisode() {
        this.$store.dispatch("getSingleEpisode", this.$route.params.id)
    },
  },
  mounted() {
      this.getSingleEpisode()
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

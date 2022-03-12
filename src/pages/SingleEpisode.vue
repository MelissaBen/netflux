<template>
  <div class="">
    <section class="gen-section-padding-3">
    <div class="container">
            <div class="row">
                <div class="col-lg-12">
                <div class="gen-episode-wrapper style-1">
                 <div class="row">
                  <div class="col-lg-12">
                                <div class="gen-video-holder">
                                    <iframe width="100%" height="550px" src="https://www.youtube.com/embed/LXb3EKWsInQ"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                                </div>
                  </div>
                <div class="col-lg-12">
                     <div class="single-episode">
                      <div class="gen-single-tv-show-info">
                                        <h1 class="gen-title">Looking her</h1>
                                        <div class="gen-single-meta-holder">
                                            <ul>
                                                <li>60 min</li>
                                                <li>
                                                    <i class="fas fa-eye">
                                                    </i>
                                                    <span>212 Views</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p> LOREM HHHHHHHHHHHHHHHHHHHHHHHHHHHH</p>
                                        <div class="gen-socail-share">
                                            <h4 class="align-self-center">Social Share :</h4>
                                            <ul class="social-inner">
                                                <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                            </ul>
                                        </div>
                                    
                  
                      </div>
                  </div>
                  </div>
                 </div>
                </div>
                </div>
                </div>
                </div>
    </section>
   
    <div class="container m-5">
     <h1>Single Episode :</h1>
      <p>{{ episode }}</p>
    </div> 
    <div>
      
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

</style>

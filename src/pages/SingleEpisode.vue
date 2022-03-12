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
                    <img v-if="episode" :src="episode.image.original" />
                    <iframe
                      v-else
                      width="100%"
                      height="550px"
                      src="https://www.youtube.com/embed/LXb3EKWsInQ"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="single-episode">
                    <div class="gen-single-tv-show-info">
                      <h1 v-if="episode" class="gen-title">
                        {{ episode.name }}
                      </h1>
                      <h1 v-else class="gen-title">Looking her</h1>
                      <div class="gen-single-meta-holder">
                        <ul>
                          <li v-if="episode">{{ episode.runtime }}min</li>
                          <li v-else>no runtime</li>
                          <li v-if="episode">
                            <span>Season : {{ episode.season }}</span>
                          </li>
                        </ul>
                      </div>
                      <p v-if="episode" v-html="episode.summary"></p>
                      <p v-else>there is no summary for this episode</p>
                      <div class="gen-socail-share">
                        <h4 class="align-self-center">Social Share :</h4>
                        <ul class="social-inner">
                          <li>
                            <a href="#" class="facebook"
                              ><i class="fab fa-facebook-f"></i
                            ></a>
                          </li>
                          <li>
                            <a href="#" class="facebook"
                              ><i class="fab fa-instagram"></i
                            ></a>
                          </li>
                          <li>
                            <a href="#" class="facebook"
                              ><i class="fab fa-twitter"></i
                            ></a>
                          </li>
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
    <div></div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";

export default {
  name: "SingleEpisode",
  components: { Search },

  computed: {
    episode() {
      return this.$store.state.episode;
    },
  },
  methods: {
    getSingleEpisode() {
      this.$store.dispatch("getSingleEpisode", this.$route.params.id);
    },
  },
  mounted() {
    this.getSingleEpisode();
  },
};
</script>
<style scoped>
</style>

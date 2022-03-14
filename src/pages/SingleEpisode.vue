<template>
  <section class="gen-section-padding-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="gen-episode-wrapper style-1">
            <div class="row">
              <div class="col-lg-12">
                <div class="gen-video-holder">
                  <!-- <img v-if="episode" :src="episode.image.original" /> -->
                  <div v-if="episode" class="gen-front-image">
                    <img
                      :src="episode.image.original"
                      alt="owl-carousel-banner-image"
                    />
                    <a
                      href="#"
                      class="playBut popup-youtube popup-vimeo popup-gmaps"
                    >
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="213.7px"
                        height="213.7px"
                        viewBox="0 0 213.7 213.7"
                        enable-background="new 0 0 213.7 213.7"
                        xml:space="preserve"
                      >
                        <polygon
                          class="triangle"
                          id="XMLID_17_"
                          fill="none"
                          stroke-width="7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          points="73.5,62.5 148.5,105.8 73.5,149.1 "
                        ></polygon>
                        <circle
                          class="circle"
                          id="XMLID_18_"
                          fill="none"
                          stroke-width="7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          cx="106.8"
                          cy="106.8"
                          r="103.3"
                        ></circle>
                      </svg>
                      <span>Watch Trailer</span>
                    </a>
                  </div>
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
                        <li v-if="episode">
                          <span>Episode : {{ episode.number }}</span>
                        </li>
                        <li v-if="episode">
                          <span>Air date : {{ episode.airdate }}</span>
                        </li>
                      </ul>
                    </div>
                    <p v-if="episode" v-html="episode.summary"></p>
                    <p v-else>there is no summary for this episode</p>
                    <div class="gen-socail-share">
                      <h4 class="align-self-center">Back :</h4>
                      <ul class="social-inner">
                        <li>
                          <a href="/" class="facebook"
                            ><i class="fa fa-arrow-left"></i
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
img {
  position: relative;
  left: 2%;
  margin-top: 20px;
  height: 550px;
  width: 1500px;
}
</style>

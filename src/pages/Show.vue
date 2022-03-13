<template>
  <div class="">
    <section class="position-relative gen-section-padding-3">
      <div class="tv-single-background">
        <img src="https://picsum.photos/60/60" alt="stream-lab-image" />
      </div>
      <div class="container">
        <div class="col-lg-12">
          <div class="gen-tv-show-wrapper style-1">
            <div class="gen-tv-show-top">
              <div class="row">
                <div class="col-lg-6">
                  <div class="gentech-tv-show-img-holder">
                    <img
                      v-if="show"
                      class="showe"
                      :src="show.image.medium"
                      alt="stream-lab-image"
                    />
                  </div>
                </div>
                <div class="col-lg-6 align-self-center">
                  <div class="gen-single-tv-show-info">
                    <h2 v-if="show" class="gen-title">{{ show.name }}</h2>
                    <div class="gen-single-meta-holder">
                      <ul>
                        <li v-if="show">Duration: {{ show.runtime }}</li>
                        <li v-if="show">Language: {{ show.language }}</li>
                        <li v-if="show">Air date: {{ show.premiered }}</li>
                        <li v-if="show">Type: {{ show.type }}</li>
                        <li v-if="show">
                          <i class="fa fa-star"></i>
                          {{ show.rating.average }}
                        </li>
                      </ul>
                      <ul>
                        <li v-if="show">
                          <h6>Official site:</h6>
                          <a class="site" :href="show.officialSite">
                            {{ show.officialSite }}</a
                          >
                        </li>
                      </ul>
                    </div>
                    <p v-if="show" v-html="show.summary"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="gen-season-holder">
            <ul class="nav">
              <li v-for="season in saisons" :key="season.id" class="nav-item">
                <a
                  v-if="season"
                  class="nav-link"
                  data-toggle="tab"
                  :href="'#season_' + season.number"
                  >Season{{ season.number }}</a
                >
              </li>
            </ul>
            <div class="tab-content">
              <div
                v-for="ep in episodes"
                :key="ep.id"
                :id="'season_' + ep.season"
                class="tab-pane epi-season"
              >
                <div
                  class="owl-carousel owl-loaded owl-drag"
                  data-dots="false"
                  data-nav="true"
                  data-desk_num="4"
                  data-lap_num="3"
                  data-tab_num="2"
                  data-mob_num="1"
                  data-mob_sm="1"
                  data-autoplay="false"
                  data-loop="false"
                  data-margin="30"
                >
                  <div class="item all-ep">
                    <div
                      v-if="ep.season == 1"
                      class="gen-episode-contain episodee"
                    >
                      <div class="gen-episode-img">
                        <img
                          :src="ep.image.medium"
                          class="img-ep"
                          alt="stream-lab-image"
                        />
                        <div class="gen-movie-action">
                          <a href="tv-shows-home.html" class="gen-button">
                            <i class="fa fa-play"></i>
                          </a>
                        </div>
                      </div>
                      <div class="gen-info-contain">
                        <div class="gen-episode-info">
                          <h3>
                            {{ ep.name }} <span>-</span>
                            <a href="#">
                              Episode: {{ ep.number }} season {{ ep.season }}
                            </a>
                          </h3>
                        </div>
                        <div class="gen-single-meta-holder">
                          <ul>
                            <li class="run-time">{{ ep.runtime }}min</li>

                            <li class="release-date">
                              {{ ep.airdate }}
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
      </div>
    </section>
    <!-- <div>
      <form @submit="submitComment">
        <input v-model="form.username" name="username" placeholder="Username" />
        <br />
        <textarea
          class="mt-2"
          v-model="form.content"
          name="content"
          placeholder="Content"
        ></textarea>
        <br />
        <button class="btn btn-outline-success" type="submit">Commenter</button>
      </form>
    </div> -->
    <h1>episodes :</h1>
    <div v-for="ep in episodes" :key="ep.id">
      <p>{{ ep }}</p>
      <a
        href=""
        @click.prevent="
          $router.push({ name: 'single_episode', params: { id: ep.id } })
        "
        class="btn btn-primary"
        >Details</a
      >
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";

export default {
  name: "Show",
  components: { Search },

  data() {
    return {
      form: {
        username: "",
        content: "",
      },
      id: null,
      //   saisons: null,
      //   episodes: null,
    };
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
      this.$store.dispatch("getSingleShow", this.id);
      this.$store.dispatch("getSingleShowSaisons", this.id);
      this.$store.dispatch("getSingleShowEpisodes", this.id);
    },
    submitComment(e) {
      e.preventDefault();
      console.log(this.form);
      console.log(this.saisons);
      this.$store.dispatch("addComment", this.id, this.form);
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getshow();
  },
};
</script>
<style scoped>
.showe {
  width: 100%;
  height: 400px;
}
.site {
  --white-color: red;
  margin-left: 7px;
  font-size: 22px;
}
.img-medium {
  height: 290px;
  width: 370px;
}
.episodee {
  width: 300px;
  height: 223px;
}
.all-ep {
  display: inline-table;
  margin: 20px;
}
.epi-season {
  display: inline-table !important;
}
</style>

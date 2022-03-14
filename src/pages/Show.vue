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
              <li
                v-for="(season, key) in saisons"
                :key="key"
                :class="{ active: key == 1 }"
                class="nav-item"
              >
                <a
                  v-if="season"
                  class="nav-link show"
                  data-toggle="tab"
                  :href="'#season_' + key"
                  >Season{{ key }}</a
                >
              </li>
              <p />
            </ul>
            <div class="tab-content">
              <div
                v-for="(season, key) in saisons"
                :key="key"
                :id="'season_' + key"
                :class="{ active: key == 1 }"
                class="tab-pane show"
              >
                <div v-for="ep in season" :key="ep.id" class="epi-season">
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
                        v-if="ep.season == key"
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
                                Episode: {{ ep.number }} season
                                {{ ep.season }}
                              </a>
                            </h3>
                          </div>
                          <div class="gen-single-meta-holder">
                            <ul>
                              <li class="run-time">{{ ep.runtime }}min</li>

                              <li class="release-date">
                                <a
                                  class="ep-season"
                                  href=""
                                  @click="
                                    $router.push({
                                      name: 'single_episode',
                                      params: { id: ep.id },
                                    })
                                  "
                                  >Details</a
                                >
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
      </div>
    </section>
    <div class="m-auto">
      <form @submit="submitComment">
        <div class="row gt-form">
          <div class="col-md-9 mb-4">
            <input
              type="text"
              v-model="form.username"
              name="username"
              placeholder="Username"
            />
          </div>
          <div class="col-md-9 mb-4">
            <textarea
              v-model="form.content"
              name="content"
              placeholder="Content"
            ></textarea>
          </div>
          <div class="col-md-9 mb-4">
            <button class="btn btn-outline-success" type="submit">
              Commenter
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="widget widget_recent_comments">
      <h2 class="widget-title">Commentaires :</h2>
      <ul id="recentcomments">
        <li
          class="recentcomments"
          v-for="comment in comments"
          :key="comment.id"
        >
          <span class="comment-author-link">
            <a href="#" rel="external nofollow ugc" class="url pl-0"
              >{{ comment.username }} :
            </a>
          </span>
          <a href="#" class="pl-0">{{ comment.content }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "Show",
  components: { },

  data() {
    return {
      form: {
        username: "",
        content: "",
        showId: null,
      },
      id: null,
      comments: null,
    };
  },
  computed: {
    show() {
      return this.$store.state.show;
    },

    saisons() {
      return _.groupBy(this.$store.state.episodes, "season");
    },

    episodes() {
      return this.$store.state.episodes;
    },
    comments() {
      return this.$store.state.comments;
    },
  },
  methods: {
    getshow() {
      this.$store.dispatch("getSingleShow", this.id);
      this.$store.dispatch("getSingleShowSaisons", this.id);
      this.$store.dispatch("getSingleShowEpisodes", this.id);
      this.$store.dispatch("getSingleShowComments", this.id);
      console.log("episodes =>", this.$store.state.saisons);
    },
    submitComment(e) {
      e.preventDefault();
      this.form.showId = this.id;

      this.$store
        .dispatch("addComment", this.form)
        .then((resp) => {
          this.comments = this.$store.state.comments;
          this.form.username = "";
          this.form.content = "";
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  mounted() {
    this.comments = this.$store.state.comments;
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
  margin: 40px;
}
.epi-season {
  display: inline-table !important;
}
.ep-season {
  color: white;
}
</style>

<template>
  <div class="">
    <section class="position-relative gen-section-padding-3">
      <div class="container">
        <div class="col-lg-12">
          <div class="gen-tv-show-wrapper style-1">
            <div class="show-top">
              <div class="row show-container">
                <div class="col-lg-4'">
                  <div class="gentech-tv-show-img-holder">
                    <img
                      v-if="show"
                      class="showe"
                      :src="
                        show.image
                          ? show.image.medium
                          : '/src/images/default_image.png'
                      "
                      alt="stream-lab-image"
                    />
                  </div>
                </div>
                <div class="col-lg-8 align-self-center">
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
              <li v-for="(season, key) in saisons" :key="key" class="nav-item">
                <a
                  v-if="season"
                  class="nav-link show"
                  data-toggle="tab"
                  :class="{ active: key == 1 }"
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
                class="tab-pane show"
                :class="{ active: key == 1 }"
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
                            <a
                              href=""
                              @click="
                                $router.push({
                                  name: 'single_episode',
                                  params: { id: ep.id },
                                })
                              "
                              class="gen-button"
                            >
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

        <div class="container">
          <div class="row">
            <div class="commentaire">
              <form id="pms_login" @submit="addNewComment">
                <h4>Comment</h4>
                <p class="login-username">
                  <label for="user_login">Username</label>
                  <input
                    type="text"
                    v-model="username"
                    name="username"
                    placeholder="Username"
                    class="input"
                    size="20"
                  />
                </p>
                <p class="login-password">
                  <label for="user_pass">Content</label>
                  <textarea
                    v-model="content"
                    name="content"
                    id="user_pass"
                    class="input"
                    size="20"
                    placeholder="content"
                  />
                </p>
                <div class="col-md-9 mb-4">
                  <button class="btn btn-outline" type="submit">Send</button>
                </div>
              </form>
              <div class="widget widget_recent_comments p-5">
                <h2 class="widget-title">Commentaire :</h2>
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
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import _ from "lodash";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  name: "Show",
  setup() {
    const store = useStore();
    const route = useRoute();

    onMounted(() => {
      store.dispatch("getSingleShow", route.params.id);
      store.dispatch("getSingleShowSaisons", route.params.id);
      store.dispatch("getSingleShowEpisodes", route.params.id);
      store.dispatch("getSingleShowComments", route.params.id);
    });

    const id_show = route.params.id;
    const username = ref("");
    const content = ref("");

    const addNewComment = (e) => {
      e.preventDefault();
      store.dispatch("addComment", {
        username: username.value,
        content: content.value,
        showId: id_show,
      });
      store.dispatch("getSingleShowComments", id_show);
      username.value = "";
      content.value = "";
    };

    return {
      username,
      content,
      show: computed(() => store.state.show),
      saisons: computed(() => _.groupBy(store.state.episodes, "season")),
      episodes: computed(() => store.state.episodes),
      comments: computed(() => store.state.comments),
      addNewComment,
    };
  },
};
</script>
<style scoped>
.show-img {
  width: 400px;
  height: 400px;
}

.show-container {
  justify-content: space-between;
  padding-left: 50px;
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

.show-top {
  margin: 90px 0 20px 0;
}
.commentaire {
  display: flex;
}
.widget_recent_comments {
  margin-left: 200px;
}
</style>

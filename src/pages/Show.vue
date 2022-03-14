<template>
  <div class="">
   <section class="position-relative gen-section-padding-3">
   <!-- <div class="tv-single-background">
      <img src="https://picsum.photos/60/60" alt="stream-lab-image">
    </div> -->
    <div class="container">
      <div class="col-lg-12">
        <div class="gen-tv-show-wrapper style-1">
          <div class="gen-tv-show-top">
          <div class="row">
            <div class="col-lg-6">
                  <div class="gentech-tv-show-img-holder">
                      <img  class="show-img" src="https://picsum.photos/600/400" alt="stream-lab-image">
                  </div>
              </div>
                  <div class="col-lg-6 align-self-center">
                  <div class="gen-single-tv-show-info">
                      <h2 class="gen-title">Love In 21st</h2>
                      <div class="gen-single-meta-holder">
                          <ul>
                              <li>2 Seasons</li>
                              <li>9 Episodes</li>
                              <li>2015 to 2016</li>
                              <li>
                                  <a href="#"><span>Action</span></a>
                              </li>
                              <li>
                                  <i class="fas fa-eye">
                                  </i>
                                  <span>5.5K Views</span>
                              </li>
                          </ul>
                      </div>
                      <p>Streamlab is a long established fact that a reader will be distracted by the
                          readable content of a page when Streamlab at its layout. The point of using
                          Lorem Streamlab is that it has a more-or-less normal distribution of
                          Streamlab
                          as opposed Streamlab.</p>
                      <div class="gen-socail-share mt-0">
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
          <div class="gen-season-holder">
            <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link active show" data-toggle="tab" href="#season_0">Season 1</a></li>
                <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#season_1">Season 2</a></li>
              </ul>
            <div class="tab-content"></div>
          </div>
        </div>
      </div>
           
  </section>

    

    <h1>episodes :</h1>
    <div v-for='ep in episodes' :key='ep.id'>
         <p>{{ep}}</p>
         <a href="" @click.prevent="$router.push({ name: 'single_episode', params: { id: ep.id } })" class="btn btn-primary">Link</a>
    </div>

    <div class="m-auto">
      <h1>show :</h1>
      <p>{{ show }}</p>

         <form @submit="submitComment">
            <div class="row gt-form">
                <div class="col-md-9 mb-4">
                  <input type="text" v-model="form.username" name="username" placeholder="Username">
                </div>

                <div class="col-md-9 mb-4">
                  <textarea v-model="form.content" name="content" placeholder="Content"></textarea>
                </div>
                <div class="col-md-9 mb-4">
                  <button class="btn btn-outline-success" type="submit">Commenter</button>
                </div>
                
            </div>
        </form>

    </div>
    <div class="widget widget_recent_comments">
      <h2 class="widget-title">Commentaires : </h2>
      <ul id="recentcomments">
        <li class="recentcomments" v-for='comment in comments' :key='comment.id'>
          <span class="comment-author-link">
            <a href="#" rel="external nofollow ugc" class="url pl-0">{{comment.username}} : </a>
          </span> 
          <a href="#" class="pl-0">{{comment.content}}</a>
        </li>
      </ul>
    </div>
    <h1>seasons :</h1>
    <div v-for='(season, key) in saisons' :key='key'>
         <p>{{key}}</p>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import _ from 'lodash';

export default {
  name: 'Show',
  components: { Search },   

  data () {
    return {
        form: {
            username: '',
            content: '',
            showId: null
        },
        id: null,
        comments: null
    }
  },
  computed: {
    show() {
      return this.$store.state.show;
    },

    saisons() {
      return _.groupBy(this.$store.state.episodes, 'season') 
    },

    episodes() {
      return this.$store.state.episodes;
    },
    comments() {
      return this.$store.state.comments;
    }
  },
  methods: {
    getshow() {
        this.$store.dispatch("getSingleShow", this.id)
        this.$store.dispatch("getSingleShowSaisons", this.id)
        this.$store.dispatch("getSingleShowEpisodes", this.id)
        this.$store.dispatch("getSingleShowComments", this.id)
        console.log('episodes =>', this.$store.state.episodes)
    },
    submitComment(e){
        e.preventDefault();
        this.form.showId = this.id

        this.$store.dispatch("addComment", this.form)
        .then((resp) => {
          this.comments = this.$store.state.comments
          this.form.username = ''
          this.form.content = ''
        })
        .catch(err => {
          console.log(err.response)
        });
    }
  },
  mounted() {
    this.comments = this.$store.state.comments
    this.id = this.$route.params.id
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
  .gentech-tv-show-img-holder {
        margin: 0 0 30px;
    }
    .show-img{
      height:auto;
      max-width:100%;
    }
    
</style>

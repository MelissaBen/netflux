<template>
  <div class="">
   <section class="position-relative gen-section-padding-3">
   <div class="tv-single-background">
            <img src="https://picsum.photos/60/60" alt="stream-lab-image">
        </div>
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
   
    <div class="container m-5">
     <h1>show :</h1>
      <p>{{ show }}</p>
    </div> 

    <div>
        <form @submit="submitComment">
            <input v-model="form.username" name="username" placeholder="Username"> <br>
            <textarea class="mt-2" v-model="form.content" name="content" placeholder="Content"></textarea> <br>
            <button class="btn btn-outline-success" type="submit">Commenter</button>
        </form>

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
        form: {
            username: '',
            content: '',
        },
        id: null,
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
        this.$store.dispatch("getSingleShow", this.id)
        this.$store.dispatch("getSingleShowSaisons", this.id)
        this.$store.dispatch("getSingleShowEpisodes", this.id)
    },
    submitComment(e){
        e.preventDefault();
        console.log(this.form)
        this.$store.dispatch("addComment", this.id, this.form)
    }
  },
  mounted() {
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

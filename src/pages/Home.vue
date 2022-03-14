<template>
  <div>
    <div class="container">
      <div class="gen-section-caroussel">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6">
                <h4 class="gen-heading-title">All</h4>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
                <div class="gen-movie-action">
                  <div class="gen-btn-container text-right">
                      <a href="tv-shows-pagination.html" class="gen-button gen-button-flat">
                        <span class="text">More Videos</span>
                      </a>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <carousel :items-to-show="1.5" class="caroussel-Container">
        <slide v-for='show in shows' :key='show.name'>
            <div class="carousel__item" > 
                <div class="gen-carousel-movies-style-2 movie-grid style-2">
                    <div class="gen-movie-contain">
                        <div class="gen-movie-img"  >
                          <div class="img-caroussel">
                          <img :src="show.image.original" alt="owl-carousel-video-image">
                          </div>
                          <div class="gen-movie-add">
                              <div class="wpulike wpulike-heart">
                                <div class="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button type="button" class="wp_ulike_btn wp_ulike_put_image"></button>
                                </div>
                              </div>
                          </div>
                          <div class="gen-movie-action">
                              <a href="single-movie.html" class="gen-button">
                                <i class="fa fa-play"></i>
                              </a>
                          </div>
                        </div>
                        <div class="gen-info-contain">
                          <div class="gen-movie-info">
                              <h3><a href="" @click.prevent="$router.push({ name: 'show_details', params: { id: show.id } })" >{{show.name}}</a>
                              </h3>
                          </div>
                          <div class="gen-movie-meta-holder">
                              <ul>
                                <li>2hr 00mins</li>
                                <li>
                                    <a href="action.html"><span>{{show.genres}}</span></a>
                                </li>
                              </ul>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
      <div class="gen-section-caroussel">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6">
                <h4 class="gen-heading-title">Horror</h4>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
                <div class="gen-movie-action">
                  <div class="gen-btn-container text-right">
                      <a href="tv-shows-pagination.html" class="gen-button gen-button-flat">
                        <span class="text">More Videos</span>
                      </a>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <carousel :items-to-show="1.5" class="caroussel-Container">
        <slide v-for='show in shows' :key='show.name'>
            <div class="carousel__item" > 
                <div class="gen-carousel-movies-style-2 movie-grid style-2">
                    <div class="gen-movie-contain">
                        <div class="gen-movie-img"  >
                          <div class="img-caroussel">
                          <img :src="show.image.original" alt="owl-carousel-video-image">
                          </div>
                          <div class="gen-movie-add">
                              <div class="wpulike wpulike-heart">
                                <div class="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button type="button" class="wp_ulike_btn wp_ulike_put_image"></button>
                                </div>
                              </div>
                          </div>
                          <div class="gen-movie-action">
                              <a href="single-movie.html" class="gen-button">
                                <i class="fa fa-play"></i>
                              </a>
                          </div>
                        </div>
                        <div class="gen-info-contain">
                          <div class="gen-movie-info">
                              <h3><a href="" @click.prevent="$router.push({ name: 'show_details', params: { id: show.id } })" >{{show.name}}</a>
                              </h3>
                          </div>
                          <div class="gen-movie-meta-holder">
                              <ul>
                                <li>2hr 00mins</li>
                                <li>
                                    <a href="action.html"><span>{{show.genres}}</span></a>
                                </li>
                              </ul>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel> 
      <div class="gen-section-caroussel">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6">
                <h4 class="gen-heading-title">Action</h4>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
                <div class="gen-movie-action">
                  <div class="gen-btn-container text-right">
                      <a href="tv-shows-pagination.html" class="gen-button gen-button-flat">
                        <span class="text">More Videos</span>
                      </a>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <carousel :items-to-show="1.5" class="caroussel-Container">
        <slide v-for='show in shows' :key='show.name'>
            <div class="carousel__item" > 
                <div class="gen-carousel-movies-style-2 movie-grid style-2">
                    <div class="gen-movie-contain">
                        <div class="gen-movie-img"  >
                          <div class="img-caroussel">
                          <img :src="show.image.original" alt="owl-carousel-video-image">
                          </div>
                          <div class="gen-movie-add">
                              <div class="wpulike wpulike-heart">
                                <div class="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button type="button" class="wp_ulike_btn wp_ulike_put_image"></button>
                                </div>
                              </div>
                          </div>
                          <div class="gen-movie-action">
                              <a href="single-movie.html" class="gen-button">
                                <i class="fa fa-play"></i>
                              </a>
                          </div>
                        </div>
                        <div class="gen-info-contain">
                          <div class="gen-movie-info">
                              <h3><a href="" @click.prevent="$router.push({ name: 'show_details', params: { id: show.id } })" >{{show.name}}</a>
                              </h3>
                          </div>
                          <div class="gen-movie-meta-holder">
                              <ul>
                                <li>2hr 00mins</li>
                                <li>
                                    <a href="action.html"><span>{{show.genres}}</span></a>
                                </li>
                              </ul>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel> 
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import Hero from "../components/Hero.vue";
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'myStore',
  components: { Search , Hero,  Carousel,
    Slide,
    Pagination,
    Navigation, },   

  data () {
    return {

    }
  },
  computed: {
    shows() {
      return this.$store.state.shows;
    },
  },
  methods: {
    
  },
  mounted() {
      this.$store.dispatch("getShowsActions");
  }
}
</script>
<style scoped>

  .gen-section-caroussel{
      padding: 20px 80px;
  }

  .carousel {
    padding: 15px 0;
  }
  .carousel__slide {
  
    width: 30% !important;
  }

  .img-caroussel {
    width: 400px;
    height: 400px;

}

@media (max-width: 700px) { 
  .carousel__slide {
    width: 100% !important ;
}
}

</style>

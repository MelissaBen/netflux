<template>
<carousel :items-to-show="1.5" class="caroussel-Container">
    <slide v-for='show in shows' :key='show.id' >
        <slide-item :show="show"> </slide-item>
    </slide>
    <template #addons>
        <navigation />
    </template>
</carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import SlideItem from "./SlideItem.vue";
export default {
  name: 'ItemCarousel',
  components: { 
    SlideItem,
    Carousel,
    Slide,
    Pagination,
    Navigation, 
  },
  props: {
    shows: Object,
    genre: String,
  },

}

</script>

<style scoped>

  .gen-section-caroussel{
      padding: 20px 80px;
  }

  .carousel__prev, .carousel__next {
      background-color: #e50916 !important;
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
  .gen-movie-img img {
        width:300px !important
  }
  .search {
      padding-top: 60px ;
  }

@media (max-width: 700px) { 
  .carousel__slide {
    width: 100% !important ;
}
}

</style>

<template>
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
                        <a href="" @click="$router.push({ name: 'show_details', params: { id: show.id } })" class="gen-button">
                        <i class="fa fa-play"></i>
                        </a>
                    </div>
                </div>
                <div class="gen-info-contain">
                    <div class="gen-movie-info">
                        <h3><a href="" @click="$router.push({ name: 'show_details', params: { id: show.id } })" >{{show.name}}</a>
                        </h3>
                    </div>
                    <div class="gen-movie-meta-holder">
                        <ul>
                        <li>2hr 00mins</li>
                        <li>
                            <a href=""><span>{{show.genres.join(', ')}}</span></a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

 <script>

export default {
  name: 'SlideItem',
  props: {
    show: Object,
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

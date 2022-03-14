<template>
    <div>
        <header id="gen-header" class="gen-header-style-1 gen-has-sticky">
            <div class="gen-bottom-header">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand" href="#">
                                <img class="img-fluid logo" src="src/images/Netflux.png" alt="streamlab-image">
                            </a>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <div id="gen-menu-contain" class="gen-menu-contain">
                                <ul id="gen-main-menu" class="navbar-nav ml-auto">
                                    <li class="menu-item active">
                                        <a href="#" aria-current="page">Home</a>
                                        <i class="fa fa-chevron-down gen-submenu-icon"></i>
                                        <ul class="sub-menu">
                                            <li class="menu-item active">
                                            <a href="index.html" aria-current="page">Main Home</a>
                                            </li>
                                            <li class="menu-item">
                                            <a href="movies-home.html" aria-current="page">Movies Home</a>
                                            </li>
                                            <li class="menu-item">
                                            <a href="tv-shows-home.html" aria-current="page">Tv Shows Home</a>
                                            </li>
                                            <li class="menu-item">
                                            <a href="video-home.html" aria-current="page">Video Home</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item">
                                        <a href="#">Movies</a>
                                        <i class="fa fa-chevron-down gen-submenu-icon"></i>
                                        <ul class="sub-menu">
                                            <li class="menu-item menu-item-has-children">
                                            <a href="#">Movies List</a>
                                            <i class="fa fa-chevron-down gen-submenu-icon"></i>
                                            <ul class="sub-menu">
                                                <li class="menu-item">
                                                    <a href="movies-load-more.html">Load More</a>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="movies-infinite-scroll.html">Infinite scroll</a>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="movies-pagination.html">Pagination</a>
                                                </li>
                                            </ul>
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                            <a href="#">Movies Style</a>
                                            <i class="fa fa-chevron-down gen-submenu-icon"></i>
                                            <ul class="sub-menu">
                                                <li class="menu-item">
                                                    <a href="movies-style-1.html">Style 1</a>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="movies-style-2.html">Style 2</a>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="movies-style-3.html">Style 3</a>
                                                </li>
                                            </ul>
                                            </li>
                                            <li class="menu-item">
                                            <a href="single-movie.html">Single Movie</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div class="gen-header-info-box">
                                <div class="gen-menu-search-block">
                                <a href="javascript:void(0)" id="gen-seacrh-btn"><i class="fa fa-search"></i></a>
                                <div class="gen-search-form">
                                    <form role="search" method="get" class="search-form" action="#">
                                        <label>
                                            <span class="screen-reader-text"></span>
                                            <input  class="search-field" v-model="keyword" type="search" placeholder="Search" aria-label="Search">
                                        </label>
                                        <button type="submit" class="search-submit"><span
                                            class="screen-reader-text"></span></button>
                                    </form>
                                </div>
                                </div>
                            </div>
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fas fa-bars"></i>
                            </button>
                        </nav>
                    </div>
                    </div>
                </div>
            </div>
        </header>
           <!-- Search shows -->
            <div class="container search">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="gen-style-1">
                            <div class="row pt-5">
                                <div class="col-xl-3 col-lg-4 col-md-6"  v-for='search in result' :key='search'>
                                    <div class="gen-carousel-movies-style-1 movie-grid style-1">
                                        <div class="gen-movie-contain">
                                            <div class="gen-movie-img">
                                                <img :src="search.show.image.original" alt="streamlab-image">
                                                <div class="gen-movie-add">
                                                    <div class="wpulike wpulike-heart">
                                                        <div class="wp_ulike_general_class wp_ulike_is_not_liked">
                                                            <button type="button" class="wp_ulike_btn wp_ulike_put_image"></button>
                                                        </div>
                                                    </div>
                                                    <div class="movie-actions--link_add-to-playlist dropdown">
                                                        <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                                                            <i class="fa fa-plus"></i></a>
                                                    </div>
                                                </div>
                                                <div class="gen-movie-action">
                                                    <a href="single-tv-shows.html" class="gen-button">
                                                        <i class="fa fa-play"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="gen-info-contain">
                                                <div class="gen-movie-info">
                                                    <h3><a href="" @click.prevent="$router.push({ name: 'show_details', params: { id: search.show.id } })" >{{search.show.name}}</a></h3>
                                                </div>
                                                <div class="gen-movie-meta-holder">
                                                    <ul>
                                                        <li>
                                                            <a href=""><span>{{search.show.genres}}</span></a>
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
        <slot/>
    </div> 
</template>
<style scoped>
    .gen-movie-img img {
         width:300px !important
    }
    .search {
        padding-top: 60px ;
    }

</style>


 <script>

export default {
  name: 'myStore',
  data () {
    return {
      keyword: '',
      result: null,

    }
  },
  watch: {
    keyword(value){
      this.keyword = value; 
      this.search()
    } 
  },
  computed: {
    
  },
  methods: {

    search() {
      this.$store.dispatch("getSearch", this.keyword )
      this.result = this.$store.state.search;
    }
  },
    mounted() {
        this.$store.dispatch("getSearch", this.keyword )
    }
}
</script>
<template>
    <div>
        <header id="gen-header" class="gen-header-style-1 gen-has-sticky">
            <div class="gen-bottom-header">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand" @click="$router.push('/')">
                                <img class="img-fluid logo" src="src/images/Netflux.png" alt="streamlab-image">
                            </a>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <div id="gen-menu-contain" class="gen-menu-contain">
                                <ul id="gen-main-menu" class="navbar-nav ml-auto">
                                    <li class="menu-item active">
                                        <a href="" @click="$router.push('/')" aria-current="page">Home</a>                                      
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
        <div class="gen-section-padding-3"></div> 
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

    }
  },
  watch: {
    keyword(value){
      this.$router.push('/');
      this.keyword = value; 
      this.search()
    } 
  },
  computed: {
    
  },
  methods: {

    search() {
      this.$store.dispatch("getSearch", this.keyword )
    }

  }
}
</script>
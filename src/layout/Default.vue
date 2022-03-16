<template>
  <div>
    <header id="gen-header" class="gen-header-style-1 gen-has-sticky">
      <div class="gen-bottom-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" @click="$router.push('/')">
                  <img
                    class="img-fluid logo"
                    src="/src/images/Netflux.png"
                    alt="streamlab-image"
                  />
                </a>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div id="gen-menu-contain" class="gen-menu-contain">
                    <ul id="gen-main-menu" class="navbar-nav ml-auto">
                      <li class="menu-item active">
                        <a
                          href=""
                          @click="$router.push('/')"
                          aria-current="page"
                          >Home</a
                        >
                      </li>
                      <li class="menu-item">
                        <a href="#">Movies</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="gen-header-info-box">
                  <div class="gen-menu-search-block">
                    <a href="javascript:void(0)" id="gen-seacrh-btn"
                      ><i class="fa fa-search"></i
                    ></a>
                    <div class="gen-search-form">
                      <form
                        role="search"
                        method="get"
                        class="search-form"
                        action="#"
                      >
                        <label>
                          <span class="screen-reader-text"></span>
                          <input
                            class="search-field"
                            v-model="keyword"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </label>
                        <button type="submit" class="search-submit">
                          <span class="screen-reader-text"></span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="fas fa-bars"></i>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Search shows -->
    <div v-if="keyword" class="gen-section-padding-3"></div>
    <slot />
  </div>
</template>
<style scoped>
.gen-movie-img img {
  width: 300px !important;
}
.search {
  padding-top: 60px;
}
</style>


 <script>
import { useStore } from "vuex";
import { watch, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: 'Default',

  setup() {
    const store = useStore()
    const router = useRouter()
    const keyword = ref("")
    const toggler = ref(false)

    watch(keyword, (value) => {
      store.dispatch("getSearch", value);
      router.push("/");
    });

    const searchToggler = e => {
      e.preventDefault()
      toggler.value = toggler.value ? false : true
    }

    return {
      searchToggler,
      toggler,
      keyword,
    };
  }
}

</script>

<style scoped>
    .gen-form-show {
        display: block;
    }
    .gen-form-hide {
        display: none;
    }
</style>

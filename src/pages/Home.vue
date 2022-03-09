<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">TV Series</h2>

          <div>
            <div class="card">
              <div class="card-content">
                <div class="content">
                  
                  <div class="field">
                    <input class="input" name="firstName" placeholder="Tv series"  />
                  </div>
              
                </div>
              </div>
              <footer class="card-footer">
                <button class="link card-footer-item">
                  <i class="fas fa-search"></i>
                  <span>Search</span>
                </button>
              </footer>
            </div>

          </div>

          <ul>
            <li>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div class="name">lorem</div>
                  </div>
                </div>
                <footer class="card-footer">
                  <button
                    class="link card-footer-item"
                  >
                    <i class="fas fa-plus"></i>
                    <span>View more</span>
                  </button>
                </footer>
              </div>
            </li>
          </ul>

        </div>
        <div class="notification is-info">ffff</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TvShows',
  data() {
    return {
    };
  },
  components: {
  },
  async created() {
    // await this.loadTvShows();
    // console.log(this.tvShows[0].show);
  },
  methods: {
  },
  computed: {
  },
};
</script>

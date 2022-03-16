<template>
<div class="gen-section-caroussel">
    <div class="row">
    <div class="col-xl-6 col-lg-6 col-md-6">
        <h4 class="gen-heading-title">{{ title }}</h4>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
        <div class="gen-movie-action">
            <div class="gen-btn-container text-right">
                <!-- <a href="#" class="gen-button gen-button-flat">
                <span class="text">More Videos</span>
                </a> -->
            </div>
        </div>
    </div>
    </div>
</div>
</template>

 <script>

export default {
  name: 'CarouselHeader',
  props: {
    title: String,
  },
}

</script>
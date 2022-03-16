<template>
<div class="gen-carousel-movies-style-1 movie-grid style-1">
    <div class="gen-movie-contain">
        <div class="gen-movie-img">
            <img :src="search.show.image ? search.show.image.original : '/src/images/default_image.png'" alt="streamlab-image">
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
                    <a  href="" @click="$router.push({ name: 'show_details', params: { id: search.show.id } })" class="gen-button">
                    <i class="fa fa-play"></i>
                    </a>
            </div>
        </div>
        <div class="gen-info-contain">
            <div class="gen-movie-info">
                    <h3><a href="" @click="$router.push({ name: 'show_details', params: { id: search.show.id } })" >{{search.show.name}}</a></h3>
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
</template>

 <script>

export default {
  name: 'SeachItem',
  props: {
    search: Object,
  },
}

</script>
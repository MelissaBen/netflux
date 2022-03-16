<template>
  <div>
    <SeachResult v-if="searches" :searches="searches" />
    <section class="container">

      <CarouselHeader title="All"/>
      <item-carousel :shows="shows"></item-carousel>

      <CarouselHeader title="Horror"/>
      <item-carousel :shows="shows" genre="Horror"></item-carousel>

      <CarouselHeader title="Action"/>
      <item-carousel :shows="shows" genre="Action"></item-carousel>

    </section>


  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import SeachResult from "../components/SeachResult.vue";
import CarouselHeader from "../components/CarouselHeader.vue";
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
import _ from "lodash";
import ItemCarousel from '../components/ItemCarousel.vue';

export default {
  name: 'myStore',
  components: { 
    Hero,  
    SeachResult,
    CarouselHeader,
    ItemCarousel,
  },

  setup() {
    const store = useStore()
    
    onMounted(() => {
      store.dispatch("getShowsActions");
    });

    return {
      searches: computed(() => store.state.search),
      shows: computed(() => store.state.shows),
    };
  }
}
</script>
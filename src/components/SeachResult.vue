<template>
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div class="gen-style-1">
                <div class="row pt-5">
                    <div class="col-xl-3 col-lg-4 col-md-6" v-for='search in searches' :key='search.show.id'>
                        <SeachItem :search="search" />
                    </div>
                </div>
            </div>
        </div> 
    </div>
</div>
</template>

 <script>
 import SeachItem from "./SeachItem.vue";
export default {
  name: 'SeachResult',
  components: { 
    SeachItem,
  },
  props: {
    searches: Object,
  },
}
</script>
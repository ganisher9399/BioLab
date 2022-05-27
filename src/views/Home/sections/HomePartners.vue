<template>
   <section class="home-partners">
      <div class="container">
        <TheTitle :sub="langsubtitle.sub[lengss]" :title="langsubtitle.title[lengss]" />

        <div class="slider">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="img in images_array" :key="img">
              <img :src="img" alt="brend">
            </swiper-slide>
           </swiper>
           <swiper class="swiper-l-r">
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>  
        </div>
      </div>
   </section>
</template>


<script>
import TheTitle from '../../../layouts/TheTitle.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'
// import { mapGetters, mapActions } from 'vuex';



export default {
  components: { TheTitle, Swiper, SwiperSlide},


   data(){
    return {
   
      langsubtitle: {
       sub: {
          en: 'Partners',
          ru: 'Партнеры',
          uz: 'Hamkorlar',
       },
       title: {
          en: 'Our new partner',
          ru: 'Наш новый партнер',
          uz: 'Bizning yangi hamkorimiz',
       }
      },

      lengss: 'en',
    

      swiperOptions: {
        pagination: { el: '.swiper-pagination' },
        slidesPerView: 4,
        loop: true,
        speed: 5000,
	      autoplay: { delay: 0},
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          731:{
            slidesPerView: 2,
            spaceBetween: 20
          },
          971:{
            slidesPerView: 3,
            spaceBetween: 20
          },
          1681:{
            slidesPerView: 4,
            spaceBetween: 20
          },
      
        }
      
        
      },
      images_array: [
        require('@/images/brands/b1.png'),
        require('@/images/brands/b2.png'),
        require('@/images/brands/b3.png'),
        require('@/images/brands/b4.png'),
      ]
    }  
  },

  methods: { 


   
    // ...mapActions(["getPartners"]),
  },

  computed: { 

    // ...mapGetters(["partners_list"]),
  },

  mounted(){ 
    // this.getPartners();

  },


};
</script>


<style lang="scss">


  @import '../styles/home-partners.scss';
</style>
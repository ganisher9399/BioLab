<template>
   <section class="products">
       <div class="container">
          <TheTitle :sub="sub" :title="title" />

          <swiper class="swiper2" ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="itm in Cotolog" :key="itm.id">

            <Cotolog class="Cotolog">
              <img :src="itm.img" :alt="itm.title">
              <div class="catolog-text">
                  <h4 class="title">{{ itm.title }}</h4>
                  <p class="id">{{ itm.id }}</p>
                  <span class="old-price">{{ itm.old_price }}</span>
                  <div class="new">
                      <div class="new-price">{{ itm.new_price }}</div>
                      <i :class="itm.icon"></i>
                  </div>
              </div>
            </Cotolog>

            </swiper-slide>

             <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
   
       </div>
   </section>
</template>


<script>

import TheTitle from '../../../layouts/TheTitle.vue';
import Cotolog from '../../../layouts/Cotolog.vue';
import catolog_array from '../../../frags/catolog_array.js';
//swiper import
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


export default {
  components: { TheTitle, Cotolog, Swiper, SwiperSlide },
  data(){
    return{
      sub: 'Our Products',
      title: 'Top products that have won the ...',
      Cotolog: catolog_array,
      swiperOptions: {
        pagination: { el: '.swiper-pagination' },
        slidesPerView: 4,
        loop: true,
	      autoplay: { delay: 4000 },
        	    
        breakpoints: {
      
          0: {
            slidesPerView: 1.2,
            spaceBetween: 20
          },      
          550: {
            slidesPerView: 1.3,
            spaceBetween: 20
          },
          731:{
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1150:{
            slidesPerView: 3,
            spaceBetween: 35,
          },
          1681:{
            slidesPerView: 4,
            spaceBetween: 40,
          },
      
        }
      },


    }
  }
}
</script>


<style lang="scss">
  @import '../styles/Products.scss';
</style>
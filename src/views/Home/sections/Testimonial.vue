<template>
  <section class="testimonial">
      <div class="container">
         <TheTitle :sub="sub" :title="title" />
         <div class="customers">
           <div class="customers-box"></div>
         </div>
      </div>
  </section>
</template>


<script>
import TheTitle from '../../../layouts/TheTitle.vue';

export default {
  components: {TheTitle,},
  data(){
    return {
      sub: 'Testimonial',
      title: 'We Care About Our Customers Experience Too',
    }
  }    
}
</script>


<style lang="scss">
  @import '../styles/Testimonial.scss';
</style>
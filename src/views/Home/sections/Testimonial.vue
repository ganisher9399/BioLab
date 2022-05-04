<template>
  <section class="testimonial">
      <div class="container">
         <TheTitle :sub="sub" :title="title" />
         <div class="customers">
           <div class="customers_box">
            <img src="../../../images/users/user1.png" alt="">
            <p>
              We are idea generators, goal seekers, challenge-thirsty professionals, 
              creators of unique Internet projects.  in which we become partners with 
              our clients, on the road to perfection. 
            </p>
            <h6>Abdulatif Barbarisov</h6>
            <p>CEO Barbaris Medical Clinic</p>
           </div>
           <div class="customers_box">
            <img src="../../../images/users/user2.png" alt="">
            <p>
              We are idea generators, goal seekers, challenge-thirsty professionals, 
              creators of unique Internet projects.  in which we become partners with 
              our clients, on the road to perfection. 
            </p>
            <h6>Abdulatif Barbarisov</h6>
            <p>CEO Barbaris Medical Clinic</p>
           </div>
           <div class="customers_box">
            <img src="../../../images/users/user3.png" alt="">
            <p>
              We are idea generators, goal seekers, challenge-thirsty professionals, 
              creators of unique Internet projects.  in which we become partners with 
              our clients, on the road to perfection. 
            </p>
            <h6>Abdulatif Barbarisov</h6>
            <p>CEO Barbaris Medical Clinic</p>
           </div>                      
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
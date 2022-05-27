<template>
    <footer class="footer">
        <div class="for-form">
           <div class="container">
                <ContactForm />
           </div>
        </div>

        <div class="footer-content">
          <div class="container">
            <div class="item">
              <div class="logo">
                  <img src="../images/logo/logo.png" alt="">
                  <h2>Bio Lab</h2>
              </div>

              <p class="text">Copyright &copy; 2020 BioLab</p>
              <p class="text">All rights reserved.</p>

              <ul class="footer-social">
                <li v-for="social in socials" :key="social.icon">
                    <a :href="social.link"><i :class="social.icon"></i></a>
                </li>
              </ul>
            </div>
            
            <div class="item">
              <h4 class="title">About</h4>
              <p class="text">
                We are idea generators, goal seekers, challenge-thirsty 
                professionals, creators of unique Internet projects. 
                We deliver unconventional solutions
                each project is a meaningful adventure, 
                in which we become partners with our clients, 
                on the road to perfection. 
              </p>
            </div>

            <div class="item">
              <h4 class="title">Contact</h4>
              <p class="text">
                We are idea generators, goal seekers, 
                challenge-thirsty professionals, creators 
                of unique Internet projects. We deliver unconventional 
                solutions each project. 
              </p>
            </div>     

            <div class="item">
              <h4 class="title">Location</h4>
              
              <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.2777486694577!2d69.28877905222268!3d41.31169018661333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b327528fb7f%3A0x674b29b391ca2957!2z0KHQvtC30LTQsNC90LjQtSBj0LDQudGC0L7QsiDQsiDQotCw0YjQutC10L3RgtC1IC8g0JzQsNGA0LrQtdGC0LjQvdCzINCyINGB0L7RhtC40LDQu9GM0L3Ri9GFINGB0LXRgtGP0YUgKFNNTSkg0Lgg0J_QvtC40YHQutC-0LLQsNGPINC-0L_RgtC40LzQuNC30LDRhtC40Y8gKFNFTykg0L7RgiBPbmxpbmUgU2VydmljZSBHcm91cCAtIE9TRy51eg!5e0!3m2!1sru!2s!4v1650908939573!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>                      

          </div>
        </div>
    </footer>
</template>


<script>

import ContactForm from './ContactForm.vue'
import socials_arry from '../frags/social.arry.js'

export default {
    components: {
        ContactForm,
    },
    data(){
      return{
        socials: socials_arry,
      }   
    }
}
</script>


<style lang="scss" scoped>
  @import './styles/footer.scss';
</style>
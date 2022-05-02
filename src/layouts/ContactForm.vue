<template>
    <div class="contact-form">
        <div class="content">
            <h3>Contact us</h3>
            <h2>Contact with us</h2>
            <p>There are many variations of passages of 
                Lorem Ipsum available  but the majority have suffered alteration 
                in some formed humour .
            </p>
            <ul class="social">
                <li v-for="item in socials" :key="item.icon">
                    <a :href="item.link"><i :class="item.icon"></i></a>
                </li>
            </ul>
        </div>

        <form @click.prevent class="form">
            <input class="input" type="email" placeholder="Enter your Email ...">
            <textarea class="input" placeholder="Enter your comments ..."></textarea>
            <div class="form-btn">
              <TheButton> Send </TheButton>
            </div>
        </form>
    </div>
</template>


<script>
import TheButton from './TheButton.vue'
import social_array from '../frags/social.arry.js'

export default {
   components: {
       TheButton,
   },
   data(){
      return {
        socials: social_array, 
      }
   } 
}
</script>


<style lang="scss">
    @import './styles/contact-form.scss';
</style>
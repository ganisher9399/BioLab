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

        <form class="form" @submit.prevent="sendComment">
            <input class="input" type="email" placeholder="Enter your Email ..." v-model="gm">
            <textarea class="input" placeholder="Enter your comments ..." v-model="com"></textarea>
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
        tokin: '5247852882:AAH-v3nzD-kFRm1P9M4D2P-iGuMBOrcGfBg',
        chatId: '-649993032',
        gm: '',
        com: '',
      }
   },
   methods:{
       async sendComment(){
           const gmail = JSON.stringify('Email: '+this.gm);
           const comment = JSON.stringify('Comment : '+this.com);
           await fetch(`https://api.telegram.org/bot${this.tokin}/sendMessage?chat_id=${this.chatId}&parse_mode=html&text=${gmail} ${comment}`);
           this.gm = '';
           this.com = '';
       }
   } 
}
</script>


<style lang="scss">
    @import './styles/contact-form.scss';
</style>
<template>
    <section class="home-main">
       <div class="container">
           <!-- content-wrapper -->
            <ContentWrapper > 
                <h3 class="subtitle">{{subtitle}}</h3>
                <h1 class="title">{{title}}</h1>
                <p class="text">{{text}}</p>
                <div class="buttons">
                    <!--buttonst 2  -->
                    <TheButton>Get started</TheButton>
                    <TheButton :light="true">Catalog</TheButton>
                </div>
            </ContentWrapper>
        
           <div class="banner">
              <img :src="banner_image" alt="logo main">
            </div>
            <div class="home-socials">
              <a :href="item.link" class="sci-link" v-for="item in social_array" :key="item.icon">
                <i :class="item.icon"></i>
              </a>
            </div>           
       </div>
    </section>
</template>


<script>

import TheButton from '../../../layouts/TheButton.vue'
import ContentWrapper from '../components/content-wrapper.vue'
import Social_array from '@/frags/social.arry.js'

export default {
    components: { TheButton, ContentWrapper },
    data(){
      return {
        subtitle: 'Get Started',
        title: 'Get Started & Work with Us.',
        text: 'When, while lovely valley teems with vapour around meand meridiansun strikes the upper impenetrable .foliage of my trees, and but a  thousand. unknown plants  are noticed by when I hear the buzz of the little world among the  and grow familiar with the.  unknown plants  are noticed by when I hear the buzz of the little world among the stalks,  and grow familiar with the. unknown plants  are noticed by when I hear the buzz of the little world among the stalks, and grow familiar with the.',
        banner_image: require('../../../images/sections/mainf.png') , 
        social_array: Social_array,
     }
    }
}
</script>


<style lang="scss">
@import '../styles/main-section.scss';



</style>
<template>
  <section class="choose-us">
    <div class="container">
      <!-- content-wrapper -->
      <ContentWrapper> 
        <h3 class="subtitle">{{subtitle}}</h3>
        <h1 class="title">{{title}}</h1>
        <p class="text">{{text}}</p>
        <div class="buttons">
            <!--buttonst 2  -->
            <TheButton>Show more...</TheButton>
        </div>
      </ContentWrapper>
      <!-- content-wrapper -->
      <div class="choose-us-img">
        <img :src="require('@/images/chooseUs/choseus1.png')" alt="choose-us-img1">
        <img :src="require('@/images/chooseUs/choseus2.png')" alt="choose-us-img2">
      </div>
    </div>
  </section>
</template>


<script>

import ContentWrapper from "../components/content-wrapper.vue"
import TheButton from '../../../layouts/TheButton.vue'


export default {
  components: {
    ContentWrapper,
    TheButton
  },
  data(){
    return{
      subtitle: 'Why  choose us',
      title: 'An Exceptiolly Unique Experience Tailored To You ',
      text: `We are idea generators, goal  seekers,  challenge-thirsty professionals, creators of unique I seekers,  challenge-thirsty prof generators, goal  seekers,  challenge-thirsty professionals, creators of unique I seekers,  challenge-thirsty professionals, creators of unique I challenge-thirsty professionals, creators of unique Internet projects. We deliver unconventional solutions each project is a meaningful adventure in which we become partners with our clients, on the road to perfection. `,
      

    }
  }
}
</script>


<style lang="scss">
  @import '../styles/ChooseUs-section.scss';

</style>
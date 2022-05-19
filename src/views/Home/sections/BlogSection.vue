<template>
  <section class="blog_section">
     <div class="container">
        <TheTitle :sub="sub" :title="title" />
        
        <div class="father_box" >
          <div class="blog_box" v-for="ind in box" :key="ind.title">
            <img :src="ind.img" :alt="ind.data">
            <div class="box">       
              <p>{{ ind.data }}</p>
              <h4>{{ ind.title }}</h4>
            </div>
          </div>
   
        </div>

        <div class="buttons">
          <span @click="$router.push({ name: 'Blog' })">
            <TheButton :light="true" >Show more...</TheButton>
          </span> 
        </div>
     </div>
  </section>
</template>


<script>
import TheTitle from '../../../layouts/TheTitle.vue'
import TheButton from '../../../layouts/TheButton.vue'
import Blog_arrey from '../../../frags/blog_arrey.js'

export default {
    components: {
      TheTitle,
      TheButton,
    },
    data(){
      return {
        sub: 'Blog',
        title: 'Latest News',
        box: Blog_arrey,
      }
    },

    mounted() {
      this.box.splice(3, this.box.length-3);
    }

  
    
    

    
    
}
</script>


<style lang="scss">
 @import '../styles/BlogSection.scss';   
</style>
<template>
    <div>
      <Main /> 
      <HomePartners />
      <ChooseUser />
      <Products />
      <Testimonial />
      <BlogSection />
    </div>
</template>


<script>

import Main from './sections/Main.vue';
import HomePartners from './sections/HomePartners.vue';
import ChooseUser from './sections/ChooseUs.vue';
import Products from './sections/Products.vue';
import Testimonial from './sections/Testimonial.vue';
import BlogSection from './sections/BlogSection.vue';

export default {
  components: {
    Main,
    HomePartners,
    ChooseUser,
    Products,
    Testimonial,
    BlogSection,
  },

    
}
</script>


<style lang="scss">
    
</style>
<template>
   <section class="section-contacts">
      <TheTitle />
      <Contact />
   </section>
</template>


<script>
import TheTitle from './sections/The-title.vue'
import Contact from './sections/Contact-info.vue'

export default {
  components: { TheTitle, Contact },
 
}
</script>


<style lang="scss">
  .section-contacts{
    width: 100%;
    padding: 100px 0;
  }
</style>
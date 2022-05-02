<template>
  <div id="app">
    <Navbar />
     <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './layouts/Navbar'
import Footer from './layouts/TheFooter'

export default {
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style lang="scss">
@import './fonts/_fonts.scss';
@import './styles/main.scss';

</style>

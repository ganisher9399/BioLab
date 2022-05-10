<template>
   <header class="header" :class="{ active: is_navber_active }">
      <div class="container">
          <nav class="navbar">
            <div class="logo">
              <a href="/">
                <img src="../images/logo/logo.png" alt="">
                <span>Bio Lab</span>
              </a>
            </div>
            <ul class="menu" v-if="!is_mobile">
              <li v-for="item in menu_array" :key="item.text">
                <router-link class="link" :to="{ name: item.link }" >{{ item.text[leng] }}</router-link>
              </li>
            </ul>

            <div class="mobile-menu" v-if="is_mobile" :class="{ active: is_menu_open}">
              <ul>
                <li v-for="item in menu_array" :key="item.text">
                  <router-link class="link" :to="{ mame: item.link }">
                        {{ item.text[leng] }}
                  </router-link>
                </li>
              </ul>
              <div class="mobile-search">
                <i class="fas fa-search"></i>
                <span>Search</span>
              </div>
            </div>

            <div class="actions">
              <div class="search" >
                <i class="fas fa-search"  v-if="!is_mobile"></i>
              </div>
        <!-- leng start -->
              <div class="language" @click="toggleDropdown">
                <span>{{lengs}}</span>
                <i 
                class="fas fa-angle-down"
                :style="{ transform: is_dropdown_open ? 'rotate(180deg)' : 'rotate(0deg)'  }"
                ></i>
                
                <ul class="dropdown" :class="{ active: is_dropdown_open }" >
                  <li @click="uzbb">UZB</li>
                  <li @click="russ">RUS</li>
                  <li @click="engg">ENG</li>
                </ul>
              </div>
        <!-- leng end -->        
            </div>

            <div class="burger" v-if="is_mobile" @click="is_menu_open = !is_menu_open">
              <burger-btn :is_active="is_menu_open"></burger-btn>
            </div>
            
          </nav>
      </div>
   </header>
</template>


<script>
import menu from '@/frags/menu_array.js'
import burgerBtn from './_burger-btn.vue'


export default {
  components: {
    burgerBtn,
  },
  data(){
    return {
      is_dropdown_open: false,
      is_menu_open: false,
      is_mobile: false,
      menu_array: menu,
      breakpoint_width: 970,
      is_navber_active: false,
      leng: 'en',
      lengs: 'eng'
    }
  },
  methods: {
    russ() {
      this.lengs = 'rus';
      this.leng = 'ru'
    },
    uzbb() {
      this.lengs = 'uzb';
      this.leng = 'uz'
    },   
    engg() {
      this.lengs = 'eng';
      this.leng = 'en'
    },     
    toggleDropdown() {
      this.is_dropdown_open = !this.is_dropdown_open
    },
    checkWindowWidth() {
      const width = window.innerWidth
      if(width < this.breakpoint_width){
        this.is_mobile = true
        return
      }

        this.is_mobile = false
        this.is_menu_open = false
    },

  },
  mounted() {
    this.checkWindowWidth()
    window.addEventListener('resize', this.checkWindowWidth)
    window.addEventListener('scroll', () => {
      window.pageYOffset > 0 ? this.is_navber_active = true : this.is_navber_active = false
      
    })
  }, 

}
</script>


<style lang="scss">

 @import './styles/Navbar.scss';
    
</style>
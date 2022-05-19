import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueI18n from 'vue-i18n'
// import i18n from './frags/menu_array.js'



Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




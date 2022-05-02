import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const api = 'gs://fotos-87118.appspot.com/fotos.json';



export default new Vuex.Store({

  state: {
    partners: null,
 
  },
  getters: {
    // partners_list: (state) => state.partners,
    // just: async (state) => await state.partners
  },
  mutations: {
    // setPartnersList(state, data){
    //   state.partners = data
    // }
  },
  actions: {
    // async getPartners({ commit }) {
    //   const res = await axios.get(api)
    //   commit('setPartnersList', data.data)
    // }
  },
  modules: {
  }
})

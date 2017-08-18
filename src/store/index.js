import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import menu from './menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    menu
  }
})

export default store

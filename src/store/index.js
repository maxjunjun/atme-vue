import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import menu from './menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters: {
    loading: state => state.loading,
    sidebar: state => state.sidebar,
    device: state => state.device
  },

  state: {
    loading: false,
    sidebar: {
      collapsed: false,
      show: true
    },
    device: {
      isMobile: false
    }
  },

  mutations: {
    TOGGLE_DEVICE(state, isMobile) {
      state.device.isMobile = isMobile
    },
    TOGGLE_LOADING(state) {
      state.loading = !state.loading
    },
    TOGGLE_SIDEBAR(state, collapsed) {
      if (collapsed == null) collapsed = !state.sidebar.collapsed
      state.sidebar.collapsed = collapsed
    },
    TOGGLE_SIDEBAR_SHOW(state, show) {
      if (show === null) {
        state.sidebar.show = !state.sidebar.show
      } else {
        state.sidebar.show = show
      }
    }
  },
  actions: {
    toggleLoading: ({ commit }) => commit('TOGGLE_LOADING'),
    loadMenuList: () => {
      console.log()
    }
  },
  modules: {
    user,
    menu
  }
})

export default store

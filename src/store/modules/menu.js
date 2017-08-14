/**
 * Created by majun on 2017/8/14.
 */
import { constantRouterMap } from '@Router'
const menu = {
  state: {
    menus: constantRouterMap,
    addMenus: []
  },

  mutations: {
    SET_MENUS: (state, menus) => {
      state.menus = constantRouterMap.concat(menus)
      state.addMenus = menus
    }
  },

  actions: {
    // 设置菜单
    setMenus({ commit }, menus) {
      return new Promise(resolve => {
        commit('SET_MENUS', menus)
        resolve();
      })
    }
  },

  getters: {
    menus: state => state.menus,
    addMenus: state => state.addMenus
  }
}

export default menu

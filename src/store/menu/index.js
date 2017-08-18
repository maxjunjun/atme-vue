/**
 * Created by majun on 2017/8/14.
 */
import { constantRouterMap, menuRouterMap } from '~router'
const menu = {
  state: {
    menus: menuRouterMap,
  },

  mutations: {
    SET_MENUS: (state, menus) => {
      state.menus = constantRouterMap.concat(menus)
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
    menus: state => state.menus
  }
}

export default menu

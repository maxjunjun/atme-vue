/**
 * Created by majun on 2017/8/14.
 */
import { constantRouterMap, menuRouterMap } from '~router'
import * as types from './mutations_types'

const menu = {
  state: {
    menus: menuRouterMap,
    menuList: [
      {
        id: 1,
        parentId: null,
        sort: 0,
        name: '仪表盘',
        href: '/index',
        icon: 'fa fa-dashboard',
        children: [],
        isShow: '1'
      }
    ]
  },

  mutations: {
    [types.SET_MENUS]: (state, menus) => {
      state.menuList = constantRouterMap.concat(menus)
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
    menuList: state => state.menuList
  }
}

export default menu

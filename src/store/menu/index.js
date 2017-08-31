/**
 * Created by majun on 2017/8/14.
 */
import { constantRouterMap, pathMap } from '~router'
import * as types from './mutations_types'

const menu = {
  state: {
    paths: pathMap,
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
    menuList: state => state.menuList,
    paths: state => state.paths
  }
}

export default menu

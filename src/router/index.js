import Vue from 'vue'
import Router from 'vue-router'

import menuRouterMap from './menu'
import constantRouterMap from './constant'

Vue.use(Router)

export default new Router({
  strict: process.env.NODE_ENV !== 'production',
  // model: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    ...constantRouterMap,
    ...menuRouterMap
    // demo
    /* {
      path: '*',
      redirect: '/'
    } */
  ]
})

export { menuRouterMap, constantRouterMap }


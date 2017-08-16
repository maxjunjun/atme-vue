import Vue from 'vue'
import Router from 'vue-router'

import system from './system'

// 需要权限的路由
export const authRouterMap = [
  system
]

export const constantRouterMap = [
  {
    path: '/',
    component: null,
    name: '首页',
    hidden: true
  },
  { path: '/login', component: null, hidden: true },
  { path: '/404', component: null, hidden: true },
  { path: '/401', component: null, hidden: true }
]

Vue.use(Router)

export default new Router({
  strict: process.env.NODE_ENV !== 'production',
  // model: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    ...constantRouterMap,
    ...authRouterMap
    // demo
    /*{
      path: '*',
      redirect: '/'
    }*/
  ]
})



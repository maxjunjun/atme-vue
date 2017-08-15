import Vue from 'vue'
import Router from 'vue-router'
import _import from './import'

import demo from './menu/demo'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: _import('demo', true),
    name: '首页',
    hidden: true
  },
  { path: '/login', component: _import('demo', true), hidden: true },
  { path: '/404', component: _import('demo', true), hidden: true },
  { path: '/401', component: _import('demo', true), hidden: true }
]

// 需要权限的路由
export const authRouterMap = [
  ...demo
]

export default new Router({
  strict: process.env.NODE_ENV !== 'production',
  // mode: 'history',
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



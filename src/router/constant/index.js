/**
 * Created by majun on 2017/8/17.
 */

export default [
  {
    path: '/',
    component: null,
    name: '首页',
    code: 'home',
    redirect: '/system/about',
    hidden: true
  },
  { path: '/login',
    name: '登陆',
    code: 'login',
    component: null,
    hidden: true
  },
  { path: '/404', component: null, hidden: true },
  { path: '/401', component: null, hidden: true }
]

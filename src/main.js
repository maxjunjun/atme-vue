import Vue from 'vue'
import App from './App'
import router, { asyncRouterMap } from './router'
import store from './store'
import fetch from './utils/fetch'
import logger from './utils/logger'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/* 设置vue全局变量 */
Vue.prototype.$fetch = fetch
Vue.prototype.$logger = logger

router.beforeEach((to, from, next) => {
  console.log(123123123123)
  NProgress.start() // 开启Progress
  if (store.getters.addMenus.length <= 0) {
    store.dispatch('setMenus', asyncRouterMap).then(() => { // 生成可访问的路由表
      console.log(store.getters.addMenus)
      router.addRoutes(store.getters.addMenus)
      next({ ...to })
    })
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

Vue.config.devtools = true

Vue.config.productionTip = false

// 生产环境错误日志
if (process.env.NODE_ENV === 'production') {
  Vue.config.errorHandler = err => {
    logger.error(err)
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

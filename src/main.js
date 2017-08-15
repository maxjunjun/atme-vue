import Vue from 'vue'
import './utils/logger' // 日志
import App from './App'
import router, { authRouterMap } from './router'
import store from './store'
import fetch from './utils/fetch' // http请求
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css'

/* 设置vue全局变量 */
Vue.prototype.$fetch = fetch

router.beforeEach((to, from, next) => {
  NProgress.start() // 开启Progress
  next()
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

Vue.config.devtools = true

Vue.config.productionTip = false

// 生产环境错误日志
if (process.env.NODE_ENV === 'production') {
  Vue.config.errorHandler = err => {
    console.error(err)
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

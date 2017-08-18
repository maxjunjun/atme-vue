import Vue from 'vue'

import { Logger } from './utils' // 日志
import App from './App'
import router, { menuRouterMap } from './router'
import store from './store'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import './register'
Vue.use(ElementUI)
window.Logger =  Logger

console.info(menuRouterMap)

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

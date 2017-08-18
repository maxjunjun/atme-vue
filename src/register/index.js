/**
 * Created by majun on 2017/5/11.
 */
import Vue from 'vue'
import _ from 'underscore'
import libs from './lib'
import cps from './component'
import plugins from './plugin'

/**
 * 把一些全局对象和一些全局方法，注册到Vue原型上
 */
Vue.use({
  install(Vue, options) {
    // Vue.mixin()

    //注册第三方库
    _.each(libs, (item, key) => {
      Vue.prototype[ '$' + key ] = item
    })

    //注册全局方法，如常用的接口方法，工具方法等。
    _.each(plugins, (item, key) => {
      Vue.prototype[ '$' + key ] = item
    })
  }
});


_.each(cps, (item, key) => {
  var cp_name = key.replace(/([A-Z])/g, "-$1").toLowerCase()
  if (cp_name && cp_name[ 0 ] === '-') {
    cp_name = cp_name.replace('-', '')
  }
  Vue.component(cp_name, item)
});




/**
 * Created by majun on 2017/6/20.
 */

import Vue from 'vue'

export default function () {
  Vue.directive('demo', {
    bind: function (el, binding, vnode) {
      var s = JSON.stringify
      console.log(el)
    }
  })
}

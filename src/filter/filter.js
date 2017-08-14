/**
 * Created by atme on 2017/7/14.
 */

import Vue from 'vue'

/**
 * 保留小数点后num位
 */
Vue.filter('toFixed', function (value, num = 2) {
  return parseFloat(value).toFixed(num)
})

/**
 * 格式时间
 */
Vue.filter('replace', function (value, separator1 = '-', separator2) {
  if (separator2) {
    do {
      value = value.replace(separator1, separator2)
    } while (value.indexOf(separator1) !== -1)
    return value
  } else {
    return value.replace(/\//g, separator1)
  }
})

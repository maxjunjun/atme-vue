'use strict'

import _ from 'lodash'
import Timeago from 'timeago.js'

var SIGN_REGEXP = /([yMdhsm])(\1*)/g
var DEFAULT_PATTERN = 'yyyy-MM-dd'
function padding (s, len) {
  var len = len - (s + '').length
  for (var i = 0; i < len; i++) { s = '0' + s }
  return s
};

let getCheck = {
  checkEmail (val) {
    var filter = /^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (filter.test(val)) {
      return true
    } else {
      return false
    }
  },
  checkPhone (val) {
    var filter = /^1\d{10}$/

    if (filter.test(val)) {
      return true
    } else {
      return false
    }
  }
}

/**
 * 从文本中提取出@usrname 标记的用户名数组
 * @param {String} text 文本内容
 * @return {Array} 用户名数组
 */
const fetchUsers = (text) => {
  if (!text) {
    return []
  }

  var ignoreRegexs = [
    /```.+?```/g, // 去除单行的 ```
    /^```[\s\S]+?^```/gm, // ``` 里面的是 pre 标签内容
    /`[\s\S]+?`/g, // 同一行中，`some code` 中内容也不该被解析
    /^.*/gm, // 4个空格也是 pre 标签，在这里 . 不会匹配换行
    /\b\S*?@[^\s]*?\..+?\b/g, // somebody@gmail.com 会被去除
    /\[@.+?\\]\(\/.+?\)/g // 已经被 link 的 usrname
  ]

  ignoreRegexs.forEach((ignoreRegex) => {
    text = text.replace(ignoreRegex, '')
  })

  var results = text.match(/@[a-z0-9\-_]+\b/igm)
  var names = []
  if (results) {
    for (var i = 0, l = results.length; i < l; i++) {
      var s = results[i]
            // remove leading char @
      s = s.slice(1)
      names.push(s)
    }
  }
  names = _.uniq(names)
  return names
}

/**
 * 根据文本内容，替换为数据库中的数据
 * @param {String} text 文本内容
 * @param {Function} callback 回调函数
 */
const linkUsers = (text) => {
  var users = fetchUsers(text)
  for (var i = 0, l = users.length; i < l; i++) {
    var name = users[i]
    text = text.replace(new RegExp('@' + name + '\\b(?!\\])', 'g'), '[@' + name + '](/user/' + name + ')')
  }
  return text
}

/**
 *   对Date的扩展，将 Date 转化为指定格式的String
 *   月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 *   年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *   例子：
 *   (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423
 *   (new Date()).Format('yyyy-M-d h:m:s.S')      ==> 2006-7-2 8:9:4.18
 */
const fmtDate = (date, fmt) => { // author: meizz
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

/**
 * 调用Timeago库显示到现在的时间
 */
const MillisecondToDate = (time) => {
  var str = ''
  if (time !== null && time !== '') {
    let timeagoInstance = new Timeago()
    str = timeagoInstance.format(time, 'zh_CN')
  }
  return str
}

/**
 * 格式化日期或时间
 * @param {string} time 需要格式化的时间
 * @param {bool} friendly 是否是fromNow
 */
exports.getLastTimeStr = (time, friendly) => {
  if (friendly) {
    return MillisecondToDate(time)
  } else {
    return fmtDate(new Date(time), 'yyyy-MM-dd hh:mm')
  }
}

/**
 * 配置节流函数
 * @param  {[Function]}  fn     [要执行的函数]
 * @param  {[Number]}  delay    [延迟执行的毫秒数]
 * @param  {[Number]}  mustRun  [至少多久执行一次]
 * @return {[Function]}         [节流函数]
 */
exports.throttle = (fn, wait, mustRun) => {
  let timeout
  let startTime = new Date()
  return function () {
    let context = this
    let args = arguments
    let curTime = new Date()

    clearTimeout(timeout)
        // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= mustRun) {
      fn.apply(context, args)
      startTime = curTime
            // 没达到触发间隔，重新设定定时器
    } else {
      timeout = setTimeout(fn, wait)
    }
  }
}

exports.linkUsers = linkUsers
exports.fetchUsers = fetchUsers
exports.getCheck = getCheck
exports.fmtDate = fmtDate
exports.MillisecondToDate = MillisecondToDate

export default {
  getQueryStringByName: function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    var context = ''
    if (r != null) { context = r[2] }
    reg = null
    r = null
    return context == null || context == '' || context == 'undefined' ? '' : context
  },
  formatDate: {

    format: function (date, pattern) {
      pattern = pattern || DEFAULT_PATTERN
      return pattern.replace(SIGN_REGEXP, function ($0) {
        switch ($0.charAt(0)) {
          case 'y': return padding(date.getFullYear(), $0.length)
          case 'M': return padding(date.getMonth() + 1, $0.length)
          case 'd': return padding(date.getDate(), $0.length)
          case 'w': return date.getDay() + 1
          case 'h': return padding(date.getHours(), $0.length)
          case 'm': return padding(date.getMinutes(), $0.length)
          case 's': return padding(date.getSeconds(), $0.length)
        }
      })
    },
    parse: function (dateString, pattern) {
      var matchs1 = pattern.match(SIGN_REGEXP)
      var matchs2 = dateString.match(/(\d)+/g)
      if (matchs1.length == matchs2.length) {
        var _date = new Date(1970, 0, 1)
        for (var i = 0; i < matchs1.length; i++) {
          var _int = parseInt(matchs2[i])
          var sign = matchs1[i]
          switch (sign.charAt(0)) {
            case 'y': _date.setFullYear(_int); break
            case 'M': _date.setMonth(_int - 1); break
            case 'd': _date.setDate(_int); break
            case 'h': _date.setHours(_int); break
            case 'm': _date.setMinutes(_int); break
            case 's': _date.setSeconds(_int); break
          }
        }
        return _date
      }
      return null
    }

  }

}

/**
 * Created by Admin on 2017/4/14.
 */

export default function () {
  if (location.host.indexOf('ctacgroup') != -1) {
    var _hmt = _hmt || [];
    (function () {
      var hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?aa2a6ff01725bb02462c84856f23cf4c'
      var s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    })()
  }
}

/**
 * Created by majun on 2017/8/8.
 */

const DEBUG = process.env.DEBUG

const logger = {
  info(param, ...params) {
    if (DEBUG) {
      console.info(param, ...params, window.location.href)
    }
  },
  warn(param, ...params) {
    if (DEBUG) {
      console.warn(param, ...params, window.location.href)
    }
  },
  error(param, ...params) {
    if (DEBUG) {
      console.error(param, ...params, window.location.href)
    }
  },
  log(param, ...params) {
    if (DEBUG) {
      console.log(param, ...params, window.location.href)
    }
  },
  alert(param) {
    if (DEBUG) {
      alert(param)
    }
  }
}

export default logger

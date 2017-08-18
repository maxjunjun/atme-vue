/**
 * Created by majun on 2017/8/8.
 */

const DEBUG = process.env.DEBUG

 class Logger {
   constructor(className = ''){
     this.className = className
   }
  info(param, ...params) {
    if (DEBUG) {
      console.info(param, ...params, "output: " + this.className)
    }
  }
  warn(param, ...params) {
    if (DEBUG) {
      console.warn(param, ...params, "output: "+ this.className)
    }
  }
  error(param, ...params) {
    if (DEBUG) {
      console.error(param, ...params, "output: " + this.className)
    }
  }
  log(param, ...params) {
    if (DEBUG) {
      console.log(param, ...params, "output: " + this.className)
    }
  }
  alert(param) {
    if (DEBUG) {
      alert(param)
    }
  }
}

export default Logger

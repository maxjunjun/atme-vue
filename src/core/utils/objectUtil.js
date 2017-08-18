/**
 * Created by majun on 2017/8/17.
 */
export default {
  isArray(object){
    return object && typeof object === 'object' &&
      Array == object.constructor;
  }
}

/**
 * Created by majun on 2017/8/14.
 */
export default (name, index = false) => require(`@Page/${name}${index ? '/index' : ''}.vue`)

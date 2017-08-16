/**
 * Created by majun on 2017/8/14.
 */
const _import = require(`~utils/${process.env.NODE_ENV === 'development' ? 'lazyLoading' : 'lazyLoading'}`)

export default _import

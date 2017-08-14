/**
 * Created by majun on 2017/8/14.
 */
const _import = require(`@Utils/${process.env.NODE_ENV === 'development' ? 'loading' : 'lazyLoading'}`)

export default _import

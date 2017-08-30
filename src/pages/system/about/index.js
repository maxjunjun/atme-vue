/**
 * Created by majun on 2017/8/30.
 */
const About = r => require.ensure([], () => r(require('./about.vue')), 'about')

export default { About }
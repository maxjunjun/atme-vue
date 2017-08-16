/**
 * Created by majun on 2017/8/15.
 */
import Demo from './demo'

const About = r => require.ensure([], () => r(require('./about')), 'about')
export default {
  Demo,
  About
}

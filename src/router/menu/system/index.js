/**
 * Created by majun on 2017/8/15.
 */
import { Home } from '~layout'

import Demo from './demo'
import About from './about'

export default {
  path: '/system',
  name: '系统管理',
  code: 'system',
  component: Home,
  redirect: '/system/demo',
  children: [Demo, About]
}

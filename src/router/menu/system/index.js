/**
 * Created by majun on 2017/8/15.
 */
import { Content, Home } from '~layout'

import Demo from './demo'
import About from './about'

export default {
  path: '/system',
  name: '系统管理',
  component: Home,
  redirect: '/system/demo',
  children:[ Demo, About ]
};

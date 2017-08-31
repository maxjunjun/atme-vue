/**
 * Created by majun on 2017/8/11.
 */
import { Content } from '~layout'
import { System } from '~pages'

export default {
  path: 'demo',
  name: 'demo',
  code: 'demo',
  component: Content,
  redirect: '/system/demo/list',
  children: [{
    path: 'list',
    name: 'demo-list',
    code: 'demo-list',
    component: System.Demo.List
  }, {
    path: 'edit',
    name: 'demo-edit',
    code: 'demo-edit',
    component: System.Demo.Edit
  }]
}

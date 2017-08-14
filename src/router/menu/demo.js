/**
 * Created by majun on 2017/8/11.
 */
import _import from '../import'

export default [{
  path: '/demo',
  meta: {
    icon: 'fa-building-o',
    expanded: false,
    label: 'Components'
  },
  component: _import('demo', true),
  children: [
    // demo
    {
      name: 'demo',
      path: 'demo',
      component: _import('demo', true)
    }
  ]
}]

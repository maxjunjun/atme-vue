/**
 * Created by majun on 2017/8/11.
 */
import _import from '../import'

export default [{
  path: '/demo',
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

import Vue from 'vue'
import Router from 'vue-router'

import menuRouterMap from './menu'
import constantRouterMap from './constant'

Vue.use(Router)

export default new Router({
  strict: process.env.NODE_ENV !== 'production',
  // model: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    ...constantRouterMap,
    ...menuRouterMap,
    {
      path: '*',
      redirect: '/'
    }
  ]
})

const pathMap = {}

function renderRouter(routers, path = '') {
  routers.forEach(item => {
    const newPath = path + '/' + item.path.replace('/', '')
    const children = item.children
    if (children) {
      renderRouter(item.children, newPath)
    } else {
      pathMap[ item.code ] = newPath
    }
  })
}
renderRouter(menuRouterMap)

export { menuRouterMap, constantRouterMap, pathMap }


/**
 * Created by majun on 2017/8/17.
 */
import { menuRouterMap } from '~router'

const routerMap = {}

function renderRouter(routers, path = '') {
  routers.forEach(item => {
    const newPath = path + '/' + item.path.replace('/', '')
    const children = item.children
    if (children) {
      renderRouter(item.children, newPath)
    } else {
      routerMap[item.name] = newPath
    }
  })
}
renderRouter(menuRouterMap)


export default {
  getPath(name) {
    return routerMap[name]
  }
}

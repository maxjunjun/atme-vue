/**
 * Created by majun on 2017/8/17.
 */
import { menuRouterMap } from '~router'
let routerMap = {}
function renderRouter(routers, path = '') {
  routers.forEach(item => {
    let newPath = path + '/' + item.path.replace('/','')
    let children = item.children
    if(children) {
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

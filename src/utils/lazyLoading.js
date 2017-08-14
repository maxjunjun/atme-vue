// lazy loading Components
export default (name, index = false) => () => import(`@Page/${name}${index ? '/index' : ''}.vue`)


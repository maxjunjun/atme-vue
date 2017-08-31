import subMenu from './subMenu.vue'
import ScrollBar from 'vue2-scrollbar'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import 'vue2-scrollbar/dist/style/vue2-scrollbar.css'

export default {
  name: 'left-menu',
  props: {
    show: Boolean
  },
  data() {
    return {}
  },
  components: {
    subMenu,
    ScrollBar
  },
  computed: {
    ...mapGetters({
      sidebar: 'sidebar',
      device: 'device'
    }),
    onRoutes() {
      return this.$route.path
    },
    onRouteKeys() {
      const getParentArray = (path, ms, kas = []) => {
        if (ms && ms.length > 0) {
          for (let k = 0, length = ms.length; k < length; k++) {
            if (path === ms[ k ].href) {
              kas.push(ms[ k ].href)
              break
            }
            const i = kas.length
            if (ms[ k ].children && ms[ k ].children.length > 0) {
              getParentArray(path, ms[ k ].children, kas)
            }
            if (i < kas.length) {
              kas.push(ms[ k ].href)
            }
          }
        }
        return kas.reverse()
      }
      return getParentArray(this.$route.path, this.menuList)
    },
    // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      'menuList'
    ])
  },
  mounted() {
    const route = this.$route
    console.log(route)
    /* if (route.name) {
      this.shouldExpandMatchItem(route)
    } */
  },
  created: () => this.load(),
  methods: {
    handleSelect() {
      if (this.device.isMobile) {
        this.toggleSidebarShow(false)
      }
    },
    ...mapMutations({
      toggleSidebarShow: 'TOGGLE_SIDEBAR_SHOW'
    }),
    ...mapActions({
      load: 'loadMenuList' // 映射 this.load() 为 this.$store.dispatch('loadMenuList')
    })
  }
}
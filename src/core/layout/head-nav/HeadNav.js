import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'head-nav',
  data() {
    return {
      showMessageBox: false,
      showProfileBox: false,
      list: [],
      count: 4,
      show: true
    }
  },
  computed: mapGetters({
    sidebar: 'sidebar',
    userInfo: 'getUserinfo',
    device: 'device'
  }),
  methods: {
    toggleMenu(collapsed, isMobile) {
      if (isMobile) {
        this.toggleSidebarShow()
      } else {
        this.toggleSidebar()
      }
    },
    logout() {
      /* this.$http.get(api.TEST_DATA)
       .then(res => {
       auth.logout()
       this.$http.defaults.headers.common['authSid'] = ''
       this.$router.push({path: '/login'})
       }) */
    },
    ...mapMutations({
      toggleSidebar: 'TOGGLE_SIDEBAR',
      toggleSidebarShow: 'TOGGLE_SIDEBAR_SHOW',
      setUserInfo: 'SET_USER_INFO'
    }),
    toggleMessage() {
      this.showMessageBox = !this.showMessageBox
    },
    toggleProfile() {
      this.showProfileBox = !this.showProfileBox
    },
    autoHide(evt) {
      if (!this.$el.querySelector('li.messages-menu').contains(evt.target)) {
        this.showMessageBox = false
      }
      if (!this.$el.querySelector('li.user-menu').contains(evt.target)) {
        this.showProfileBox = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.autoHide, false)
  },
  destroyed() {
    document.removeEventListener('click', this.autoHide, false)
  }
}
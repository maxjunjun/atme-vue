<template>
  <div class="wrapper fixed">
    <head-nav></head-nav>
    <left-menu></left-menu>
    <div class="content-wrapper" :class="{ slideCollapse: sidebar.collapsed,mobileSide:device.isMobile}">
      <section class="content">
        <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
          <router-view></router-view>
        </transition>
      </section>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>
<script type="text/ecmascript-6">
  import HeadNav from '../head-nav'
  import FootNav from '../foot-nav'
  import LeftMenu from '../left-menu'
  import Bread from '../bread'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'home',
    components: {
      HeadNav, LeftMenu, Bread, FootNav
    },
    computed: {
      ...mapGetters({
        sidebar: 'sidebar',
        device: 'device'
      })
    },
    data: () => {
      return {
        active: true,
        headerFixed: true,
        breadcrumb: []
      }
    },
    methods: {
      ...mapMutations({
        toggleDevice: 'TOGGLE_DEVICE',
        toggleSidebar: 'TOGGLE_SIDEBAR',
        toggleSidebarShow: 'TOGGLE_SIDEBAR_SHOW'
      })
    },
    beforeMount() {
      const { body } = document
      const WIDTH = 784
      const handler = () => {
        if (!document.hidden) {
          const rect = body.getBoundingClientRect()
          const isMobile = rect.width < WIDTH
          this.toggleDevice(isMobile)
          if (isMobile) {
            this.toggleSidebarShow(false)
            this.toggleSidebar(false)
          } else {
            this.toggleSidebarShow(true)
          }
        }
      }
      document.addEventListener('visibilitychange', handler)
      window.addEventListener('DOMContentLoaded', handler)
      window.addEventListener('resize', handler)
    }
  }
</script>
<style>
  .animated {
    animation-duration: .2s;
  }

  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0;
  }

  *, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .content-wrapper {
    -webkit-transition: -webkit-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    -moz-transition: -moz-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    -o-transition: -o-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    margin-left: 230px;
    padding-top: 50px;
    min-height: 100%;
  }

  .content-wrapper .content {
    padding: 1.25rem;
  }

  .content-wrapper.slideCollapse {
    margin-left: 44px;
  }

  .content-wrapper.mobileSide {
    margin-left: 0px;
  }
</style>

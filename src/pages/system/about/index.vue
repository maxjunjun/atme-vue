<template>
  <div>
    <div>{{user.name}} , welcome to atme-vue !</div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import { authService } from '~service'
  const logger = new Logger('/system/about/index')
  export default {
    name: 'demo',
    data () {
      return {}
    },
    computed: {
      user () {
        return this.$store.getters.getUserinfo
      }
    },
    created () {

      this.$store.dispatch('update_userinfo', { name: 'atme' }).then(() => {
        // this.user = this.$store.state.user.userinfo
      })

      this.$fetch.get('/').then(data => {
        logger.info(data)
      })

      authService.getConfig({ type: '1', url: 'http://aaaa' }).then(data => {
        logger.info(data)
      }).catch(err => {
        logger.info(err)
      })

      logger.info(this.$routerUtil.getPath('about'))
    }
  }
</script>

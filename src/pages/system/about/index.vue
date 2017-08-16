<template>
  <div>
    <div>{{user.name}} , welcome to atme-vue !</div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getConfig } from '~service/demo'
  const logger = new Logger('/system/about/index')
  export default {
    name: 'demo',
    data () {
      return {
        user: this.$store.getters.user
      }
    },
    created () {
      this.$store.dispatch('setName', 'atme')
      getConfig({ type: '1', url: 'http://aaaa' }).then(data => {
        logger.info(this.$store.getters.user)
      }).catch(err => {
        logger.info(err)
      })
    }
  }
</script>

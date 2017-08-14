<template>
  <div>
    <div>{{user.name}} , welcome to atme-vue !</div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getConfig } from '@Api/demo'
  export default {
    name: 'demo',
    data () {
      return {
        user: this.$store.state.user
      }
    },
    created () {
      this.$store.dispatch('setName', 'atme')
      getConfig({ type: '1', url: 'http://aaaa' }).then(data => {
        this.$logger.info(this.$store.getters.user)
      }).catch(err => {
        this.$logger.info(err)
      })
    }
  }
</script>

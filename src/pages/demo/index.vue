<template>
  <div>
    <div>{{user.name}} , welcome to atme-vue !</div>
    <img src="../../assets/img/ctac.jpg"/>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getConfig } from '@Service/demo'
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
        this.$logger.info(this.$store.getters.user)
      }).catch(err => {
        this.$logger.info(err)
      })
    }
  }
</script>

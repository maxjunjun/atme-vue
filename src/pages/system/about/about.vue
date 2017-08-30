<template>
  <div>
    <div>{{user.name}} , welcome to atme-vue !</div>
    <div>自定义过滤器：{{number | toFixed}}</div>
    <img src="../../../assets/logo-sm.png">
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import AboutJs from './about'
  export default AboutJs
</script>

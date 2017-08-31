<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'content'
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>

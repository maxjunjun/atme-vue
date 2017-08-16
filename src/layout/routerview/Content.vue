<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>
<script>
    export default {
        name: 'content'
    }
</script>

<style lang='scss'>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>

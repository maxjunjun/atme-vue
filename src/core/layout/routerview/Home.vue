<template>
  <div class="home">
    <head-nav></head-nav>
    <div class="left-fixed-right-auto">
      <left-menu></left-menu>
      <div class="right-content">
        <div class="content">
          <bread></bread>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import HeadNav from '../head-nav'
  import LeftMenu from '../left-menu'
  import Bread from '../bread'

  export default {
    name: 'home',
    components: {
      HeadNav, LeftMenu, Bread
    }
  }
</script>
<style lang='scss'>
  .content {
    margin-top: 60px;
    /*background: #f1f2f7;*/
    background: #FFF;
    padding: 16px;
  }

  .right-content {
    margin-bottom: 60px;
  }
</style>

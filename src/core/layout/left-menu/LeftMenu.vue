<template>
  <aside class="main-sidebar animated"
         :class="{ showSlide: sidebar.show, hideSlide: !sidebar.show, expandSide:(!sidebar.collapsed||device.isMobile)}">
    <scroll-bar class="vue-scrollbar" v-if="(!sidebar.collapsed||device.isMobile)">
      <div class="sidebar">
        <el-menu :default-active="onRoutes"
                 :default-openeds="onRouteKeys"
                 class="el-menu-vertical-demo"
                 theme="dark" router :collapse="sidebar.collapsed&&!device.isMobile" @select="handleSelect">
          <template v-for="item in menuList">
            <sub-menu :param="item"></sub-menu>
          </template>
        </el-menu>
      </div>
    </scroll-bar>
    <div class="sidebar" v-else>
      <el-menu :default-active="onRoutes"
               :default-openeds="onRouteKeys"
               class="el-menu-vertical-demo"
               theme="dark" router :collapse="sidebar.collapsed&&!device.isMobile" @select="handleSelect">
        <template v-for="item in menuList">
          <sub-menu :param="item"></sub-menu>
        </template>
      </el-menu>
    </div>
  </aside>
</template>
<script type="text/ecmascript-6">
  import LeftMenu from './LeftMenu.js'
  export default LeftMenu
</script>
<style>
  @import "LeftMenu.css";
</style>

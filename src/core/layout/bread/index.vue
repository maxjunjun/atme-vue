<template>
  <div class='bread'>
    <strong>
      {{strong}}
    </strong>
    <el-breadcrumb separator="/" class='el-bread'>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
              v-for='(item,index) in $route.matched'
              :key='index'>{{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'bread',
    data() {
      return {
        strong: ''
      }
    }
  }
</script>

<style lang='scss'>
  .bread {
    height: 40px;
    line-height: 26px;

  .el-bread {
    display: inline-block;
    float: right;
    text-align: right;
    line-height: 26px;
  }

  }
</style>

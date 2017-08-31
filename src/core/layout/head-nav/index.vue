<template>
    <header class="main-header animated" :class="{closeLogo:sidebar.collapsed,mobileLogo:device.isMobile}">

        <!-- Logo -->
        <a href="#" class="logo">
            <span class="logo-lg">&nbsp;&nbsp; <b>Vue-Admin</b></span>
        </a>

        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button"
               @click.stop.prevent="toggleMenu(!sidebar.collapsed,device.isMobile)">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <!-- Navbar Right Menu -->
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <!-- Messages: style can be found in dropdown.less-->
                    <li class="dropdown messages-menu">
                        <a href="#" class="dropdown-toggle" @click.stop.prevent="showMessageBox=!showMessageBox">
                            <i class="fa fa-envelope-o"></i>
                            <span class="label label-success">{{count}}</span>
                        </a>
                        <ul class="dropdown-menu" v-if="showMessageBox">
                            <li class="header">您有{{count}}条消息</li>
                            <li>
                                <!-- inner menu: contains the actual data -->
                                <ul class="menu">
                                    <li v-for="item in list"><!-- start message -->
                                        <router-link :to="{path:'/img/process/result',query:{id:item.entityId}}">
                                            <p>{{item.title}}</p>
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#">查看所有</a></li>
                        </ul>
                    </li>
                    <!-- User Account: style can be found in dropdown.less -->
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" @click.stop.prevent="showProfileBox=!showProfileBox">
                            <img src="../../../assets/img/user2-160x160.jpg" class="user-image" alt="User Image">
                            <span class="hidden-xs">{{userInfo.name}}</span>
                        </a>
                        <ul class="dropdown-menu" v-if="showProfileBox">
                            <!-- User image -->
                            <li class="user-header">
                                <img src="../../../assets/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                                <p>
                                    {{userInfo.name}} - Web Developer
                                </p>
                            </li>
                            <!-- Menu Body -->
                            <li class="user-body">
                                <div class="row">
                                    <div class="col-xs-4 text-center">
                                        <a href="#">Followers</a>
                                    </div>
                                </div>
                                <!-- /.row -->
                            </li>
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-left">
                                    <router-link :to="{ path: '/resetPwd' }">
                                        <el-button type="default">修改密码</el-button>
                                    </router-link>
                                </div>
                                <div class="pull-right">
                                    <el-button type="default" @click="logout">退出</el-button>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

        </nav>

    </header>
</template>

<script>
	import HeadNavJs from './HeadNav.js'
	export default HeadNavJs
</script>

<style>
    @import "./HeadNav.css";
</style>

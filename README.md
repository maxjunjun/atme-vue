# atme-vue
采用vue2.0,vue-router,vuex,axios搭的一套vue脚手架，优点是项目结构清晰完善，可以直接用来当作企业开发框架

**注意：该项目目前使用element-ui@1.4.1版本，所以最低兼容 Vue 2.3.0**

## 前言
> 看过大多数开源的vue项目都是很简单的项目结构，只适合个人开发，所以自己搭了一套vue脚手架，能够胜任多人合作开发, 并且解决了开发，测试，正式环境构建的问题


## 开发
```bash
    # 克隆项目
    git clone https://github.com/maxjunjun/atme-vue.git

    # 安装依赖
    npm install

    # 本地开发 开启服务
    npm run dev
```
浏览器访问 http://localhost:8080/#/system/about

## 发布
```bash
    # 构建测试环境
    npm run build-test

    # 构建生成环境
    npm run build-prod
```

## 目录结构
```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── apis                   // 所有请求
│   ├── assets                 // 静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filtres                // 全局filter
│   ├── mock                   // mock数据
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── utils                  // 全局公用方法
│   ├── pages                  // 视图
|   ├── core                   // 核心内容
|   |   ├── constants          // 常量
|   |   ├── directive          // 指令
|   |   ├── filter             // 过滤器 
|   |   ├── layout             // 布局 
|   |   ├── register           // 工具，组件，过滤器注册
|   |   └── utils              // 工具类
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── static                     // 第三方不打包资源

├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json

```

## License

MIT

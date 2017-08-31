# atme-vue
采用vue2.0,vue-router,vuex,axios搭的一套vue脚手架

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
    npm run build:test

    # 构建生成环境
    npm run build:prod
```

## 目录结构
```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── apis                   // 所有请求
│   ├── assets                 // 静态资源
│   ├── components             // 全局公用组件
│   ├── modules                // 业务组件
│   ├── directive              // 全局指令
│   ├── filters                // 全局filter
│   ├── mock                   // mock数据
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── utils                  // 全局公用方法
│   ├── pages                  // 视图
│   ├── service                // 业务逻辑
│     ├── core                   // 核心内容
│     │    ├── constants        // 常量
│     │    ├── directive        // 指令
│     │    ├── filter           // 过滤器 
│     │    ├── layout           // 布局 
│     │    ├── register         // 工具，组件，过滤器注册
│     │    └── utils            // 工具类
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── static                        // 第三方不打包资源

├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json

```

## 规范
```bash
    # config文件夹
    config文件夹是用来配置不同环境的配置文件，目前有BASE_API（api请求前缀），DEBUG（debug模式）,
    使用：process.env.DEBUG

    # 模块导出
    components,modules,pages,router,store下的所有模块都要放在单独文件夹内，每个文件夹下
    的模块统一通过index.js导出，最后在当前模块所在目录下的index.js对外暴露。

    # 模块导入
    模块引用时都要从根目录下导入，例如：import { DialogInfo } from '~components'，
    在文件夹名前加上'~'可以直接定位到该文件夹

    # components模块
    components是用来放共通组件，和业务逻辑没有关系，每个组件要放在一个单独的文件夹下，
    文件夹名称为英文字母，全部小写，多个用‘-’隔开，例如“select-tree”，导出的key必须是大写驼峰，
    注册之后，就变成了小写中横线;如果想要注册到vue的全局组件中，可以在src/core/register/component.js
    里面添加对应的组件。

    # modules模块
    modules是用来放业务组件，带有业务逻辑并且可以复用的组件，其他规范和components一致。

    # pages模块
    pages是页面模块，每个页面模块的路径要和页面路由一致。每个页面导出时使用异步导出，
    例如：const Edit = r => require.ensure([], () => r(require('./edit')), 'demo')，
    其中第三个参数是代码分割后的js文件名称，要按照模块的名字来命名，如果多个模块指定同一个名称，
    那么会被打包到同一个js文件里；对于比较长的vue文件，要把vue拆成js，css，vue三个文件。

    # router模块
    路由模块分为constant和menu，constant是用放置一些系统必须的路由，这些路由不需要权限验证，如登录，404
    menu是用来放置系统菜单的路由，这些路由会涉及到权限验证，路由需要按照功能模块分割，相同模块的路由放在
    同一个文件夹下；每个路由都要有name和code属性，按照模块来命名，name可以是中文，code是英文，
    用code可以用来查找路由。

    # store模块
    store下用来放vuex文件，每个模块的vuex文件放在单独的文件夹下，如果文件特别大，要把state，
    actions等分成多个文件。

    # api模块
    api用来放api请求，要按照功能模块划分成多个文件。

    # service模块
    业务逻辑处理模块，对于一些需要多个api或者需要对api进行比较复杂的处理的情况下，要把逻辑写在service中，
    同样按照功能模块划分。

    # 在vue实例中使用http请求
    this.$fetch.get('/').then(data => {
      ...
    })

    # logger的使用
    // 初始化
    const logger = new Logger('/system/about/index') //参数为当前文件的路径

    // 使用
    logger.info(data)
    logger.error(data)
    logger.log(data)
    如果想要关闭logger，可以将配置文件的DEBUG设置为false

     # 获取路由地址
    const url = this.$store.getters.paths['demo-edit'] // 获取demo-edit的url地址
```

## License

MIT

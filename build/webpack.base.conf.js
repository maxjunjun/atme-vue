var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js',
    vendor: [
      'es6-promise/auto',
      /*      'babel-polyfill',*/
      'vue',
      'vue-router',
      'vuex'
      /* 'vuex-router-sync' */
    ]
  },
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].js'),
    chunkFilename: utils.assetsPath('js/[name].js'),
    publicPath: process.env.NODE_ENV !== 'development'
      ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [ '.js', '.vue', '.json' ],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      '@': resolve('src'),
      '~components': resolve('src/components'),
      '~constants': resolve('src/core/constants'),
      '~modules': resolve('src/modules'),
      '~pages': resolve('src/pages'),
      '~store': resolve('src/store'),
      '~utils': resolve('src/core/utils'),
      '~service': resolve('src/service'),
      '~router': resolve('src/router'),
      '~layout': resolve('src/core/layout'),
      '~api': resolve('src/api'),
      '~filter': resolve('src/core/filter'),
      '~directive': resolve('src/core/directive')
    }
  },
  module: {
    rules: [
      // {
      //  test: /\.(js|vue)$/,
      //  loader: 'eslint-loader',
      //  enforce: 'pre',
      //  include: [resolve('src'), resolve('test')],
      //  options: {
      //    formatter: require('eslint-friendly-formatter')
      //  }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [ resolve('src'), resolve('test') ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      /*{
       test: /\.(png|jpe?g|gif)$/,
       loader: 'file-loader',
       query: {
         limit: 1000,
         name: utils.assetsPath('img/[name].[hash:7].[ext]')
       }
      },*/
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass' ]
      }
    ]
  }
}

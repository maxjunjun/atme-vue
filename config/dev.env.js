var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://localhost:8091"',
  DEBUG: 'true',
  TIME_OUT: '-1' // -1 代表不限时
})

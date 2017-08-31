import axios from 'axios'
import { ErrorDic } from '~constants'
import Logger from './logger'
import { Message } from 'element-ui'

const logger = new Logger('/utils/fetch')

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000                  // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => config
  , error => {
    // Do something with request error
    logger.log(error) // for debug
    Promise.reject(error)
  })

// respone拦截器
service.interceptors.response.use(
  response => {
    logger.info('请求成功,请求地址：%s',
      response.config.url,
      response.data)
    return response.data
  },
  error => {
    const response = error.response
    let errorMessage
    logger.error('请求失败,请求地址：%s',
      error.config.url,
      error)
    if (response) {
      errorMessage = response.data || { code: ErrorDic.SYSTEM_ERROR, message: '系统错误!' }
    } else {
      errorMessage = { code: ErrorDic.CONNECTION_TIMED_OUT, message: '请求超时!' }
    }
    Message({
      message: errorMessage.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(errorMessage)
  }
)

const fetch = service

fetch.get = (url, params = {}) => service({
  url,
  method: 'get',
  params
})

fetch.post = (url, params = {}) => service({
  url,
  method: 'post',
  data: params
})

fetch.put = (url, params = {}) => service({
  url,
  method: 'put',
  data: params
})

fetch.delete = (url, params = {}) => service({
  url,
  method: 'delete',
  data: params
})

export default fetch

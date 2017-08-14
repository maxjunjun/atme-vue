import axios from 'axios'
import logger from './logger'
import ErrorDic from '../constants/ErrorDic'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000                  // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
/*  if (store.getters.token) {
    config.headers['X-Token'] = getToken(); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  } */
  return config
}, error => {
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
    logger.error('请求错误,请求地址：%s',
      error.config.url,
      error)
    if(response) {
      errorMessage = response.data || { code: ErrorDic.SYSTEM_ERROR, message: '系统错误!' }
    } else {
      errorMessage = { code: ErrorDic.CONNECTION_TIMED_OUT, message: '请求超时!' }
    }
/*    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    }); */
    return Promise.reject(errorMessage)
  }
)

const fetch = service

fetch.get = (url, params = {}) => {
  return service({
    url: url,
    method: 'get',
    params: params
  })
}

fetch.post = (url, params = {}) => {
  return service({
    url: url,
    method: 'post',
    data: params
  })
}

fetch.put = (url, params = {}) => {
  return service({
    url: url,
    method: 'put',
    data: params
  })
}

fetch.delete = (url, params = {}) => {
  return service({
    url: url,
    method: 'delete',
    data: params
  })
}

export default fetch

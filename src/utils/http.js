/*
 * @Author: liyi
 * @LastEditors: liyi 991230629@qq.com
 * @Date: 2023-04-29 22:27:44
 * @LastEditTime: 2023-05-13 11:50:21
 */
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000
})
// 添加请求拦截器
http.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
http.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export { http }

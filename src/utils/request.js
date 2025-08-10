import store from '@/store'
import axios from 'axios'
import { Toast } from 'vant'

// 根据环境使用不同的API地址
const getBaseURL = () => {
  if (process.env.NODE_ENV === 'production') {
    // 生产环境，确保使用HTTPS
    return 'https://smart-shop.itheima.net/index.php?s=/api'
  }
  // 开发环境
  return 'http://smart-shop.itheima.net/index.php?s=/api'
}

const instance = axios.create({
  baseURL: getBaseURL(),
  timeout: 5000,
  headers: { platform: 'H5' }
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 由于网速可能不好当请求发送之后需要时间，为了防止用户多次点击，开启背景禁用以及加载动画
  Toast.loading({
    message: '加载中...',
    forbidClick: true, // 禁止背景点击
    duration: 0
  })
  // 从状态管理中 getters中获取token token return的是user中的userInfo
  const token = store.getters.token
  if (token) {
    console.log('有token')
    config.headers['Access-Token'] = token// 添加token 到 header中
  }

  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  const res = response.data
  // console.log(res.status)
  if (res.status !== 200) {
    // 给提示
    Toast(res.message)
    // 抛出错误promise
    return Promise.reject(res.message)
  }
  Toast.clear()
  return res
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 导出实例
export default instance

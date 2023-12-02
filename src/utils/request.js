import axios from 'axios'
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'

const request = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

request.interceptors.request.use(
  (config) => {
    //1.从pinia获取token数据
    const userStore = useUserStore()
    //2.按照后端的要求拼接token数据
    const token = userStore.user.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    ElMessage({
      type: 'warning',
      message: error.response.data.msg
    })
    return Promise.reject(error)
  }
)

export default request

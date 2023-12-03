import { request } from '@/utils'
export const loginAPI = ({ account, password }) => {
  console.log(account, password)
  return request({
    url: '/login',
    method: 'post',
    data: {
      account,
      password
    }
  })
}

export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}

/*params: {  orderState:0,  page:1,  pageSize:2}*/
export const getUserOrder = (params) => {
  return request({ url: '/member/order', method: 'GET', params })
}

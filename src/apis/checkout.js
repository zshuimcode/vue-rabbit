// 订单模块
import { request } from "@/utils";

/**
 * 获取详细信息
 * @returns 
 */
export const getCheckoutInfoAPI = () => {
  return request({
    url:'/member/order/pre'
  })
}


// 创建订单
export const createOrderAPI = (data) => {
  return request({
    url: '/member/order',
    method: 'Post',
    data
  })
}

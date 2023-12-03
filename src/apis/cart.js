import { request } from '@/utils'
/**
 * 加入购物车
 * @param {*} param0
 * @returns
 */
export const insertCartAPI = ({ skuId, count }) => {
  return request({
    url: '/member/cart',
    method: 'post',
    data: {
      skuId,
      count
    }
  })
}
/**
 * 获取最新购物车列表
 * @returns
 */
export const findNewCartListAPI = () => {
  return request({
    url: '/member/cart'
  })
}

/**
 * 删除购物车
 * @param {*} ids
 * @returns
 */
export const delCartAPI = (ids) => {
  return request({
    url: '/member/cart',
    method: 'delete',
    data: {
      ids
    }
  })
}

/**
 * 合并购物车
 */
export const mergeCartAPI = (data) => {
  return request({
    url: '/member/cart/merge',
    method: 'Post',
    data
  })
}

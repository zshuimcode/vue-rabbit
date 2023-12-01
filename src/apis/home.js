import { request } from '@/utils'

/**
 * 获取banner
 */
export function getBannerAPI(params = {}) {
  const { distributionSite = '1' } = params
  return request({
    url: 'home/banner',
    params: {
      distributionSite
    }
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function findNewAPI() {
  return request({
    url: '/home/new'
  })
}
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export function findHotAPI() {
  return request({
    url: '/home/hot'
  })
}
/**
 * @description: 获取商品列表
 * @param {*}
 * @return {*}
 */
export function findGoodsAPI() {
  return request({
    url: '/home/goods'
  })
}

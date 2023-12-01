import { request } from '@/utils'

/**
 * 获取banner
 */
export function getBannerAPI() {
  return request({
    url: 'home/banner'
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

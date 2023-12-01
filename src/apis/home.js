import { request } from '@/utils'

/**
 * 获取banner
 */
export function getBannerAPI() {
  return request({
    url: 'home/banner'
  })
}

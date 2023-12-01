import { request } from '@/utils'

export function getCategoryAPI() {
  return request({
    url: '/home/category/head'
  })

}

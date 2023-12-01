import { request } from '@/utils'

export function getCateGoryAPI(id) {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}

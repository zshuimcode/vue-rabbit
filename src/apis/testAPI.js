import { request } from '@/utils'

export function getCatgory() {
  return request.get('home/category/head')
}

import { request } from "@/utils"


export const getOrderAPI = (id) => {
  return request({
    url: `/member/order/${id}`
  })
}
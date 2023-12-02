import { request } from '@/utils'
export const loginAPI = ({ account, password }) => {
  console.log(account,password);
  return request({
    url: '/login',
    method: 'post',
    data: {
      account,
      password
    }
  })
}

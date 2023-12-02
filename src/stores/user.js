// 管理用户数据
import { defineStore } from 'pinia'
import { ref } from 'vue'

import { loginAPI } from '@/apis/user'

export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref({})

    const getUserInfo = async ({ account, password }) => {
      let res = await loginAPI({ account, password })
      user.value = res.data.result
    }

    return {
      user,
      getUserInfo
    }
  },
  {
    persist: true
  }
)

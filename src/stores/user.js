// 管理用户数据
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { mergeCartAPI } from '@/apis/cart'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref({})
    const cartStore = useCartStore()
    const getUserInfo = async ({ account, password }) => {
      let res = await loginAPI({ account, password })
      user.value = res.data.result
      // 合并购物车
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count
          }
        })
      )
      cartStore.updateNewList()
    }

    const clearUserInfo = () => {
      user.value = {}
      cartStore.clearCartList()
    }

    return {
      user,
      getUserInfo,
      clearUserInfo
    }
  },
  {
    persist: true
  }
)

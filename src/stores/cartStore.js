import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'

import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cartList = ref([])
    const islogin = computed(() => useUserStore().user.token)

    const updateNewList = async () => {
      const res = await findNewCartListAPI()
      cartList.value = res.data.result
    }
    const addCart = async (goods) => {
      if (islogin.value) {
        await insertCartAPI(goods)
        const res = await findNewCartListAPI()
        cartList.value = res.data.result
      } else {
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
          item.count += goods.count
        } else {
          cartList.value.push(goods)
        }
      }
    }

    const delCart = async (skuId) => {
      if (islogin.value) {
        await delCartAPI([skuId])
        const res = await findNewCartListAPI()
        cartList.value = res.data.result
      } else {
        cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
      }
    }

    const clearCartList = () => {
      cartList.value = []
    }

    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
    }

    const allCheck = (selected) => {
      cartList.value.map((item) => {
        item.selected = selected
      })
    }

    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    const allSelectedCount = computed(() =>
      cartList.value.reduce((a, c) => (c.selected ? a + c.count : a), 0)
    )
    const allSelectedPrice = computed(() =>
      cartList.value.reduce((a, c) => (c.selected ? a + c.count * c.price : a), 0)
    )

    const isAll = computed(() => cartList.value.every((item) => item.selected))

    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      isAll,
      allCheck,
      allSelectedCount,
      allSelectedPrice,
      clearCartList,
      updateNewList
    }
  },
  {
    persist: true
  }
)

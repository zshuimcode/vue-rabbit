import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
import { ref } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
  const categoryList = ref([])

  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.data.result
  }

  return {
    categoryList,
    getCategory
  }
})

// 分装 分类数据的相关的代码
import { getCateGoryAPI } from '@/apis/category'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export function useCategory() {
  const categoryObj = ref({})
  const route = useRoute()
  const getCatgoryObj = async () => {
    let res = await getCateGoryAPI(route.params.id)
    categoryObj.value = res.data.result
  }
  watch(
    route,
    () => {
      getCatgoryObj()
    },
    {
      immediate: true
    }
  )

  return {
    categoryObj
  }
}

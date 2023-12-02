// 分装 分类数据的相关的代码
import { getCateGoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
  const categoryObj = ref({})
  const route = useRoute()
  const getCatgoryObj = async (id = route.params.id) => {
    let res = await getCateGoryAPI(id)
    categoryObj.value = res.data.result
  }
  // watch(
  //   () => route.params.id,
  //   () => {
  //     getCatgoryObj()
  //   },
  //   {
  //     immediate: true
  //   }
  // )

  onBeforeRouteUpdate((to) => {
    getCatgoryObj(to.params.id)
  })
  onMounted(() => {
    getCatgoryObj()
  })
  return {
    categoryObj
  }
}

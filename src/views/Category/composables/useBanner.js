// 封装 banner 相关的业务代码

import { getBannerAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'
export function useBanner() {
  const bannerList = ref([])

  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: '2'
    })
    bannerList.value = res.data.result
  }
  onMounted(() => {
    getBanner()
  })

  return {
    bannerList
  }
}

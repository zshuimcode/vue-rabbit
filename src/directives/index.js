// 自定义插件
// 判断元素是否进入视窗
import { useIntersectionObserver } from '@vueuse/core'

// 图片懒记载插件
export const imgLazyPlugin = {
  install(app) {
    // 懒加载 指令逻辑
    app.directive('img-laze', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value
            stop()
          }
        })
      }
    })
  }
}

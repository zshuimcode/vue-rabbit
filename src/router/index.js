import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Catgory from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '', // 置空会让 访问 / 请求自动转 home页面
          component: Home
        },
        {
          path: 'category/:id',
          component: Catgory
        },
        {
          path: 'category/sub/:id',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        }
      ]
    }
  ],
  // 路由行为配置项 滚动条在路由跳转后回到顶部
  scrollBehavior() {
    return {
      top: 0
    }
  }
})
export default router

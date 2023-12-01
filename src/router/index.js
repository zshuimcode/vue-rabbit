import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Catgory from '@/views/Category/index.vue'

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
          path: 'category',
          component: Catgory
        }
      ]
    }
  ]
})
export default router

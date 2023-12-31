import '@/styles/common.scss'

import { createApp } from 'vue'
import { pinia } from '@/stores'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia)

app.use(router)

// 引入懒加载插件
import { imgLazyPlugin } from '@/directives'
app.use(imgLazyPlugin)

// 引入全局 组件插件
import { componentPlugin } from '@/components'
app.use(componentPlugin)
app.mount('#app')

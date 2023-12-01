import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 引入懒加载插件
import { imgLazyPlugin } from '@/directives'
app.use(imgLazyPlugin)



app.mount('#app')

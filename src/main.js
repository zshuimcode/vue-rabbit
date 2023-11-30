import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import { getCatgory } from './apis/testAPI'
getCatgory().then(res => {
  console.log(res.data);
})


app.use(createPinia())
app.use(router)

app.mount('#app')

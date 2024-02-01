import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import '@/assets/css/common.css'
import '@/assets/css/index.css'
import '@/assets/font/iconfont.css'

createApp(App).use(router).mount('#app')

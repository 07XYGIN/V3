import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import router from './router/router'
import persist from 'pinia-plugin-persistedstate'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(createPinia().use(persist))
app.use(router)
app.use(ElementPlus)
app.mount('#app')

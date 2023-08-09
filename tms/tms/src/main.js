import './assets/css/reset.css'

import { createApp } from 'vue'

// 引入 element ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入 图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import App from './App.vue'
import router from './router'
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.use(router)
app.mount('#app')
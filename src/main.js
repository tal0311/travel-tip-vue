import './assets/styles/styles.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// plugins
import { svgPlugin } from '@/plugins'
// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(svgPlugin)

app.use(ElementPlus)

app.mount('#app')

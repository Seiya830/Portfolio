import { createApp } from 'vue'
import "@/assets/scss/style.scss"
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

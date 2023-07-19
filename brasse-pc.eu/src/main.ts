import './assets/main.css'

import vue3GoogleLogin from 'vue3-google-login'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'



const app = createApp(App)
app.use(vue3GoogleLogin, {
    clientId: '194260544508-unnerf7v4t9p74h160p4lmqb9r04df3s.apps.googleusercontent.com'
  })
//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


app.use(createPinia())
app.use(router)

app.mount('#app')

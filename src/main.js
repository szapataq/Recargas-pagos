import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/routes'

const token= import.meta.env.VITE_TOKEN;

if(token){
    localStorage.setItem('token',token)
}
createApp(App).use(router).mount('#app')

import { createRouter, createWebHistory } from "vue-router";
import Pagos from "../pages/Pagos.vue"
import Recargas from "../pages/Recargas.vue"

const routes = [
    {
        path:'/',
        component:Pagos
    },
    {
        path:'/recargas',
        component:Recargas
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;
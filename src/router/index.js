import Vue from 'vue'
import VueRouter from 'vue-router'
import UComps from "@/views/UComps";
import Sugar from "@/views/Sugar";

Vue.use(VueRouter)

const routes = [
    {
        path: '/uc',
        name: 'UComps',
        component: UComps
    },
    {
        path: '/sugar',
        alias: '/',
        name: 'Sugar',
        component: Sugar
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

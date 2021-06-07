import Vue from 'vue'
import VueRouter from 'vue-router'
import SugarMain from '../views/SugarMain'
import UComps from "@/views/UComps";
import Sugar from "@/views/Sugar";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        alias: '/sugar-workbench',
        name: 'SugarMain',
        component: SugarMain
    },
    {
        path: '/uc',
        name: 'UComps',
        component: UComps
    },
    {
        path: '/sugar',
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

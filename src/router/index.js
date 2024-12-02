import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
    {
        path:'/',
        redirect:'/welcome'
    },
    {
        path:'/welcome',
        name:'welcome',
        component: () => import('@/views/welcome/index.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
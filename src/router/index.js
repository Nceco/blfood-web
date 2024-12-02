import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
    {
        path:'/'
    },
    // {
    //     path:'/welcome',
    //     name:'welcome',
    //     component: () => import('@/views/welcome/index.vue'),
    // },
    {
        path:'/news',
        name:'news',
        component: () => import('@/views/news/index.vue'),
    },
    {
        path:'/company',
        name:'company',
        component: () => import('@/views/company/index.vue'),
    },
    {
        path:'/contact',
        name:'contact',
        component: () => import('@/views/contact/index.vue'),
    },
    {
        path:'/service',
        name:'service',
        component: () => import('@/views/service/index.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
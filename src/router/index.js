import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
    {
        path:'/',
        name:'home',
        component: () => import('@/views/welcome/index.vue'),
    },
    {
        path: '/',
        name: 'layout',
        component: () => import('@/layout/contentLayout.vue'),
        children: [
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
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
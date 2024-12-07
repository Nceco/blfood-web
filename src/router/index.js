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
                path:'/about',
                name:'about',
                component: () => import('@/views/about/index.vue'),
                children:[
                    {
                        path: '',
                        name: 'vision',
                        component: () => import('@/views/about/vision/index.vue'),
                        parent: 'about'
                    },
                    {
                        path: 'message',
                        name: 'message',
                        component:  () => import('@/views/about/message/index.vue'),
                        parent: 'about'
                    },
                    {
                        path: 'company',
                        name: 'company',
                        component:  () => import('@/views/about/company/index.vue'),
                        parent: 'about'
                    },
                ]

            },
            {
                path:'/service',
                name:'service',
                component: () => import('@/views/service/index.vue'),
            },
            {
                path:'/news',
                name:'news',
                component: () => import('@/views/news/index.vue'),
            },
            {
                path:'/recruit',
                name:'recruit',
                component: () => import('@/views/recruit/index.vue'),
            },
            {
                path:'/achievement',
                name:'achievement',
                component: () => import('@/views/achievement/index.vue'),
            },
            {
                path:'/qa',
                name:'qa',
                component: () => import('@/views/qa/index.vue'),
            },
            {
                path:'/contact',
                name:'contact',
                component: () => import('@/views/contact/index.vue'),
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
})

export default router
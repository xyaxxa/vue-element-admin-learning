import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout/index'

Vue.use(Router)

//这里加了各种各样的路由规则，先不用着急用
export const constantRoutes = [
    {
        path:'/login',
        name: 'loginPage',
        component: () => import('@/views/login/index')
    },
    {
        path:'/register',
        name: 'registerPage',
        component: () => import('@/views/register/index')
    },
    {
        path:'/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path:'dashboard',
            component: () => import('@/views/dashboard/index')
        }]
    }
];

const router = new Router({
    // 加了这句后可以去掉url里的/#。不过意味着需要服务器端做相应的处理，详见vue-router文档
    mode: 'history',
    routes:constantRoutes
});

export default router

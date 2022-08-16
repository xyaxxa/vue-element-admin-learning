import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout/index'

Vue.use(Router)

//这里加了各种各样的路由规则，先不用着急用
export const constantRoutes = [
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
    routes:constantRoutes
});

export default router

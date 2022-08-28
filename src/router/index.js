import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout/index'

Vue.use(Router)

//这里加了各种各样的路由规则，先不用着急用
/**
 * 规则如下
 * hidden:true                          当设置为true，该路由项不会在侧边栏上显示，如login、register、404路由
 * 
 * meta: {
 *      title: ''                       要显示在侧边栏上的名字
 *      icon:  'svg-name/el-icon-x'     要显示在侧边栏上的图标
 * }
 */
export const constantRoutes = [
    {
        path:'/login',
        name: 'Login',
        hidden: true,
        component: () => import('@/views/login/index')
    },
    {
        path:'/register',
        name: 'Register',
        hidden: true,
        component: () => import('@/views/register/index')
    },

    {
        path:'/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path:'dashboard',
            name:'Dashboard',
            component: () => import('@/views/dashboard/index'),
            meta: {
                title: 'Dashboard'
            }
        }]
    },
    
    {
        path: '/nested',
        name: 'Nested',
        component: Layout,
        redirect: '/nested/menu1',
        meta: {
            title:'Nested'
        },
        children: [{
            path: 'menu1',
            name: 'Menu1',
            component: () => import('@/views/nested/menu1/index'),
            meta: {
                title: 'Menu1'
            },
            children: [{
                path: 'menu1-1',
                name: 'Menu1-1',
                component: () => import('@/views/nested/menu1/menu1-1/index'),
                meta: {
                    title: 'Menu1-1'
                }
            },{
                path: 'menu1-2',
                name: 'Menu1-2',
                component: () => import('@/views/nested/menu1/menu1-2/index'),
                meta: {
                    title: 'Menu1-2'
                }
            }]
        }]
    },
    {
        path: 'external-link',
        component: Layout,
        children: [{
            path: 'https://www.baidu.com',
            meta: {
                title: 'External-Link'
            }
        }]
    }
];

export const asyncRouters = [
    {
        path: '/example',
        component: Layout,
        children: [
            {
                path: 'table',
                name: 'table',
                component: () => import('@/views/table/index'),
                meta: {
                    name: 'Table'
                }
            },
            {
                path: 'form',
                name: 'Form',
                component: () => import('@/views/form/index'),
                meta: {
                    name: 'Form'
                }
            }
        ]
    }
];

const router = new Router({
    // 加了这句后可以去掉url里的/#。不过意味着需要服务器端做相应的处理，详见vue-router文档
    mode: 'history',
    routes:constantRoutes
});

export default router

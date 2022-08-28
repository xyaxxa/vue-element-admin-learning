// 在这里对权限进行控制
// 1.输入除登录页面（或许还有注册页面吧）之外的url时，获取cookie，判断是否有token，没有的话转到登录界面
// 2.如果有token，那么进入登陆页面时自动跳转到dashboard页面

import router from './router'
import store from './store'
import { getTokenCookie } from './utils/cookies'

const whiteList = ['/login','/register']

router.beforeEach((to,from,next) => {
    const hasToken = getTokenCookie();

    if(hasToken){
        if(to.path === '/login'){
            next('/');
        }else{
            // 判断有没有拉用户信息，没有的话还要拉一下用户信息
            const hasGetUserInfo = store.getters.name;
            if(hasGetUserInfo){
                next();
            }else{
                store.dispatch('user/getUserInfo').then(()=>{
                    next();
                }).catch(error => {
                    console.log(error);
                    next('/login');
                })
            }
        }
    } else {
        //白名单的页面不用管有没有token
        //indexOf是数组的方法，返回目标元素在数组中第一次出现的位置，没有则返回-1
        if(whiteList.indexOf(to.path)===-1){
            // redirect参数代表登陆成功后进入的页面,在login组件有对这个参数的判断
            next(`/login?redirect=${to.path}`);
        }else {
            next();
        }
    }
})
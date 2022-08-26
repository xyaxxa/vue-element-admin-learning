import { loginRequest,logoutRequest } from "@/api/user"
import { setTokenCookie, removeTokenCookie } from "@/utils/cookies"

// 为什么要加获取默认状态？为了后续重置state或清楚state做准备
const getDefaultState = () => {
    return {
        token: '',
        name: '',
        avatar: ''
    }
}
const state = getDefaultState()

const mutations = {
    setToken: (state,token) => {
        state.token = token;
    },
    resetState: (state) => {
        // 覆盖对象，合并对象的一个Object静态方法
        Object.assign(state,getDefaultState())
    }
}

const actions = {
    login({commit},loginInfo) {
        // 调用api的request请求
        // 注意。login组件里期望得到的调用此方法得到一个promise对象，好进行相应操作
        // 同时，调用的loginRequest本身返回的也是一个promise对象，所以对其用then和catch，并将这个状态通过resolve和reject进行传递
        return new Promise((resolve,reject) => {
            loginRequest(loginInfo).then(response => {
                const responseBody = response.data;
                commit('setToken',responseBody.data.token);
                setTokenCookie(responseBody.data.token);
                resolve();
            }).catch(error => {
                reject(error);
            })
        })
    },

    logout({commit}) {
        return new Promise((resolve,reject) => {
            logoutRequest().then(() => {
                commit('resetState');
                removeTokenCookie();
                resolve();
            }).catch(error => {
                reject(error);
            })
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
};
import { loginRequest } from "@/api/user"

const state = () => {
    return {
        token: [],
        username: '',
        avatar: ''
    }
}

const mutations = {
    setToken(state,token) {
        state.token = token
    }
}

const actions = {
    login({commit},loginInfo) {
        // 调用api的request请求
        // 注意。login组件里期望得到的调用此方法得到一个promise对象，好进行相应操作
        // 同时，调用的loginRequest本身返回的也是一个promise对象，所以对其用then和catch，并将这个状态通过resolve和reject进行传递
        return new Promise((resolve,reject) => {
            console.log(loginInfo);
            loginRequest(loginInfo).then(response => {
                commit('setToken',response.data.token);
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
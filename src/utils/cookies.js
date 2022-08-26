import Cookies from 'js-cookie'
// 对cookie的操作实现token的存储与读取或删除
const tokenCookie = 'vue-element-admin-learning-token';

const setTokenCookie = (token) => {
    return Cookies.set(tokenCookie, token)
}

const getTokenCookie = () => {
    return Cookies.get(tokenCookie)
}

const removeTokenCookie = () => {
    return Cookies.remove(tokenCookie)
}

export {setTokenCookie, getTokenCookie, removeTokenCookie}
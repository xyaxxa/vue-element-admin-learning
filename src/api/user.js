import request from '@/utils/request'
//在api里，要写明请求格式
const loginRequest = (loginInfo) => {
    // 调用自己定义的request工具类，实现数据请求与接收响应
    return request({
        url: '/user/login',
        method: 'post',
        data: {
            username: loginInfo.username,
            password: loginInfo.password
        }
    })
}

const logoutRequest = () => {
    return request({
        url: 'user/logout',
        method: 'post'
    })
}
export {loginRequest,logoutRequest}
import axios from 'axios'

const service = axios.create({
    baseURL: 'https://mock.apifox.cn/m1/1507442-0-default',
    timeout: 5000
})

export default service
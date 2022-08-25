import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//导入全局css样式(针对body，html，app等)
import '@/styles/index.scss'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 这里没有el:"#app"，所以后加了个.$mount("#app")手动挂载到id为app的dom上
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

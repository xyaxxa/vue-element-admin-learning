import Vue from 'vue'

import App from './App'
import router from './router'

//导入全局css样式(针对body，html，app等)
import '@/styles/index.scss'

Vue.config.productionTip = false

// 这里没有el:"#app"，所以后加了个.$mount("#app")手动挂载到id为app的dom上
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

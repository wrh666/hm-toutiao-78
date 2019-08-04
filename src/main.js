import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// @是一个路径的别名  是src路径
import router from '@/router'

// 产品级别提示  不开启
Vue.config.productionTip = false

Vue.use(ElementUI)
// main.js 入口文件
//  职责.1 引入需要依赖的模块
//       2.创建一个根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

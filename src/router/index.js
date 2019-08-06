import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '@/views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 跳转路由  $router.push('/login')
    { path: '/login', name: 'login', component: Login }
  ]
})
export default router

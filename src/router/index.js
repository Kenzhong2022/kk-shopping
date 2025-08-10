import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import Myorder from '@/views/myorder/index.vue'
import Pay from '@/views/pay/index.vue'
import Prodetail from '@/views/prodetail/index.vue'
import Search from '@/views/search/index.vue'

import Home from '@/views/layout/home.vue'
import User from '@/views/layout/user.vue'
import Category from '@/views/layout/category.vue'
import Cart from '@/views/layout/cart.vue'
import List from '@/views/search/list.vue'

// 导入仓库
import store from '@/store'
import { Toast } from 'vant'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/home', component: Home },
        { path: '/user', component: User },
        { path: '/category', component: Category },
        { path: '/cart', component: Cart }
      ]
    },
    { path: '/myorder', component: Myorder },
    { path: '/pay', component: Pay },
    { path: '/prodetail/:id', component: Prodetail },
    { path: '/search', component: Search },
    { path: '/searchlist', component: List }

  ]
})

// 不公开的页面urls 需要权限token
const authUrls = ['/myorder', '/pay']

// 全局前置守卫 当访问的时候就要先前置执行下列规则
// to: 去哪 from：从哪来 next：接下来去哪
router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  // 若非 访问的不公开页面
  if (!authUrls.includes(to.path)) {
    console.log('发现您在发送访问公开页面请求')
    next()
    return// 记得写return
  }
  // 若访问 不公开页面且没有权限 则next跳转去 登录
  const token = store.getters.token
  console.log('发现您在发送访问权限页面请求,您拥有token,允许:', token)
  if (!token) {
    Toast({
      message: '请先登录',
      position: 'top'
    })
    next('/login')
  }
  next()
})

export default router

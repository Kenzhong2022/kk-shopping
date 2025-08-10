import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入全局样式
import '@/assets/common.css'

// 全局注册公共组件
import commonComponents from '@/components/index'
/*
import 'vant/lib/index.css'// 组件样式
import { Button, Switch } from 'vant'// 按需导入组件
Vue.use(Button)// 一个组件
Vue.use(Switch)// 两个组件
// 一堆组件 变得臃肿 写一个js
*/
import '@/utils/vant-ui'
Vue.use(commonComponents)

// // 一次性导入全部组件
// import Vant from 'vant'// 导入组件
// import 'vant/lib/index.css'// 组件的样式
// Vue.use(Vant)// 注册和使用

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

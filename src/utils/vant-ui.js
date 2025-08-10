import Vue from 'vue'

import 'vant/lib/index.css'// 组件样式
import {
  Button, Switch, Tabbar, TabbarItem, NavBar, Toast, Search, Lazyload, Swipe, SwipeItem, Grid, GridItem, Image as VanImage
  , Col, Row, Icon, ActionSheet, Rate, Stepper, Dialog, Checkbox
} from 'vant'

Vue.use(Checkbox)

// 全局注册
Vue.use(Dialog)

Vue.use(Stepper)// 进步器 加一 减一

Vue.use(Rate)// 打分器

Vue.use(ActionSheet)// 底部弹起的模态面板，应用场景 比如说点击加入购物车 弹出
Vue.use(Icon)

Vue.use(Col)
Vue.use(Row)

Vue.use(VanImage)

Vue.use(Grid)
Vue.use(GridItem)

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)

Vue.use(Search)
Vue.use(Toast)// 提示 应用场景 点击登录后 页面加载时

Vue.use(NavBar)
Vue.use(Button)
Vue.use(Switch)

Vue.use(Tabbar)
Vue.use(TabbarItem)

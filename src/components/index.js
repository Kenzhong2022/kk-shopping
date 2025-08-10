// 1. 导入所有公共组件
import GoodsItem from './GoodsItem.vue'
import MyTitle from './MyTitle.vue'
// 2. 定义组件数组（统一管理）
const components = [GoodsItem, MyTitle]// 未来添加公共组件
// 3. 定义一个安装函数，用于全局注册所有组件
const install = (app) => {
  // 遍历组件数组，逐个注册
  components.forEach(component => {
    // 全局注册组件（组件需在自身定义中设置 name 属性）
    app.component(component.name, component)
  })
}

// 4. 导出安装函数和组件（支持按需导入）
export default {
  install
  // 可选：导出单个组件，允许局部按需导入
//   MyButton,
//   Loading,
//   Empty
}

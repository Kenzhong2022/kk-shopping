import { getCartList } from '@/api/cart'

export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  getters: {
  },
  // 操作state数据
  mutations: {
    setCartList (state, newList) {
      state.cartList = newList
    }
  },
  // 异步操作
  actions: {
    async getCartList (content) {
      // 调用 封装的请求函数 并设置vuex中的state值
      const { data } = await getCartList()
      console.log(data)
      data.list.forEach(item => {
        item.isChecked = true
      })
      content.commit('setCartList', data.list)
      //   state.cartList = res.data.list 请注意不能这么直接操作state！！！所有的操作属性都必须在mutation中
    }
  }
}

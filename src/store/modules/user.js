import { getItem, setItem } from '@/utils/storage'

export default {
  namespaced: true,
  state () {
    return {
      userInfo: getItem()
    }
  },
  getters: {
  },
  mutations: {
    // 第一个参数是 state 第二个参数是obj
    setUserInfo (state, obj) {
      state.userInfo = obj
      // 并且保存到本地
      setItem(obj)
    }
  },
  actions: {
  }
}

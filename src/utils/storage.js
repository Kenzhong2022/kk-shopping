// 自定义一个键名
const INFO_KEY = 'jn-shopping-info'
// 自定义一个键名
const HISTORY_KEY = 'jn-shopping-history'

// 定义getItem
export const getItem = () => {
  // 默认info
  const defaultInfo = {
    userId: '',
    token: ''
  }
  // 获取本地信息
  const res = localStorage.getItem(INFO_KEY)
  console.log('当前本地userinfo', res)
  return res ? JSON.parse(res) : defaultInfo
}

// setItem
export const setItem = (obj) => {
  // 存到本地
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

// removeItem
export const removeItem = () => {
  localStorage.removeItem(INFO_KEY)
}

// 定义历史记录的 getter 和 setter
export const getHistory = () => {
  const res = localStorage.getItem(HISTORY_KEY)// 从本地取
  // 返回给调用者
  return res ? JSON.parse(res) : []
}

export const setHistory = (obj) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(obj))
}

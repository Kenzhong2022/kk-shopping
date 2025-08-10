// 这是关于首页的请求管理
import request from '@/utils/request'

// 按需导出
// 1.获取轮播图照片
export const getBannerPic = () => {
  // 发送请求 并返回内容 提供函数让home页面调用
  return request.get('/page/detail')
}

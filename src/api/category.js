// 按需导出请求
// 导入请求模块
import request from '@/utils/request'
export const getCategoryList = () => {
  return request.get('/category/list')
}

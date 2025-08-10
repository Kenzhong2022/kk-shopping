import request from '@/utils/request'

// 按需导出 请求函数 提供函数
export const getProList = (obj) => {
  const res = request.get('/goods/list', {
    params: {
      sortType: obj.sortType, // 按综合搜索
      sortPrice: obj.sortPrice, // 价格从低到高
      categoryId: obj.categoryId, // 分类id
      goodsName: obj.goodsName, // 商品名称
      page: obj.page// 页码
    }
  })
  return res
}
// 接受调用函数者 传递的goods_id 并请求第三方接口
export const getProDetail = async (id) => {
  return await request.get(`goods/detail&goodsId=${id}`)
}

export const getProComments = async (id, limit) => {
  return await request.get(`/comment/listRows&goodsId=${id}&limit=${limit}`)
}

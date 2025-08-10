import request from '@/utils/request'
// Header需要两个 post Access-Token platform
/*
Body 参数 /cart/add
goodsId string商品ID  必需  goodsNum number商品数量  必需
goodsSkuId string商品SKUID  可选
*/
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  console.log('正在加入购物车')

  return request.post(
    '/cart/add', {
      goodsId,
      goodsNum,
      goodsSkuId
    })
  // headers: {
  //   'Access-Token':
  //   platform: 'H5',
  //   'Content-Type': 'application/json'
  // }每次都写一次headers太麻烦了 直接在 拦截器中添加判断 若有token就加上在headers)
}

export const getCartList = () => {
  const res = request.get('/cart/list')
  return res
}

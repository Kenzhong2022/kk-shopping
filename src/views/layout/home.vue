<template>
    <div class="home">
      <!-- 顶部 -->
      <!-- <div class="title">智慧商城</div> -->
      <!-- 使用公共组件 -->
      <MyTitle>
        <template #title>智慧商城</template>
      </MyTitle>
      <!-- 搜索框 -->
      <van-search v-model="value" placeholder="请输入搜索关键词" @click="$router.push('/search')"/>
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="800" indicator-color="white">
        <van-swipe-item v-for="item in imgList" :key="item.imgUrl">
          <img :src="item.imgUrl" alt="">
        </van-swipe-item>
      </van-swipe>
      <!-- 商品分类 -->
      <!-- 自定义列数为5 -->
      <van-grid square :column-num="5" :gutter="2">
        <van-grid-item v-for="item in navList" :key="item.imgUrl" :icon="item.imgUrl" :text="item.text">
          <!-- <van-image :src="item.imgUrl" /> -->
          <!-- <div class="goodText">{{ item.text }}</div> -->
        </van-grid-item>
      </van-grid>
      <!-- 公告 -->
      <van-image width="100%" :src="imgSale"></van-image>
      <!-- 猜你喜欢 -->
      <!-- 父传子组件 -->
      <GoodsItem v-for="item in goodsList" :key="item.goods_id" :item="item"></GoodsItem>
    </div>
  </template>

<script>
// 导出api文件中的请求函数
import { getBannerPic } from '@/api/home'
export default {
  name: 'homeIndex',
  async created () {
    // 接收请求的response
    const res = await getBannerPic()
    console.log(res.data)
    // 解析轮播图信息
    const banner = res.data.pageData.items.find(item => item.type === 'banner')
    this.imgList = banner.data
    this.navList = res.data.pageData.items.find(item => item.type === 'navBar').data
    console.log(this.imgList)
    console.log(this.navList)
    this.imgSale = res.data.pageData.items.find(item => item.type === 'image').data[0].imgUrl
    console.log(this.imgSale)
    console.log(res.data.pageData.items.find(item => item.type === 'goods').data)
    this.goodsList = res.data.pageData.items.find(item => item.type === 'goods').data
  },
  data () {
    return {
      // 搜索内容
      value: '',
      // 轮播图内容 数组包对象
      imgList: [],
      // 商品分类
      navList: [],
      // 满200减30
      imgSale: '',
      // 商品列表
      goodsList: []
    }
  }
}
</script>

<style scoped>
/* 顶部标题 */
.title {
width: 100%;
height: 50px;
text-align: center;
line-height: 50px;
background-color: #cf2300;
color: #fff;
}
/* 搜索框 */
.van-search {
  background-color: #f1f1f1;

}
.van-search__content {
  border-radius: 12px;
  background-color: #fff;
}

/* 轮播图 */
.my-swipe .van-swipe-item img {
  width: 100%;
}

/* 商品分类 */
.van-image {
height: 80%;
}
.goodText {
padding: 5px;
height: 20%;
line-height: 100%;
text-align: center;
font-size: 12px;
color: #747174;
}

.van-grid{
  background-color: #f1f1f1;
}
</style>

<template>
    <div class="cart">
      <!-- 独占一行标题 -->
      <MyTitle>
        <template #title>购物车</template>
      </MyTitle>
      <!-- 一行两列 一个靠左 一个靠右 所有商品 编辑 -->
      <div class="edit">
        <!-- 显示商品数量 -->
        <div class="showTotalCount">
          <span>共</span>
          <span class="origin">{{ 99 }}</span>
          <span>件商品</span>
        </div>
        <!-- 编辑功能按钮 -->
        <div class="editbtn">
          <!-- 编辑图标 -->
          <van-icon name="edit" size="20px"/>
          <span>编辑</span>
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="cart-list">
        <!-- 列表元素 -->
        <div class="cart-list-item" v-for="item in cartList" :key="item.goods_id">
          <!-- 商品元素左侧一个复选框 -->
          <van-checkbox v-model="item.isChecked" checked-color="#ee0a24"></van-checkbox>
          <!-- 剩下的宽度全部都给商品内容使用 -->
          <!-- 商品的图片 -->
          <div class="picBox">
            <van-image
            :src="item.goods.goods_image" alt="" fit="cover"
            />
          </div>
          <!-- 商品info -->
          <div class="goodsInfo">
            <!-- 独占一行并且overflow溢出隐藏并且是ellipsis 内容两行 -->
            <div class="goods_name">{{ item.goods.goods_name }}</div>
            <div class="goods_count">
              <span class="goods_price">{{ item.goods.goods_price_min }}</span>
              <!-- 进步器 -->
              <van-stepper class="right" v-model="value" integer />
            </div>
          </div>
        </div>
      </div>
      <!-- 底部 结算 -->
      <div class="order">
        <!-- 左边复选框 中间是合计 右边结算 -->
        <van-checkbox>全选</van-checkbox>
        <div class="totalCount">合计: ￥<span class="origin">{{ 999 }}</span></div>
        <button class="buyNow">结算({{ 15 }})件</button>
      </div>
    </div>
  </template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'cartIndex',
  created () {
    // console.log(this.$store.getters.token)
    if (this.$store.getters.token) {
      this.$store.dispatch('cart/getCartList')// 发送请求 根据用户token获取购物车info
    }
  },
  computed: {
    ...mapState('cart', ['cartList'])
  },
  data () {
    return {
    }
  }

}

</script>
<style>
/* 注意：这里没有加 scoped，确保样式全局生效 */
body {
  background-color: #f7f7f7;
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
/* 价格使用的颜色 */
.origin {
  color:#da5a3c
}

/* 底部结算 */
.order {
  display: flex;
  position: fixed;
  bottom: 50px;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  z-index: 999; /* 提高层级，避免被其他内容遮挡 */
}

/* 该类order的孩子 所有类型的（使用了通配符）所有孩子 */
.order *:nth-child(n){
  width: 33%;
  line-height: 50px;
}

.totalCount {
  text-align: right;
  padding-right: 5px;
}

.order .buyNow {
  margin: 5px 0;
  border-radius: 25px;
  color: #fff;
  background-color: #ff5118;
  line-height: 40px;
}

.cart {
  display: flex;
  /* 很关键的一行 布局必须是垂直排列 默认是水平导致看不到了 */
  flex-direction: column;
  width: 100%;
  /* 让内容区域占满剩余高度 */
  flex: 1;
  overflow: hidden;
  padding-bottom: 50px;
}

/* 编辑 */
.edit {
  /* flex 属性：放大比例 1，不缩小，基础宽度 100% */
  /* 占满一行 */
  display: flex; /* 启用Flex布局!!! */
  justify-content: space-between; /* 两端对齐（左元素居左，右元素居右） */
  align-items: center; /* 垂直居中对齐 */
  padding: 5px 10px; /* 上下12px，左右16px内边距 */
  /* border-bottom: 1px solid #eee; 底部边框分隔 */
  font-size: 16px;
  font-weight: 400;
}

.van-checkbox{
  padding: 0 5px;
}

.cart-list {
overflow: hidden;
}

/* 整个商品元素的布局 */
.cart-list-item{
  display: flex;
  /* border: 2px solid #000; */
  margin: 10px 10px;
  background-color: #fff;
}
/* 装照片的盒子 布局靠他去设计 */
.cart-list-item .picBox {
  /* width: 30%; */
  display: flex;
  margin: 5px 10px;
  /* border: 2px solid black; */
  border-radius: 20px;
  width: 100px;
  height: 100px;
}
/* 照片 */
.van-image {
  object-fit: cover;
}
/* 商品介绍 垂直排列 */
.goodsInfo {
  display: flex;
  flex-direction: column;
  flex: 1;/* 占满剩下的宽度 */
}
/* 商品name隐藏 */
.goodsInfo .goods_name {
  /* 关键样式：限制显示行数 */
  display: -webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */
  -webkit-box-orient: vertical; /* 设置伸缩盒子的子元素排列方式为垂直 */
  -webkit-line-clamp: 2; /* 限制文本显示的行数为2行 */
  line-clamp: 2; /* 标准属性，增强兼容性 */
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods_count {
  display: flex;
  margin-top: 20px;
}
.goods_price {
  display: flex;
  width: 50%;
  color: #e47c61;
}
.van-stepper {
  display: flex;
  flex: 1;
}

</style>

<template>
    <!-- 商品模块 -->
  <div class="goodsItem">
    <!-- 图片左边 -->
    <van-image class="left" height="100%" width="40%" :src="item.goods_image" fit="fill"/>
    <!-- 商品内容右边 -->
    <div class="goodsContext left">
        <!-- 商品名称 -->
        <!-- 点击事件 跳转路由并且传递了参数 -->
        <div class="goodsName" @click="$router.push(`/prodetail/${item.goods_id}`)">{{ item.goods_name }}</div>
        <!-- 商品已售出数量 -->
        <div class="sales">已售{{ item.goods_sales }}件</div>
        <!-- 价钱 -->
        <div class="price">
            <!-- 现价 -->
            <span class="minPrice">￥{{ item.goods_price_min }}&nbsp;</span>
            <!-- 原价 -->
            <span class="maxPrice">￥{{ item.goods_price_max }}</span>
        </div>
    </div>

    <!-- 商品价格 -->
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    item: {
      typeof: Object
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.left {
    float: left;
}
.right {
    float: right;
}

.goodsItem {
    height: 150px;
    padding: 10px;
}

.goodsContext {
    width: 60%;
    padding: 10px
}

/* 商品名称 */
.goodsName{
    margin: 10px auto 10px;
    font-size: 12px;
    display: -webkit-box; /* 关键：将对象作为弹性伸缩盒子模型显示 */
      -webkit-box-orient: vertical; /* 设置伸缩盒子的子元素排列方式为垂直 */
      -webkit-line-clamp: 2; /* 限制显示的行数为2行 */
      overflow: hidden; /* 超出部分隐藏 */
      text-overflow: ellipsis; /* 溢出部分显示省略号 */
}

/* 已售 */
.sales {
    font-size: 8px;
    color: #9a9a9a;
}

/* 价格模块 */
.price {
margin-top: 10px;
}
/* 现价 */
.minPrice {
    color: #c7675f;
}
/* 原价 */
.maxPrice {
    color: #9a9a9a;
    font-size: 8px;
    text-decoration: line-through;
}
</style>

<template>
  <div class="list">
    <!-- 顶部标题 -->
    <van-nav-bar
      title="商品搜索"
      left-text="首页"
      left-arrow
      @click-left="handleClickLeft()"
    />
    <!-- 搜索框 -->
    <van-search
      :value="this.querySearch"
      placeholder="请输入搜索关键词"
      background="#fff"
      show-action
    >
      <template #action>
        <div class="app">
          <van-icon name="apps-o" />
        </div>
      </template>
    </van-search>

    <!-- 排序 -->
    <div class="sort">
      <div class="sortItem" @click="handleActive(0)" :class="{ sort_active: activeIndex === 0 }">综合排序</div>
      <div class="sortItem" @click="handleActive(1)" :class="{ sort_active: activeIndex === 1 }">销量排序</div>
      <div class="sortItem" @click="handleActive(2)" :class="{ sort_active: activeIndex === 2 }">价格排序</div>
    </div>
    <GoodsItem v-for="item in goodsList" :key="item.goods_id" :item="item"></GoodsItem>
  </div>
</template>

<script>
import { getProList } from '@/api/product'

export default {
  name: 'listIndex',
  async created () {
    console.log('请求参数', this.sortQuery)

    // 一定要记得await！！！渲染商品列表 根据前网页携带的参数query获取
    const res = (await getProList(this.sortQuery)).data.list
    console.log(res)
    this.goodsList = res.data
  },
  computed: {
    querySearch () {
      return this.$route.query.search
    }
  },
  data () {
    return {
      activeIndex: 0, // 默认综合排序
      // 搜索输入框内容
      value: '',
      // 商品列表
      goodsList: [],
      // 修改排序传参 下标为0 则是综合 为1 则是sales-按销量搜索，为2则是price-按价格搜索
      sortList: ['all', 'sales', 'price'],
      // 默认 请求的时候 传递的参数 后续会根据用户选择 修改
      sortQuery: {
        sortType: 'all', // 按综合搜索
        sortPrice: '0', // 价格从低到高
        categoryId: this.$route.query.categoryId, // 分类id
        goodsName: this.$route.query.search || '', // 商品名称
        page: '1'// 页码
      }
    }
  },
  methods: {
    async handleActive (index) {
      // 修改高亮下标
      this.activeIndex = index
      // 修改请求中排序的参数 重新赋值为用户在排序列表中 选择的排序方式
      this.sortQuery.sortType = this.sortList[index]
      // 若选择为 价格排序
      if (this.sortQuery.sortType === 'price') {
        const sort = Number(this.sortQuery.sortPrice)// 字符串转数字
        // 1. 取反 0变1 1变0
        // 2. 若为1则赋值1 反之为0
        !sort ? this.sortQuery.sortPrice = '1' : this.sortQuery.sortPrice = '0'
      }
      // 重新发送请求 参数为sortQuery
      // 并且 接受返回值 重新赋值 给goodsList
      this.goodsList = (await getProList(this.sortQuery)).data.list.data// 稍微等一下
    },

    handleClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.sort {
  display: flex;
  width: 100%;
}

.sortItem {
  flex: 1; /* 三个按钮均分容器宽度 */
  text-align: center;
  line-height: inherit;
}

.sort_active {
  color: orange;
}

.van-search__content {
  border-radius: 10px;
}

.van-search__action {
  font-size: 20px;
}
</style>

<template>
  <div class="category">
    <!-- 标题 -->
    <MyTitle>
        <template #title>全部分类</template>
      </MyTitle>
    <!-- 搜索框 -->
    <div class="search">
      <van-search
        v-model="value"
        shape="round"
        background="#e5e5e5"
        placeholder="请输入搜索关键词"
      />
    </div>
    <!-- 内容 -->
    <div class="list-box">
      <!-- 侧边栏 -->
      <div class="left">
        <ul>
          <li
          v-for="(item,index) in categoryList" :key="item.category_id"
          @click="activeIndex = index"
          :class="{active:activeIndex === index}"
          >{{ item.name }}</li>
        </ul>
      </div>
      <div class="right">
        <van-grid :column-num="3">
          <van-grid-item v-for="item in categoryList[activeIndex]?.children"
          :key="item.category_id"
          :icon="item.image.external_url"
          :text="item.name"
          @click="$router.push({path:'/searchlist',query:{categoryId:item.category_id}})"
          />
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { getCategoryList } from '@/api/category'
export default {
  name: 'categoryIndex',
  async created () {
    // console.log(await getCategoryList())
    const res = await getCategoryList()
    console.log(res.data.list)
    this.categoryList = res.data.list
  },
  data () {
    return {
      // 高亮下标
      activeIndex: 0, // 默认为0
      value: '',
      categoryList: []
    }
  }
}
</script>

<style scoped>
/* 布局容器 - 使用flex确保左右布局 */
.list-box {
  display: flex;
  width: 100%;
  /* 让内容区域占满剩余高度 */
  flex: 1;
  overflow: hidden;
}

/* 左侧边栏 */
.left {
  /* 固定宽度 */
  width: 100px;
  /* 确保不被压缩 */
  flex-shrink: 0;
}

/* 右侧内容区 */
.right {
  /* 占满剩余宽度 */
  flex: 1;
  /* 右侧内容超出时可滚动 */
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
}

.category {
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.title {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
}

.search {
  padding: 0 10px 10px;
}

.left ul {
  background-color: #f3f3f3;
  height: 100%;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  scrollbar-width: thin;
}

.left ul li {
  line-height: 50px;
  text-align: center;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  list-style: none;
  border-bottom: 1px solid #eee;
}

.active {
  background-color: #fff;
  color: orange;
}

/* 修改原有的 .van-grid-item__icon 样式 */
::v-deep .van-grid-item__icon {
  font-size: 65px;
  width: auto;
  height: auto;
}

/* 确保网格布局正常显示 */
.van-grid {
  padding: 10px 0;
}
</style>

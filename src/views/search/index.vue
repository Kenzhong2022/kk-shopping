<template>
  <div class="search">
    <!-- 顶部标题 -->
    <van-nav-bar
      title="商品搜索"
      left-text="首页"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 搜索框 -->
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      show-action
    >
      <template #action>
        <div @click="onSearch(value)" class="btnSearch">搜索</div>
      </template>
    </van-search>
    <!-- 历史搜索 -->
    <!-- 顶部标题 和 删除按钮 -->
    <div class="title" v-if="historyList.length !== 0">
        <span>最近搜索</span>
        <van-icon @click="clear" name="delete-o" size="16" />
      </div>
    <!-- 左对齐 -->
    <van-row type="flex">
      <!-- 点击事件传递 历史记录中的元素 -->
      <van-col span="6" v-for="item in historyList" :key="item" @click="onSearch(item)">{{ item }}</van-col>
    </van-row>

  </div>
</template>

<script>
import { getHistory, setHistory } from '@/utils/storage'

export default {
  name: 'searchIndex',
  data () {
    return {
      value: '', // 用户搜索内容
      historyList: getHistory()// 历史搜索记录获取从本地
    }
  },
  methods: {
    // 回到主页
    onClickLeft () {
      console.log('点击右左侧箭头')
      this.$router.go(-1)
    },
    // 处理搜索 并跳转页面 传递参数
    onSearch (value) {
      console.log('搜索内容:', value)
      // 看看搜索内容是否存在于历史数组中 并找到对应下标
      const index = this.historyList.indexOf(value)
      // console.log('找到了', index)
      // 2. 若找到了移除该元素
      if (index !== -1) {
        this.historyList.splice(index, 1)
      }
      // 2.1数组前置插入元素
      this.historyList.unshift(value)
      setHistory(this.historyList)// 保存历史记录到本地

      // 跳转页面 第一种写法
      // this.$router.push({
      //   path: '/searchlist',
      //   query: {
      //     searchValue: value
      //   }
      // })
      // 第二种写法
      this.$router.push(`/searchlist?search=${value}`)
    },
    // 清空历史记录
    clear () {
      // 清空数组
      this.historyList = []
      setHistory(this.historyList)
    }
  }
}
</script>

<style scoped>
/* 新增：设置整个页面背景为灰色 */
::v-deep body {
  background-color: #e5e5e5; /* 灰色背景 */
  margin: 0;
  padding: 0;
}

/* 确保搜索区域背景与页面背景区分开 */
.search {
  background-color: #e5e5e5;
  min-height: 100vh;
}
.van-search {
padding: 0;
margin: 10px 20px;
background-color: #fff;
}

/* 整个搜索框外围 */
.van-search,
.van-search__content {
  height: 100%;
    flex: 1;
    padding: 0;
    background-color: #fff;
    border-radius: 10px 0 0 10px;
}

.van-search__content {
padding: 0;
}

.van-search .van-cell{
padding:0px 3px;
}

.btnSearch {
padding: 0px 20px;
background-color: red;
border-radius: 0 10px 10px 0;

}

/* 右侧icon */
.van-search__action {
    padding: 0 0px;
    color: #323233;
    font-size: 14px;
    line-height: 34px;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    background-color: #e5e5e5;
}

/* 历史搜索标题顶部 */
.title {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }

/* 历史搜索中的元素 */
.van-col--6 {
    width: 25%;
    text-align: center;
    padding: 7px;
    line-height: 15px;
    border-radius: 50px;
    background: #fff;
    font-size: 13px;
    border: 1px solid #efefef;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 10px;
    margin-left: 5%;
}

.van-row--flex {
    padding: 5px 10px;
}

</style>

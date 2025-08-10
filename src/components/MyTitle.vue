<template>
  <div class="myTitle">
    <!-- 定义 slot，调用者可在这里插入自定义内容 -->
    <slot name="title">默认标题</slot>
  </div>
</template>

<script>
export default {
  name: 'MyTitle', // 将来注册全局组件时 from '.../MyTitle'便于寻找类似uname
  data () {
    return {}
  }
}
</script>

<style scoped>
.myTitle {
width: 100%;
height: 50px;
text-align: center;
line-height: 50px;
background-color: #cf2300;
color: #fff;

}
</style>

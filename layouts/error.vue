<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      <img src="/images/404.png" class="error">
    </h1>
    <h1 v-else>
      <img src="/images/500.png" class="error">
    </h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'light' // 你可以为错误页面指定自定义的布局
}
</script>
<style>
.container{
  min-height:100vh;
}
.error{
  width:80%;
  margin:100px auto ;
}
</style>


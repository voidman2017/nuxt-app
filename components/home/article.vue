<template>
  <div class="article-wrap">
    <h3 class="title">{{title}}</h3>
    <ul>
      <li v-for="item in articleList" :key="item.id"><span>▪</span><a :title="item.title" :href="detailPath(item.id)" target="_blank">{{item.title}}</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["articleList",'title'],
  methods:{
    detailPath: function(id){
      return `/detail/${id}`;
    }
  }
};
</script>
<style scoped>
.article-wrap{width: 440px; height: 396px; padding: 40px 20px; position: relative;  overflow: hidden; zoom: 1; background: #fff; border: solid 1px #e4e4e4;}
.article-wrap .title{color: #525252;padding-left: 12px;font-size: 18px;height: 30px;line-height: 30px;font-weight: bold;text-align: left;}
.article-wrap ul{padding-top: 20px;}
.article-wrap ul li{width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #525252;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.article-wrap ul li span{ display: inline-block; width: 15px; color: #ff705f;}
</style>

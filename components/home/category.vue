<template>
  <div>
    <!-- 栏目头部 -->
    <nav class="category-nav">
      <h3 class="title">
        <a :href="'/list/'+category.id">{{category.name}}</a>
      </h3>
      <ul>
        <li v-for="(subCategory,index) in category.subCategorys" :key="subCategory.subId" :class="[index == active ? 'on' : '']" @mouseover="changeCategory(index)">
          <a :title="subCategory.subName" :href="'/list/'+subCategory.subId">
            <span>{{subCategory.subName}}</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- 栏目列表 -->
    <ul  class="subCategory-list">
      <li v-for="(subCategory,index) in category.subCategorys" :key="subCategory.subId" :class="[index == active ? 'show' : '', 'subCategory-wrap']" >
        <img :src="subCategory.imageUrl" alt="" class="sub-img"/>
        <ul class="article-list clearfix">
          <li v-for="(article) in subCategory.articles" :key="article.id">
            {{article.title}}
            <a :href="articlePath(article.id)" class="block-link" target="_blank"></a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["category"],
  methods:{
    changeCategory: function(index){
      this.active = index;
    },
    articlePath: function(id){
      return `/detail/${id}`
    }
  },
  data(){
    return{
      active: 0,
    }
  }
};
</script>
<style scoped>
.category-nav{width: 100%;height: 40px;line-height: 40px;position: relative;border-bottom: solid 1px #e4e4e4;}
.category-nav .title{position: absolute;left: 0;bottom: 0;font-size: 22px;text-align: left;font-weight: 400;cursor: pointer;}
.category-nav .title a:hover { color: #27a1e5; cursor: pointer; }
.category-nav .title:after { position: absolute; content: ""; width: 50px; height: 2px; background: #27a1e5; left: 0; bottom: 0; font-size: 0; }
.category-nav ul { position: absolute; right: 20px; bottom: -1px; }
.category-nav ul li { float: left; padding: 0 20px; font-size: 14px; cursor: pointer; }
.category-nav ul li.on { border: 1px solid #e4e4e4; border-bottom: none; background: #fff; }
.category-nav ul li.on span{ color: #27a1e5; }
.subCategory-list{position: relative;width: 1200px;height: 302px;}
.subCategory-list .subCategory-wrap{position: absolute;width: 1200px;left: 0px;top: 0px;margin-top: 22px;overflow: hidden;text-align: center;font-size: 20px;height: 280px;opacity: 0;transition: all 0.3s ease-in-out;	-moz-transition: all 0.3s ease-in-out; -webkit-transition: all 0.3s ease-in-out; -o-transition: all 0.3s ease-in-out;}
.subCategory-list .subCategory-wrap.show{opacity: 1;}
.subCategory-list .subCategory-wrap .sub-img{position: absolute;top: 50%;margin-top: -125px;width: 300px;height: 250px;left:0;}
.subCategory-list .subCategory-wrap .article-list{ width: 860px;margin-left: 340px;text-align: left;font-size: 14px;position: relative;}
.subCategory-list .subCategory-wrap .article-list li{float: left;width: 410px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;height: 28px;line-height: 28px;position: relative;}
.subCategory-list .subCategory-wrap .article-list li::before{content: '';width: 4px;height: 4px;background-color: #ff705f;display: inline-block;vertical-align: middle;margin-right: 6px;}
</style>

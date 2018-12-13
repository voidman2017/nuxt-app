<template>
  <div class="page-index">
    <!-- 顶部导航 -->
    <Navigation/>
    <!-- 轮播及推荐文章 -->
    <section class="page-hot center clearfix">
      <Banner :bannerList="banner"/>
      <Article :articleList="recommendArticle" title="推荐文章" class="right"/>
    </section>
    <!-- 大栏目列表 -->
    <section class="category-wrap center" v-for="category in category" :key="category.id">
      <Category :category="category"/>
    </section>
  </div>
</template>

<script>
import Navigation from "~/components/common/navigation.vue";
import Banner from "~/components/home/banner.vue";
import Article from "~/components/home/article.vue";
import Category from "~/components/home/category.vue";
import Service from "~/service";
export default {
  async asyncData({ app }) {
    /* const [{data:TKD},{data:navigation},{data:banner}] = await Promise.all([
      app.$axios.$get('http://127.0.0.1:9876/proxy/trc_news/front/index/tkd?channel=TRJR&terminal=A'),
      app.$axios.$get('http://127.0.0.1:9876/proxy/trc_news/front/common/navigation?channel=TRJR&terminal=A'),
      app.$axios.$get('http://127.0.0.1:9876/proxy/trc_news/front/common/banner?channel=TRJR&terminal=A&type=HOME_PAGE_TOP'),
    ])
    return { TKD,navigation,banner } */

    const homeData = await Promise.all([
      Service.Home.getTkd(),
      Service.Home.getBanner(),
      Service.Home.getRecommendArticle(),
      Service.Home.getCategory()
    ]).then(res => {
      return res;
    });
    const [TKD, banner, recommendArticle, category] = homeData;
    return {TKD, banner, recommendArticle, category };
  },
  // middleware: "appEntry",
  components: { Navigation, Banner, Article, Category },
  head() {
    return {
      title: this.TKD.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.TKD.description
        },
        { hid: "keywords", name: "keywords", content: this.TKD.keyword }
      ]
    };
  }
};
</script>

<style>
.page-hot {
  margin-top: 60px;
}
.category-wrap {
  margin: 40px auto;
  color: #525252;
}
</style>

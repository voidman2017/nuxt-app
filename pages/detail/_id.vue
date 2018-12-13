<template>
  <div id="page-detail">
    <!-- 顶部导航 -->
    <Navigation/>
    <section class="article">
      <h3 class="article-title txtc">{{articleDetail.title}}</h3>
      <article class="article-content" v-html="articleDetail.content"></article>
    </section>
  </div>
</template>

<script>
import Service from "~/service";
import Navigation from "~/components/common/navigation.vue";

export default {
  components: { Navigation },
  async asyncData({ app, params }) {
    const { id } = params;
    const homeData = await Promise.all([
      Service.Detail.getDetailNav(id),
      Service.Detail.getArticleDetail(id)
    ]).then(res => {
      return res;
    });

    const [detailNav, articleDetail] = homeData;
    return { detailNav, articleDetail };
  },
  head() {
    return {
      title: this.articleDetail.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.articleDetail.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.articleDetail.keyword
        }
      ]
    };
  }
};
</script>

<style>
#page-detail {
  padding-top: 100px;
}
.article {
  width: 800px;
  margin: 20px auto;
}
.article-title {
  line-height: 50px;
  font-size: 22px;
}
.article img {
  max-width: 100%;
}
</style>

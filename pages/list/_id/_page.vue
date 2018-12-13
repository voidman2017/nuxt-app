<template>
  <div class="page-list">
    <!-- 顶部导航 -->
    <Navigation/>
    <!-- 面包屑导航 -->
    <nav class="page-location center">
      <p>
        <a href="http://www.trc.com">泰然金融</a>>
        <a href="/">出借资讯</a>>
        <a
          v-if="ListNav.navigation && ListNav.navigation.subNavigations && ListNav.navigation.subNavigations.length > 0"
          :href="'/list/'+ListNav.navigation.subNavigations[0].subId"
        >{{ListNav.crumb.firstName}}</a>>
        <span>{{ListNav.crumb.secondName}}</span>
      </p>
    </nav>
    <!-- 栏目banner -->
    <section class="page-banner center">
      <img :src="Banner.imageUrl" alt="泰然金融">
      <a :href="Banner.linkUrl" class="block-link"></a>
    </section>
    <!-- 栏目详情 -->
    <section class="page-list-wrap center clearfix">
      <!-- 文章列表 -->
      <div class="main-list">
        <h3>{{Article.subName}}</h3>
        <ul v-if="Article && Article.articles && Article.articles.length > 0">
          <li v-for="article in Article.articles" :key="article.id">
            <a :href="'/detail/'+article.id" class="block-link"></a>
            <p class="article-title">{{article.title}}</p>
            <p class="article-summary">{{article.summary}}</p>
            <p class="update-time">{{time(article.publishTime)}}</p>
          </li>
        </ul>
        <ul v-else>
          <p class="no-data">暂无数据</p>
        </ul>
        <!-- 翻页器 -->
        <PageTurner :page="Article.page" :size="Article.size" :total="Article.total" :baseUrl="'/list/'+ Article.subId + '/'"/>
      </div>
      <!-- 右侧副栏目 -->
      <div class="sub-list">
        <!-- 导航 -->
        <nav class="sub-nav" v-if="ListNav.navigation">
          <h3>{{ListNav.navigation.name}}</h3>
          <ul v-if="ListNav.navigation.subNavigations && ListNav.navigation.subNavigations.length > 0 ">
            <li
              v-for="(subNav) in ListNav.navigation.subNavigations"
              :key="subNav.subId"
              :class="[ ListNav.crumb.secondName == subNav.subName ? 'on':'']"
            >
              <a :href="'/list/'+subNav.subId">{{subNav.subName}}</a>
            </li>
          </ul>
        </nav>
        <!-- 热门文章 -->
        <article class="hot-article" v-if="HotList.length > 0">
          <h3>热门文章</h3>
          <ul>
            <li v-for="(hot,index) in HotList" :key="hot.id">
              <span :class="[ index<2 ? 'red':'']">{{index+1}}／</span>
              <a :href="'/detail/'+hot.id" target="_blank">{{hot.title}}</a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from "~/components/common/navigation.vue";
import PageTurner from "~/components/common/pageturner.vue";
import Service from "~/service";
export default {
  components: { Navigation, PageTurner},
  async asyncData({ app, params }) {
    const { id, page } = params;

    const homeData = await Promise.all([
      Service.List.getListTkd(id),
      Service.List.getListBanner(id),
      Service.List.getListNav(id),
      Service.List.getListArticle(id, page , 1),
      Service.Common.getHotArticle()
    ]).then(res => {
      return res;
    });

    const [TKD, Banner, ListNav, Article, HotList] = homeData;
    return { TKD, Banner, ListNav, Article, HotList };
  },
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
  },
  methods: {
    time: function(date, format = "yyyy-MM-dd hh:mm:ss") {
      if (!date) return "--";
      if (typeof date == "string") date = date.replace(/-/g, "/"); //ie时间格式兼容
      date = new Date(date);
      var map = {
        M: date.getMonth() + 1, //月份
        d: date.getDate(), //日
        h: date.getHours(), //小时
        m: date.getMinutes(), //分
        s: date.getSeconds(), //秒
        q: Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
      };
      format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
        var v = map[t];
        if (v !== undefined) {
          if (all.length > 1) {
            v = "0" + v;
            v = v.substr(v.length - 2);
          }
          return v;
        } else if (t === "y") {
          return (date.getFullYear() + "").substr(4 - all.length);
        }
        return all;
      });
      return format;
    }
  }
};
</script>

<style>
.page-location {
  margin-top: 70px;
  border-top: 1px solid #f5f5f5;
  line-height: 4em;
}
.page-banner {
  height: 220px;
  position: relative;
}
.page-banner img {
  width: 100%;
  height: 220px;
}
.page-list-wrap .main-list {
  float: left;
  width: 780px;
  padding-right: 30px;
  padding-bottom: 20px;
}
.page-list-wrap .main-list h3 {
  font-size: 16px;
  color: #353535;
  line-height: 40px;
  border-bottom: 1px solid #e4e4e4;
}
.page-list-wrap .main-list .no-data {
  text-align: center;
  line-height: 200px;
}
.page-list-wrap .main-list li {
  font-size: 14px;
  color: #808080;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #e4e4e4;
  position: relative;
}

.page-list-wrap .main-list li .article-title {
  width: 420px;
  font-size: 16px;
  color: #525252;
  line-height: 40px;
  font-weight: 500px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border: none;
}
.page-list-wrap .main-list li .article-summary {
  line-height: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.page-list-wrap .main-list li .update-time {
  text-align: right;
  line-height: 21px;
  margin-top: 5px;
}
.page-list-wrap .sub-list {
  float: right;
  width: 420px;
  padding-left: 30px;
  padding-bottom: 10px;
  color: #525252;
}
.page-list-wrap .sub-list .sub-nav h3 {
  border: none;
}
.page-list-wrap .sub-list .sub-nav ul {
  width: 100%;
  border: 1px solid #e4e4e4;
}
.page-list-wrap .sub-list .sub-nav ul li {
  width: 100%;
  text-indent: 1em;
  line-height: 50px;
  font-size: 16px;
  border-bottom: 1px solid #e4e4e4;
}
.page-list-wrap .sub-list .sub-nav ul li.on {
  background-color: #27a1e5;
}
.page-list-wrap .sub-list .sub-nav ul li.on a{
  color: #fff;
}
.page-list-wrap .sub-list .sub-nav ul li:last-child {
  border: none;
}

.page-list-wrap .sub-list .hot-article {
  margin-bottom: 30px;
}
.page-list-wrap .sub-list h3 {
  margin: 20px auto 15px;
  font-size: 16px;
  border-bottom: 1px solid #e4e4e4;
}
.page-list-wrap .sub-list .hot-article h3 {
  line-height: 40px;
}
.page-list-wrap .sub-list .hot-article li {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  line-height: 40px;
}
.page-list-wrap .sub-list .hot-article li .red {
  color: #ff5555;
  font-weight: bold;
}
</style>

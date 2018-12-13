
import CONF from "~/config";
import Ajax , {commonAjax}  from "~/lib/ajax";
class HOME {
  /**
   * == 获取 tkd信息 ==
   */
  async getTkd() {
    return await commonAjax({
      url: `${CONF.PREFIX.TRC}/trc_news/front/index/tkd`,
      type: "GET",
    }).get('data').then((data = {}) => {
      return {"title":"资讯系统","keyword":"泰然金融","description":"泰然金融,资讯系统"};
      return data;
    })
  }
  /**
   * == 获取 导航信息 ==
   */
  async getNavigation() {
    return await commonAjax({
      url: `${CONF.PREFIX.TRC}/trc_news/front/common/navigation`,
      type: "GET",
    }).get('data').then((data = {}) => {
      return [{"id":19,"name":"互联网金融","subNavigations":[{"subId":22,"subName":"政策法规"},{"subId":23,"subName":"网贷资讯"},{"subId":24,"subName":"p2p网贷"},{"subId":25,"subName":"网贷平台"}]},{"id":18,"name":"投资理财","subNavigations":[{"subId":18,"subName":"理财小知识"},{"subId":19,"subName":"银行理财"},{"subId":20,"subName":"个人理财"},{"subId":21,"subName":"互联网理财"}]}];
      return data;
    })
  }
  /**
   * == 获取 banner轮播 ==
   */
  async getBanner() {
    return await commonAjax({
      url: `${CONF.PREFIX.TRC}/trc_news/front/common/banner`,
      type: "GET",
      params: {
        type: 'HOME_PAGE_TOP'
      }
    }).get('data').then((data = {}) => {
      return [{"id":24,"name":"3","imageUrl":"http://phwzdgnx1.bkt.clouddn.com/o_efb504493297d1543988819477.jpg","linkUrl":null},{"id":23,"name":"2","imageUrl":"http://phwzdgnx1.bkt.clouddn.com/o_c4f6353b584c81543988797873.jpg","linkUrl":null},{"id":22,"name":"1","imageUrl":"http://phwzdgnx1.bkt.clouddn.com/o_337b597bbdaeb1543988763977.jpg","linkUrl":null}];
      return data;
    })
  }
  /**
   * == 获取 推荐文章 ==
   */
  async getRecommendArticle() {
    return await commonAjax({
      url: `${CONF.PREFIX.TRC}/trc_news/front/index/recommend`,
      type: "GET",
    }).get("data").then(data => {
      return [{"id":38,"title":"前端组件化（一）：从一个简单的例子讲起","linkUrl":null},{"id":43,"title":"组件的 render 方法","linkUrl":null},{"id":42,"title":"使用 JSX 描述 UI 信息","linkUrl":null},{"id":41,"title":"React.js 基本环境安装","linkUrl":null},{"id":40,"title":"前端组件化（三）：抽象出公共组件类","linkUrl":null}];
      return data;
    })
  }

   /**
   * == 获取 文章列表 ==
   *
   *
   */
  async getCategory() {
    return await commonAjax({
      url: `${CONF.PREFIX.TRC}/trc_news/front/index/category`,
      type: "GET",
      params: Object.assign({}, CONF.PARAMS)
    }).get("data").then(data => {
      return [{"id":19,"name":"互联网金融","linkUrl":"","subCategorys":[{"subId":22,"subName":"政策法规","imageUrl":"http://phwzdgnx1.bkt.clouddn.com/o_beb1479c3ee6d1543981830162.jpg","linkUrl":"","articles":[{"id":45,"title":"事件监听","linkUrl":null},{"id":47,"title":"state vs props","linkUrl":null},{"id":46,"title":"组件的 state 和 setState","linkUrl":null},{"id":44,"title":"组件的组合、嵌套和组件树","linkUrl":null},{"id":37,"title":"React.js 小书","linkUrl":null}]},{"subId":23,"subName":"网贷资讯","imageUrl":"http://phwzdgnx1.bkt.clouddn.com/o_c82e5a601ae551543981866346.jpg","linkUrl":"","articles":[{"id":39,"title":"前端组件化（二）：优化 DOM 操作","linkUrl":null},{"id":38,"title":"前端组件化（一）：从一个简单的例子讲起","linkUrl":null}]},{"subId":24,"subName":"p2p网贷","imageUrl":"http://phwzdgnx1.bkt.clouddn.com/o_1b07545d5af891543981932718.jpg","linkUrl":"","articles":[{"id":40,"title":"前端组件化（三）：抽象出公共组件类","linkUrl":null}]},{"subId":25,"subName":"网贷平台","imageUrl":"http://phwzdgnx1.bkt.clouddn.com/o_967c2edb53db91543988654994.jpg","linkUrl":"","articles":[{"id":41,"title":"React.js 基本环境安装","linkUrl":null}]}]},{"id":18,"name":"投资理财","linkUrl":"","subCategorys":[{"subId":18,"subName":"理财小知识","imageUrl":"http://phwzdgnx1.bkt.clouddn.com/o_17843073e99031543981495204.jpg","linkUrl":"","articles":[{"id":42,"title":"使用 JSX 描述 UI 信息","linkUrl":null}]},{"subId":19,"subName":"银行理财","imageUrl":"http://phwzdgnx1.bkt.clouddn.com/o_5d0412ce461621543981556204.jpg","linkUrl":"","articles":[{"id":43,"title":"组件的 render 方法","linkUrl":null}]},{"subId":20,"subName":"个人理财","imageUrl":"http://phwzdgnx1.bkt.clouddn.com/o_16f9da26164891543981625501.jpg","linkUrl":"","articles":null},{"subId":21,"subName":"互联网理财","imageUrl":"http://phwzdgnx1.bkt.clouddn.com/o_34dc6771af0ee1543981674541.jpg","linkUrl":"","articles":null}]}]
      return data;
    })
  }
}

export default new HOME;

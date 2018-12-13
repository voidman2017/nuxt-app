
import CONF from "~/config";
import Ajax , {commonAjax}  from "~/lib/ajax";
class HOME {
  /**
   * == 获取 tkd信息 ==
   */
  async getListTkd(subId) {
    return await commonAjax({
      url: `${CONF.PREFIX.TRC}/trc_news/front/list/tkd`,
      type: "GET",
    }).updateParams({subId}).get('data').then((data = {}) => {
      // return {"title":"资讯系统","keyword":"泰然金融","description":"泰然金融,资讯系统"};
      return data;
    })
  }

  /**
   * == 获取列表顶部banner == 
   * @param {*} subId 
   */
  async getListBanner(subId) {
    return await commonAjax({
      url: `${CONF.PREFIX.TRC}/trc_news/front/list/banner`,
      type: "GET",
    }).updateParams({subId}).get('data').then((data = {}) => {
      // return {"imageUrl":"http://phwzdgnx1.bkt.clouddn.com/o_3d204141db6421543981790135.jpg","linkUrl":""};
      return data;
    })
  }

  /**
   * == 获取列表侧边banner == 
   * @param {*} subId 
   */
  async getListSideBanner() {
    return await commonAjax({
      url: `${CONF.PREFIX.TRC}/trc_news/front/common/banner`,
      type: "GET",
    }).updateParams({type: "LIST_PAGE"}).get('data').then((data = {}) => {
      // return {"imageUrl":"http://phwzdgnx1.bkt.clouddn.com/o_3d204141db6421543981790135.jpg","linkUrl":""};
      return data;
    })
  }

  /**
   * == 获取列表侧边banner == 
   * @param {*} subId 
   */
  async getListSideBanner() {
    return await commonAjax({
      url: `${CONF.PREFIX.TRC}/trc_news/front/common/banner`,
      type: "GET",
    }).updateParams({type: "LIST_PAGE"}).get('data').then((data = {}) => {
      // return {"imageUrl":"http://phwzdgnx1.bkt.clouddn.com/o_3d204141db6421543981790135.jpg","linkUrl":""};
      return data;
    })
  }

  /**
   * == 获取列表页面包屑信息 == 
   * @param {*} subId 
   */
  async getListNav(subId) {
    return await commonAjax({
      url: `${CONF.PREFIX.TRC}/trc_news/front/list/navigation_crumb`,
      type: "GET",
    }).updateParams({subId}).get('data').then((data = {}) => {
      // return {"navigation":{"id":19,"name":"互联网金融","subNavigations":[{"subId":22,"subName":"政策法规"},{"subId":23,"subName":"网贷资讯"},{"subId":24,"subName":"p2p网贷"},{"subId":25,"subName":"网贷平台"}]},"crumb":{"firstName":"互联网金融","secondName":"政策法规","subId":"22"}}
      return data;
    })
  }

  /**
   * == 获取文章列表 == 
   * @param {*} subId 
   */
  async getListArticle(subId, page=1, size=20) {
    return await commonAjax({
      url: `${CONF.PREFIX.TRC}/trc_news/front/list/article_list`,
      type: "GET",
    }).updateParams({subId, page, size }).get('data').then((data = {}) => {
      // return{"subId":22,"subName":"政策法规","articles":[{"id":63,"title":"动手实现 React-redux（六）：React-redux 总结","summary":"","publishTime":1544408635000},{"id":64,"title":"使用真正的 Redux 和 React-redux","summary":"","publishTime":1544408654000},{"id":62,"title":"动手实现 React-redux（五）：Provider","summary":"","publishTime":1544408612000},{"id":60,"title":"动手实现 React-redux（三）：connect 和 mapStateToProps","summary":"","publishTime":1544408572000},{"id":45,"title":"事件监听","summary":"","publishTime":1544083411000},{"id":61,"title":"动手实现 React-redux（四）：mapDispatchToProps","summary":"","publishTime":1544408591000},{"id":59,"title":"动手实现 React-redux（二）：结合 context 和 store","summary":"","publishTime":1544408550000},{"id":57,"title":"动手实现 Redux（六）：Redux 总结","summary":"","publishTime":1544408512000},{"id":54,"title":"动手实现 Redux（三）：纯函数（Pure Function）简介","summary":"","publishTime":1544408049000},{"id":53,"title":"动手实现 Redux（二）：抽离 store 和监控数据变化","summary":"","publishTime":1544408016000},{"id":51,"title":"React.js 的 context","summary":"","publishTime":1544407941000},{"id":50,"title":"高阶组件（Higher-Order Components）","summary":"","publishTime":1544407904000},{"id":58,"title":"动手实现 React-redux（一）：初始化工程","summary":"","publishTime":1544408529000},{"id":56,"title":"动手实现 Redux（五）：不要问为什么的 reducer","summary":"","publishTime":1544408488000},{"id":55,"title":"动手实现 Redux（四）：共享结构的对象提高性能","summary":"","publishTime":1544408465000},{"id":52,"title":"动手实现 Redux（一）：优雅地修改共享状态","summary":"","publishTime":1544407973000},{"id":37,"title":"React.js 小书","summary":"这是一本关于 React.js 的小书。\n\n因为工作中一直在使用 React.js，也一直以来想总结一下自己关于 React.js 的一些知识、经验。于是把一些想法慢慢整理书写下来，做成一本开源、免费、专业、简单的入门级别的小书，提供给社区。希望能够帮助到更多 React.js 刚入门朋友。\n\n由于水平有限，编写的过程难免会有诸多错误，也希望大家在看的过程中发现了问题，可以在 Github 上给该项目发 Pull Request。衷心希望可以有更多的人参与到本书的编写当中。","publishTime":1544083352000},{"id":48,"title":"test文章推荐类型,,","summary":"safdasfdsafsdf","publishTime":1544082568000},{"id":47,"title":"state vs props","summary":"","publishTime":1543989790000},{"id":46,"title":"组件的 state 和 setState","summary":"","publishTime":1543989668000}],"page":page,"size":size,"total":21};
      //
    })
  }
  
}

export default new HOME;

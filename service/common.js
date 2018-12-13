
import CONF from "~/config";
import Ajax , {commonAjax}  from "~/lib/ajax";
class Common {
  /**
   * == 获取 导航信息 ==
   */
  async getNavigation() {
    const data = await commonAjax({
      url: `${CONF.PREFIX.TRC}/trc_news/front/common/navigation`,
      type: "GET",
    }).get('data').then((data = {}) => {
      // return [{"id":19,"name":"互联网金融","subNavigations":[{"subId":22,"subName":"政策法规"},{"subId":23,"subName":"网贷资讯"},{"subId":24,"subName":"p2p网贷"},{"subId":25,"subName":"网贷平台"}]},{"id":18,"name":"投资理财","subNavigations":[{"subId":18,"subName":"理财小知识"},{"subId":19,"subName":"银行理财"},{"subId":20,"subName":"个人理财"},{"subId":21,"subName":"互联网理财"}]}];
      return data;
    })
    return data;
  }


  /**
   * == 获取 热门文章 ==
   */
  async getHotArticle() {
    const data = await commonAjax({
      url: `${CONF.PREFIX.TRC}/trc_news/front/common/hot`,
      type: "GET",
    }).get('data').then((data = {}) => {
      // return [{"id":45,"title":"事件监听","linkUrl":null},{"id":47,"title":"state vs props","linkUrl":null}]
      return data;
    })
    return data;
  }
}

export default new Common;

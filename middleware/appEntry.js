import Service from "~/service";
import Ajax , {commonAjax}  from "~/lib/ajax";
import CONF from "~/config";

export default function ({store}) {
    Service.Common.getNavigation().then((navigation)=>{
        store.commit('GET_NAV', navigation);
    })


    // commonAjax({
    //     url: `${CONF.PREFIX.TRC}/trc_news/front/common/navigation`,
    //     type: "GET",
    // }).get('data').then((navigation = {}) => {
    //     // return [{"id":19,"name":"互联网金融","subNavigations":[{"subId":22,"subName":"政策法规"},{"subId":23,"subName":"网贷资讯"},{"subId":24,"subName":"p2p网贷"},{"subId":25,"subName":"网贷平台"}]},{"id":18,"name":"投资理财","subNavigations":[{"subId":18,"subName":"理财小知识"},{"subId":19,"subName":"银行理财"},{"subId":20,"subName":"个人理财"},{"subId":21,"subName":"互联网理财"}]}];
    //     store.commit('GET_NAV', navigation)
    // })
}


const PREFIX = {
  TRC: "http://127.0.0.1:9876/proxy", // 泰然API
}
const PARAMS = {
  channel: "TRJR", // 渠道（金融:TRJR, 米今:MJ）
  terminal: "A"   // 终端类型
};
const DOMAIN = {
  "NEWS": "http://news.trc.com",
  "H5": "http://h5.trc.com",
  "JRWX": "http://jrwx.trc.com",
  "USERCENTER": "http://jri.trc.com",
  "ACCOUNT": "http://passport.trc.com",
  "BANKPAY": "http://zjcg.trc.com",
  "ASSETC": "http://jrstatic.trc.com",
  "HZCMS": "http://www.trc.com",
  "BANK": "http://www.trc.com",
  "HELP": "http://jrhelp.trc.com",
  "SALE": "http://sale.trc.com",
  "MAIN": "http://www.trc.com",
  "BBS": "http://bbs.trc.com",
  "VIP": "http://vip.trc.com"
}
export default {
  PREFIX,
  PARAMS,
  DOMAIN,
};

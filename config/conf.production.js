
const PREFIX = {
  TRC: "http://127.0.0.1:9876/proxy", // 泰然API
}
const PARAMS = {
  channel: "TRJR", // 渠道（金融:TRJR, 米今:MJ）
  terminal: "A"   // 终端类型
};
const DOMAIN = {
  "NEWS": "https://news.trc.com",
  "H5": "https://h5.trc.com",
  "JRWX": "https://jrwx.trc.com",
  "USERCENTER": "https://jri.trc.com",
  "ACCOUNT": "https://passport.trc.com",
  "BANKPAY": "https://zjcg.trc.com",
  "ASSETC": "https://jrstatic.trc.com",
  "HZCMS": "https://www.trc.com",
  "BANK": "https://www.trc.com",
  "HELP": "https://jrhelp.trc.com",
  "SALE": "https://sale.trc.com",
  "MAIN": "https://www.trc.com",
  "BBS": "https://bbs.trc.com",
  "VIP": "https://vip.trc.com"
}
export default {
  PREFIX,
  PARAMS,
  DOMAIN,
};

import axios from "axios";
import qs from 'qs';
import CONF from "~/config";

const isTypeOf = (val) => {
  const type = toString.call(val);
  switch (type) {
    case "[object Error]":
      return "error";
    case "[object Array]":
      return "array";
    case "[object RegExp]":
      return "regExp";
    case "[object Number]":
      return "number";
    case "[object Object]":
      return "object";
    case "[object String]":
      return "string";
    case "[object Boolean]":
      return "boolean";
    case "[object Function]":
      return "function";
    case "[object Undefined]":
      return "undefined";
    default:
      return "null";
  }
};

let arr = [],
  _slice = arr.slice,
  xhrQueue = [];
const reg_get = /get/i,
  reg_rquery = /\?/,
  reg_repl = /\{\{(\w+)\}\}/g;

//响应数据拦截器，判断服务器状态
axios.interceptors.response.use(function (response) {
  // http code = 200 时进入
  return response;
}, function (error) {
  // http code != 200 时进入
  const { response = {} } = error;
  console.warn("请求出错处理", arguments, response);
  let { data, status = 500 } = response;
  isTypeOf(data) !== "object" && (data = {})
  let { message, code = 500 } = data;
  Object.assign(data, { message, code });
  return Object.assign(response, { data });
});

//重新封装axios return ajax 组件
class Ajax {
  constructor(opts) {
    this.init(opts);
  }
  propertys() {
    this.contentType = 'application/json';
    this.isSerialize = false;
    this.isParse = false;
    this.type = 'GET';
    this.params = {};
    this.closePop = '';
  }
  init(opts) {
    this.propertys();
    this.setOption(opts);
  }
  setOption(opts = {}) {
    Object.assign(this, opts);
    return this;
  }
  setParame(key, val) {
    if (typeof key === 'object') {
      Object.assign(this.param, key);
    } else {
      this.param[key] = val;
    }
    return this;
  }
  removeParame(key) {
    delete this.param[key];
  }
  getParam() {
    return this.params;
  }
  updateParams(params) {
    if (typeof params === "string") {
      this.params = params;
    } else {
      const temp = isTypeOf(params) === "function" ?
        params(this.params) : params;
      Object.assign(this.params, temp);
    }
    return this;
  }
  updateUrlParams(url = "") {
    //解析url地址参数变量
    const self = this;
    return url.replace(/\{[\w_\.]+\}/g, function (key) {
      key = key.replace(/[\{\}]*/g, "");
      const val = self.params[key];
      val && delete self.params[key];
      return val;
    });
  }
  parse(params) {
    if (typeof params === 'string') {
      try {
        params = JSON.parse(params);
      } catch (e) {
        throw new Error(e);
        //暂不处理
      }
    }
    return params;
  }
  serialize(params) {
    params = this.parse(params);
    let temp = [];
    for (let key in params) {
      temp.push(key + '=' + encodeURIComponent(params[key]));
    }
    return temp.join("&");
  }
  get(str = "") {
    const argus = _slice.apply(arguments, [2]);
    let than = this, url = than.url,
      isSerialize = than.isSerialize,
      isParse = than.isParse,
      isGet = reg_get.test(than.type),
      params = than.getParam(),
      options = {
        "url": than.updateUrlParams(url),
        "json": true,
        "method": than.type,
        "timeout": 6000,
        "headers": {
          "Content-Type": than.contentType,
        }
      }, t = new Date();
    const start = +new Date; //记录请求开始时间
    const rKey = Math.random().toString(32).substr(2);

    if (isGet) {
      options.url += (reg_rquery.test(url) ? "&" : "?") + qs.stringify(params) + "&_t=" + rKey;        // 添加时间戳.(只给get请求添加时间戳)
    } else if (isSerialize) {
      options.data = than.serialize(params);
    } else if (isParse) {
      options.data = than.parse(params);
    } else {
      options.data = JSON.stringify(params);
    }
    consola.info(`\n====== 请求开始（${rKey}) ======\n ${JSON.stringify(options)}`)
    return axios(options).then((res) => {
      const end = +new Date;
      const diff = (end - start) / 1000; //计算请求耗时
      let { data = {} } = res;
      consola.info(`\n请求地址：${options.url}\n请求耗时：${diff}s（${diff > 2 ? "请求耗时过长请关注" : "正常响应"}）`); //打印请求耗时
      consola.success(`\n====== 请求响应（${rKey}) ======\n ${JSON.stringify(data)} \n====== 请求结束（${rKey}) ======`)
      return handle(str, this.parse(data));            //数据过滤处理
    }).catch((e) => failure(e, str));

  }
}

const handle = (str, data) => {
  let parts;
  if (str) {
    parts = str.split('.');
    parts.every((skey) => {
      data = data[skey] !== null ? data[skey] : undefined;
      return toString.call(data) == "[object Object]";
    })
  }
  return data;
}

//请求失败句柄  catch
const failure = (err, str) => {
  console.error("请求出错", err);
  return handle(str, { message: err });            //数据过滤处理
}

const ajax = (opts) => {
  if (opts instanceof Array) {
    const list = opts.map(opt => new Ajax(opt));
    return (strs = []) => axios.all(list.map((ajax, key) => {
      const str = strs[key] || "";
      return ajax.get(str);
    })
    ).catch(failure);
  } else {
    return new Ajax(opts);
  }
}


export function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

export const commonAjax = (opts) => {
  if (opts instanceof Array) {
    const list = opts.map(opt => {
      opt = Object.assign(opts, CONF.PARAMS)
      return new Ajax(opt)
    });
    return (strs = []) => axios.all(list.map((ajax, key) => {
      const str = strs[key] || "";
      return ajax.get(str);
    })
    ).catch(failure);
  } else {
    opts = mergeDeep (opts, {params:CONF.PARAMS});
    return new Ajax(opts);
  }
}

export default ajax;

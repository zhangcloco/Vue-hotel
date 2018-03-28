/**
 * Created by Administrator on 2017/4/19.
 */
/**
 * 写个方法专门访问中间层
 */
import fetch from '../config/fetch'
const OLD = 'old';
const NEW = 'new';
const WX_FLAG = '1';
const REQ_URL = '/mobile/mainNewRequest.htm';
/**
 * 对传参做一下处理 zhaojh 2017-04-19
 */
const getParamsStr = (type = OLD, params = {}) => {
  let reqStr = '';
  let date = new Date();
  // let dep = base64encode(utf16to8("userId")); let userid = getCookie(dep);

  params['timeStamp'] = date.getTime() + '';
  params['orderSourceId'] = '92462'; //92452
  params['orderChannel'] = '4'; //405
  // params['userId'] = userid; params['orderSourceId'] = '92452';
  // params['orderChannel'] = '405'; params['userId'] =
  // 'GGjdUxqfNqdWihEeTQdnnLmvaJGkoptnEsDnfJuTOoIfgYmfdZxeRifhQqOJmkSRigKOqzxiFlTU
  // k YaEjEPFYYUUiRxStMkxUSuX'; params['userId'] =
  // 'eKTlxWtxHGZgTFlcvulSxLlnvuCwXJCZBJjwwnSFhyxjCXoShHyoCRPaEWiVgwWJPIdPsEictiCz
  // j aFdCAkaaRzGfRRcjpPxHayu';

  if (type === OLD) {
    let cmd = params.cmd;
    delete params.cmd;
    let reqObj = {
      cmd: cmd,
      params: params
    };
    return JSON.stringify(reqObj);
  }
  return JSON.stringify(params);
}
const fetchCtw = async(reqData = {}, type = 'GET', url = "") => {
  let reqType = url == REQ_URL
    ? OLD
    : NEW;
  let reqStr = getParamsStr(reqType, reqData)
  return await fetch(type, url, {
    reqStr: reqStr,
    wx_flag: WX_FLAG
  })
}

export {
  //req,
  fetchCtw
}

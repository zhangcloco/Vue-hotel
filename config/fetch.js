import {baseUrl} from './env'

export default async(type = 'GET', url = '', data = {}, method = 'fetch') => {
  type = type.toUpperCase();
  url = baseUrl + url;
  if (type == 'GET') {
    let dataStr = ''; //数据拼接字符串
    Object
      .keys(data)
      .forEach(key => {
        dataStr += key + '=' + data[key] + '&';
      })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
  }

  if (window.fetch && method == 'fetch') {
    let requestConfig = {
      //credentials: 'include',//携带cookies,服务层不可("Access-Control-Allow-Origin", "*")
      method: type,
      headers: {
        //				'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      mode: "cors",
      cache: "force-cache"
    }

    if (type == 'POST') {
      let sendData = '';
      for (var key in data) {
        sendData += key + '=' + data[key] + '&'
      }
      let len = sendData.length;
      sendData = len > 0
        ? sendData.substr(0, len - 1)
        : '';
      Object.defineProperty(requestConfig, 'body', {
        value: sendData //JSON.stringify(data);
      })
    }

    try {
      var response = await fetch(url, requestConfig)
      var responseJson = await response.json();
    } catch (error) {
      console.log("error")
      throw new Error(error);
    }
    return responseJson;
  } else {
    let returnObj;
    return new Promise(function (resolve, reject) {
      let requestObj;
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest();
      } else {
        requestObj = new ActiveXObject;
      }

      let sendData = '';
      if (type == 'POST') {
        for (var key in data) {
          sendData += key + '=' + data[key] + '&'
        }
        let len = sendData.length;
        sendData = len > 0
          ? sendData.substr(0, len - 1)
          : ''; //JSON.stringify(data);
      }
      requestObj.open(type, url, true);
      requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      requestObj.send(sendData);
      requestObj.onreadystatechange = () => {
        if (requestObj.readyState == 4) {
          if (requestObj.status == 200) {
            let obj = requestObj.response;
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj);
            }
            returnObj = obj;
            resolve(returnObj);
          } else {
            throw new Error(requestObj);
          }
        }
      }
    });
  }
}

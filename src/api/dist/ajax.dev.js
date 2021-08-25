"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ajax;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
ajax 请求函数模块
*/

/**
 * 向外部暴漏一个函数 ajax
 * @param {*} url 请求路径，默认为空
 * @param {*} data 请求参数，默认为空对象
 * @param {*} type 请求方法，默认为GET
 */
function ajax() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  // 返回值 Promise对象 （异步返回的数据是response.data，而不是response）
  return new Promise(function (resolve, reject) {
    //（利用axios）异步执行ajax请求
    var promise; // 这个内部的promise用来保存axios的返回值(promise对象)

    if (type === 'GET') {
      // 准备 url query 参数数据
      var dataStr = ''; // 数据拼接字符串，将data连接到url

      Object.keys(data).forEach(function (key) {
        dataStr += key + '=' + data[key] + '&';
      });

      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
      } // 发送 get 请求


      promise = _axios["default"].get(url);
    } else {
      // 发送 post 请求
      promise = _axios["default"].post(url, data);
    }

    promise.then(function (response) {
      // 成功回调resolve()
      resolve(response.data);
    })["catch"](function (error) {
      // 失败回调reject()
      reject(error);
    });
  });
}
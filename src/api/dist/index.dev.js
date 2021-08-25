"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqLogout = exports.reqUser = exports.reqSmsLogin = exports.reqSendCode = exports.reqPwdLogin = exports.reqShops = exports.reqCategorys = exports.reqAddress = void 0;

var _ajax = _interopRequireDefault(require("./ajax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*与后台交互模块 （依赖已封装的ajax函数）
 */

/**
 * 获取地址信息(根据经纬度串)
 * 这个接口的经纬度参数是在url路径里的，没有query参数
 */
var reqAddress = function reqAddress(geohash) {
  return (0, _ajax["default"])("/position/".concat(geohash));
};
/**
 * 获取 msite 页面食品分类列表
 */


exports.reqAddress = reqAddress;

var reqCategorys = function reqCategorys() {
  return (0, _ajax["default"])('/index_category');
};
/**
 * 获取 msite 商铺列表(根据query参数：经纬度)
 * 将经纬度两个数据作为一个参数对象传入
 * 也可以两个数据分别传入ajax， 然后再放入一个对象参数内， 如下面的手机号验证码接口
 */


exports.reqCategorys = reqCategorys;

var reqShops = function reqShops(_ref) {
  var latitude = _ref.latitude,
      longitude = _ref.longitude;
  return (0, _ajax["default"])('/shops', {
    latitude: latitude,
    longitude: longitude
  });
};
/**
 * 账号密码登录
 */


exports.reqShops = reqShops;

var reqPwdLogin = function reqPwdLogin(name, pwd, captcha) {
  return (0, _ajax["default"])('/login_pwd', {
    name: name,
    pwd: pwd,
    captcha: captcha
  }, 'POST');
};
/**
 * 获取短信验证码
 */


exports.reqPwdLogin = reqPwdLogin;

var reqSendCode = function reqSendCode(phone) {
  return (0, _ajax["default"])('/sendcode', {
    phone: phone
  });
};
/**
 * 手机号验证码登录
 */


exports.reqSendCode = reqSendCode;

var reqSmsLogin = function reqSmsLogin(phone, code) {
  return (0, _ajax["default"])('/login_sms', {
    phone: phone,
    code: code
  }, 'POST');
};
/**
 * 获取用户信息(根据会话)
 */


exports.reqSmsLogin = reqSmsLogin;

var reqUser = function reqUser() {
  return (0, _ajax["default"])('/userinfo');
};
/*
 * 请求登出
 */


exports.reqUser = reqUser;

var reqLogout = function reqLogout() {
  return (0, _ajax["default"])('/logout');
};

exports.reqLogout = reqLogout;
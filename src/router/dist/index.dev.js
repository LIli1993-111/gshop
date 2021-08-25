"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Msite = _interopRequireDefault(require("../pages/Msite/Msite.vue"));

var _Search = _interopRequireDefault(require("../pages/Search/Search.vue"));

var _Order = _interopRequireDefault(require("../pages/Order/Order.vue"));

var _Profile = _interopRequireDefault(require("../pages/Profile/Profile.vue"));

var _Login = _interopRequireDefault(require("../pages/Login/Login.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
路由器对象模块
 */
// const MSite = () => import('../pages/MSite/MSite.vue')
// const Search = () => import('../pages/Search/Search.vue')
// const Order = () => import('../pages/Order/Order.vue')
// const Profile = () => import('../pages/Profile/Profile.vue')
// import Login from '../pages/Login/Login.vue'
// import Shop from '../pages/Shop/Shop.vue'
// import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
// import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
// import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
// 声明使用插件
_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  // 所有路由
  routes: [{
    path: '/msite',
    component: MSite,
    // 返回路由组件的函数, 只有执行此函数才会加载路由组件, 这个函数在请求对应的路由路径时才会执行
    meta: {
      showFooter: true
    }
  }, {
    path: '/search',
    component: _Search["default"],
    meta: {
      showFooter: true
    }
  }, {
    path: '/order',
    component: _Order["default"],
    meta: {
      showFooter: true
    }
  }, {
    path: '/profile',
    component: _Profile["default"],
    meta: {
      showFooter: true
    }
  }, {
    path: '/',
    redirect: '/msite'
  }, {
    path: '/login',
    component: _Login["default"] // meta: {
    //   showFooter: true
    // }

  } // {
  //   path: '/login',
  //   component: Login
  // },
  // {
  //   path: '/shop',
  //   component: Shop,
  //   // children: [
  //   {
  //     path: '/shop/goods',
  //     component: ShopGoods
  //   },
  // {
  //   path: '/shop/ratings',
  //   component: ShopRatings
  // },
  // {
  //   path: '/shop/info',
  //   component: ShopInfo
  // },
  // // {
  //   path: '',
  //   redirect: '/shop/goods'
  // },
  // ]
  // },
  ]
});

exports["default"] = _default;
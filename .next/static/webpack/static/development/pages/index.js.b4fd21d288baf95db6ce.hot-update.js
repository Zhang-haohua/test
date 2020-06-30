webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/source */ "./utils/source.js");
var _jsxFileName = "/Users/zhanghaohua/Documents/GitHub/test/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function HomePage() {
  var _this = this;

  var data = Object(_utils_source__WEBPACK_IMPORTED_MODULE_1__["getChatSource"])();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }
  }, ">"), __jsx("img", {
    src: "https://static.it1352.com/Content/img/login_register.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  })), data.map(function (item, index) {
    return __jsx("div", {
      key: index.toString(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 39
      }
    }, item.msg);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.b4fd21d288baf95db6ce.hot-update.js.map
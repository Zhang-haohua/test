webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/source.js":
/*!*************************!*\
  !*** ./utils/source.js ***!
  \*************************/
/*! exports provided: getChatSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChatSource", function() { return getChatSource; });
var getChatSource = function getChatSource() {
  var results = [];
  var currentTime = new Date().getTime() - 10000000;

  for (var i = 0; i < 100; i++) {
    results.push({
      time: new Date(currentTime),
      msg: "Message \"".concat(i)
    });
    currentTime++;
  }

  return results;
};

/***/ })

})
//# sourceMappingURL=index.js.4ed9107023e5a3874e9c.hot-update.js.map
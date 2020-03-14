webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CountryStat.js":
/*!***********************************!*\
  !*** ./components/CountryStat.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountryStat; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStats */ "./components/useStats.js");
var _jsxFileName = "/home/icode/Codebase/Personal/Nextjs/first-app/components/CountryStat.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CountryStat() {
  var _useStats = Object(_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])('https://covid19.mathdro.id/api/countries'),
      loading = _useStats.loading,
      error = _useStats.error,
      stats = _useStats.stats; //   console.log(stats);


  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("select", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, (stats === null || stats === void 0 ? void 0 : stats.countries) && Object.entries(stats.countries).map(function (country, code) {
    console.log({
      country: country,
      code: code
    });
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.cf3710ebf08a2f2b4218.hot-update.js.map
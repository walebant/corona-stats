webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/typography */ "./node_modules/antd/lib/typography/index.js");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_useStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/useStats */ "./components/useStats.js");
/* harmony import */ var _components_CountryStat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CountryStat */ "./components/CountryStat.js");
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Global */ "./components/Global.js");
/* harmony import */ var _components_DailySummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DailySummary */ "./components/DailySummary.js");


var _jsxFileName = "/home/icode/Codebase/Personal/Nextjs/corona-stats/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_1___default.a.Title;
function Index() {
  var _useStats = Object(_components_useStats__WEBPACK_IMPORTED_MODULE_4__["default"])('https://covid19.mathdro.id/api/'),
      loading = _useStats.loading,
      error = _useStats.error,
      stats = _useStats.stats;

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(Title, {
    level: 3,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "COVID-19 Global Stats"), __jsx(_components_Global__WEBPACK_IMPORTED_MODULE_6__["default"], {
    stats: stats,
    loading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_CountryStat__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.aa0b8078563819951566.hot-update.js.map
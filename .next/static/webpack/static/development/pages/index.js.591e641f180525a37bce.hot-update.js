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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_useStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/useStats */ "./components/useStats.js");
/* harmony import */ var _components_CountryStat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CountryStat */ "./components/CountryStat.js");
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Global */ "./components/Global.js");
var _jsxFileName = "/home/icode/Codebase/Personal/Nextjs/first-app/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Index() {
  var _useStats = Object(_components_useStats__WEBPACK_IMPORTED_MODULE_2__["default"])('https://covid19.mathdro.id/api/'),
      loading = _useStats.loading,
      error = _useStats.error,
      stats = _useStats.stats;

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "COVID-19 Global Stats"), __jsx(_components_Global__WEBPACK_IMPORTED_MODULE_4__["default"], {
    stats: stats,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_components_CountryStat__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.591e641f180525a37bce.hot-update.js.map
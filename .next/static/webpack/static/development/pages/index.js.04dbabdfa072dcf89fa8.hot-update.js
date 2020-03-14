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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      seleceted = _useState[0],
      setSeleceted = _useState[1];

  var _useStats = Object(_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])('https://covid19.mathdro.id/api/countries'),
      loading = _useStats.loading,
      error = _useStats.error,
      stats = _useStats.stats; //   console.log(stats);


  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("select", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, (stats === null || stats === void 0 ? void 0 : stats.countries) && Object.entries(stats.countries).map(function (country, i) {
    return __jsx("option", {
      value: country[1],
      key: i,
      onChange: function onChange(e) {
        return setSeleceted(e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, country[0]);
  })));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false

})
//# sourceMappingURL=index.js.04dbabdfa072dcf89fa8.hot-update.js.map
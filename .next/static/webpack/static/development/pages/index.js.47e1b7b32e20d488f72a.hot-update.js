webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Global.js":
/*!******************************!*\
  !*** ./components/Global.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Global; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/icode/Codebase/Personal/Nextjs/first-app/components/Global.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var styles = {
  confirmed: {
    color: 'black',
    border: '1px solid red',
    padding: 10,
    width: '10rem'
  },
  recovered: {
    color: 'green'
  },
  death: {
    color: 'red'
  }
};
function Global(_ref) {
  var stats = _ref.stats;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "COVID-19 Global Stats"), __jsx("div", {
    style: styles.confirmed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Confirmed: ", stats.confirmed.value)), __jsx("div", {
    style: styles.recovered,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Recovered: ", stats.recovered.value)), __jsx("div", {
    style: styles.death,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Deaths: ", stats.deaths.value)));
}

/***/ })

})
//# sourceMappingURL=index.js.47e1b7b32e20d488f72a.hot-update.js.map
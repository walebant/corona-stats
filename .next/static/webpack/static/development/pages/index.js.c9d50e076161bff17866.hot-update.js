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
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_statistic_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/statistic/style/css */ "./node_modules/antd/lib/statistic/style/css.js");
/* harmony import */ var antd_lib_statistic_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_statistic_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_statistic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/statistic */ "./node_modules/antd/lib/statistic/index.js");
/* harmony import */ var antd_lib_statistic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_statistic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/spin/style/css */ "./node_modules/antd/lib/spin/style/css.js");
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);










var _jsxFileName = "/home/icode/Codebase/Personal/Nextjs/corona-stats/components/Global.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function Global(_ref) {
  var _stats$confirmed, _stats$recovered, _stats$deaths;

  var stats = _ref.stats,
      loading = _ref.loading;

  if (loading) {
    return __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_9___default.a, {
      size: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }

  return __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    gutter: 32,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(antd_lib_statistic__WEBPACK_IMPORTED_MODULE_7___default.a, {
    title: "Confirmed",
    value: stats === null || stats === void 0 ? void 0 : (_stats$confirmed = stats.confirmed) === null || _stats$confirmed === void 0 ? void 0 : _stats$confirmed.value,
    valueStyle: {
      color: '#c38755'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(antd_lib_statistic__WEBPACK_IMPORTED_MODULE_7___default.a, {
    title: "Recovered",
    value: stats === null || stats === void 0 ? void 0 : (_stats$recovered = stats.recovered) === null || _stats$recovered === void 0 ? void 0 : _stats$recovered.value,
    valueStyle: {
      color: '#3f8600'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(antd_lib_statistic__WEBPACK_IMPORTED_MODULE_7___default.a, {
    title: "Deaths",
    value: stats === null || stats === void 0 ? void 0 : (_stats$deaths = stats.deaths) === null || _stats$deaths === void 0 ? void 0 : _stats$deaths.value,
    valueStyle: {
      color: '#cf1322'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "2173983531",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Sen&display=swap');body{font-family:'Sen',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ljb2RlL0NvZGViYXNlL1BlcnNvbmFsL05leHRqcy9jb3JvbmEtc3RhdHMvY29tcG9uZW50cy9HbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NnQyxBQUVnRixBQUd2Qyw2QkFDaEMiLCJmaWxlIjoiL2hvbWUvaWNvZGUvQ29kZWJhc2UvUGVyc29uYWwvTmV4dGpzL2Nvcm9uYS1zdGF0cy9jb21wb25lbnRzL0dsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdGF0aXN0aWMsIENhcmQsIFJvdywgQ29sLCBTcGluIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdsb2JhbCh7IHN0YXRzLCBsb2FkaW5nIH0pIHtcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPFNwaW4gc2l6ZT1cImxhcmdlXCIgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSb3cgZ3V0dGVyPXszMn0gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgIDxDb2wgc3Bhbj17OH0+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxTdGF0aXN0aWNcbiAgICAgICAgICAgIHRpdGxlPVwiQ29uZmlybWVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0cz8uY29uZmlybWVkPy52YWx1ZX1cbiAgICAgICAgICAgIHZhbHVlU3R5bGU9e3sgY29sb3I6ICcjYzM4NzU1JyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvQ29sPlxuXG4gICAgICA8Q29sIHNwYW49ezh9PlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8U3RhdGlzdGljXG4gICAgICAgICAgICB0aXRsZT1cIlJlY292ZXJlZFwiXG4gICAgICAgICAgICB2YWx1ZT17c3RhdHM/LnJlY292ZXJlZD8udmFsdWV9XG4gICAgICAgICAgICB2YWx1ZVN0eWxlPXt7IGNvbG9yOiAnIzNmODYwMCcgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L0NvbD5cblxuICAgICAgPENvbCBzcGFuPXs4fT5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPFN0YXRpc3RpY1xuICAgICAgICAgICAgdGl0bGU9XCJEZWF0aHNcIlxuICAgICAgICAgICAgdmFsdWU9e3N0YXRzPy5kZWF0aHM/LnZhbHVlfVxuICAgICAgICAgICAgdmFsdWVTdHlsZT17eyBjb2xvcjogJyNjZjEzMjInIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9Db2w+XG5cbiAgICAgIDxzdHlsZSBqc3g9XCJ0cnVlXCIgZ2xvYmFsPntgXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U2VuJmRpc3BsYXk9c3dhcCcpO1xuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU2VuJywgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUm93PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/home/icode/Codebase/Personal/Nextjs/corona-stats/components/Global.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.c9d50e076161bff17866.hot-update.js.map
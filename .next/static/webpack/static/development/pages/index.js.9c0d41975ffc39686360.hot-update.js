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
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/select/style/css */ "./node_modules/antd/lib/select/style/css.js");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _useCountryStats__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useCountryStats */ "./components/useCountryStats.js");
/* harmony import */ var _useStats__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useStats */ "./components/useStats.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Loading */ "./components/Loading.js");










var _jsxFileName = "/home/icode/Codebase/Personal/Nextjs/corona-stats/components/CountryStat.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;




var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a.Option;
console.log(antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a);
function CountryStat() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])('NG'),
      seleceted = _useState[0],
      setSeleceted = _useState[1];

  var _useStats = Object(_useStats__WEBPACK_IMPORTED_MODULE_12__["default"])('https://covid19.mathdro.id/api/countries'),
      loading = _useStats.loading,
      error = _useStats.error,
      stats = _useStats.stats;

  var _useCountryStats = Object(_useCountryStats__WEBPACK_IMPORTED_MODULE_11__["default"])(seleceted),
      countryStats = _useCountryStats.countryStats;

  var handleChange = function handleChange(e) {
    return setSeleceted(e.target.value);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    defaultValue: seleceted,
    style: {
      width: 120
    },
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, (stats === null || stats === void 0 ? void 0 : stats.countries) && Object.entries(stats.countries).map(function (country, i) {
    return __jsx(Option, {
      value: country[1],
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, country[0]);
  })), loading ? __jsx(_Loading__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    gutter: 32,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(antd_lib_statistic__WEBPACK_IMPORTED_MODULE_7___default.a, {
    title: "Confirmed",
    value: stats.confirmed.value,
    valueStyle: {
      color: '#c38755'
    },
    prefix: __jsx(ArrowUpOutlined, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(antd_lib_statistic__WEBPACK_IMPORTED_MODULE_7___default.a, {
    title: "Recovered",
    value: stats.recovered.value,
    valueStyle: {
      color: '#3f8600'
    },
    prefix: __jsx(ArrowUpOutlined, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(antd_lib_statistic__WEBPACK_IMPORTED_MODULE_7___default.a, {
    title: "Deaths",
    value: stats.deaths.value,
    valueStyle: {
      color: '#cf1322'
    },
    prefix: __jsx(ArrowUpOutlined, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))))), error && __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, error));
}

/***/ })

})
//# sourceMappingURL=index.js.9c0d41975ffc39686360.hot-update.js.map
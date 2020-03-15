webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DailySummary.js":
/*!************************************!*\
  !*** ./components/DailySummary.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DailySummary; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Loading */ "./components/Loading.js");
/* harmony import */ var _useStats__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useStats */ "./components/useStats.js");








var _jsxFileName = "/home/icode/Codebase/Personal/Nextjs/corona-stats/components/DailySummary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




function DailySummary() {
  var _useStats = Object(_useStats__WEBPACK_IMPORTED_MODULE_11__["default"])('https://covid19.mathdro.id/api/daily'),
      loading = _useStats.loading,
      error = _useStats.error,
      stats = _useStats.stats;

  if (loading) {
    return __jsx(_Loading__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    });
  }

  Object.entries(stats).map(function (day) {
    var dayNow = new Date().getDate();
    var month = new Date().getMonth() + 1;

    if (day[1].reportDateString === "2020/0".concat(month, "/").concat(dayNow)) {
      return __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 32,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
        title: "Confirmed",
        value: day[1].deltaConfirmed,
        valueStyle: {
          color: '#c38755'
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
          lineNumber: 30
        },
        __self: this
      }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx(antd_lib_statistic__WEBPACK_IMPORTED_MODULE_7___default.a, {
        title: "Recovered",
        value: day[1].deltaRecovered,
        valueStyle: {
          color: '#3f8600'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }))));
    }
  });
  return __jsx(_Loading__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  });
}

/***/ })

})
//# sourceMappingURL=index.js.a0c741485be7219b2118.hot-update.js.map
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
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style/css */ "./node_modules/antd/lib/spin/style/css.js");
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/typography */ "./node_modules/antd/lib/typography/index.js");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _useDailyStats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useDailyStats */ "./components/useDailyStats.js");




var _jsxFileName = "/home/icode/Codebase/Personal/Nextjs/corona-stats/components/DailySummary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;


var Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_3___default.a.Title;
function DailySummary() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      dailyStats = _useState[0],
      setDailyStats = _useState[1];

  var _useDailyStats = Object(_useDailyStats__WEBPACK_IMPORTED_MODULE_5__["default"])('https://covid19.mathdro.id/api/daily/'),
      loading = _useDailyStats.loading,
      error = _useDailyStats.error,
      stats = _useDailyStats.stats;

  if (loading) {
    return __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
      size: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = stats[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var summary = _step.value;
      console.log(summary);
    } // Object.entries(stats).map(day => {
    //   const dayNow = new Date().getDate();
    //   const month = new Date().getMonth() + 1;
    //   if (day[1].reportDateString === `2020/0${month}/${dayNow}`) {
    //     setDailyStats(day[1]);
    //   }
    // });

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log(stats);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(Title, {
    level: 4,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Daily Summary"));
}

/***/ })

})
//# sourceMappingURL=index.js.37cf01cb8bb981d2c188.hot-update.js.map
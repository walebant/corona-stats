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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading */ "./components/Loading.js");
/* harmony import */ var _useStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useStats */ "./components/useStats.js");
var _jsxFileName = "/home/icode/Codebase/Personal/Nextjs/corona-stats/components/DailySummary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function DailySummary() {
  var _useStats = Object(_useStats__WEBPACK_IMPORTED_MODULE_3__["default"])('https://covid19.mathdro.id/api/daily'),
      loading = _useStats.loading,
      error = _useStats.error,
      stats = _useStats.stats;

  if (loading) {
    return __jsx(_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    });
  }

  console.log(stats); //   return (
  //     <Row gutter={32} style={{ textAlign: 'center' }}>
  //       <Col span={8}>
  //         <Card>
  //           <Statistic
  //             title="Confirmed"
  //             value={stats.confirmed.value}
  //             valueStyle={{ color: '#c38755' }}
  //           />
  //         </Card>
  //       </Col>
  //       <Col span={8}>
  //         <Card>
  //           <Statistic
  //             title="Recovered"
  //             value={stats.recovered.value}
  //             valueStyle={{ color: '#3f8600' }}
  //           />
  //         </Card>
  //       </Col>
  //       <Col span={8}>
  //         <Card>
  //           <Statistic
  //             title="Deaths"
  //             value={stats.deaths.value}
  //             valueStyle={{ color: '#cf1322' }}
  //           />
  //         </Card>
  //       </Col>
  //     </Row>
  //   );
}

/***/ })

})
//# sourceMappingURL=index.js.399a479e4bec2d950378.hot-update.js.map
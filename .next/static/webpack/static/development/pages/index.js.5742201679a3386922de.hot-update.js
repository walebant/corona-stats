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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_useStats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/useStats */ "./components/useStats.js");
/* harmony import */ var _components_CountryStat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CountryStat */ "./components/CountryStat.js");
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Global */ "./components/Global.js");
/* harmony import */ var _components_DailySummary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DailySummary */ "./components/DailySummary.js");


var _jsxFileName = "/home/icode/Codebase/Personal/Nextjs/corona-stats/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_1___default.a.Title;
function Index() {
  var _useStats = Object(_components_useStats__WEBPACK_IMPORTED_MODULE_5__["default"])('https://covid19.mathdro.id/api/'),
      loading = _useStats.loading,
      error = _useStats.error,
      stats = _useStats.stats;

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }, "COVID-19 Global Stats"), __jsx(_components_Global__WEBPACK_IMPORTED_MODULE_7__["default"], {
    stats: stats,
    loading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_CountryStat__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2173983531",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Sen&display=swap');body{font-family:'Sen',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ljb2RlL0NvZGViYXNlL1BlcnNvbmFsL05leHRqcy9jb3JvbmEtc3RhdHMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJnQyxBQUVnRixBQUd2Qyw2QkFDaEMiLCJmaWxlIjoiL2hvbWUvaWNvZGUvQ29kZWJhc2UvUGVyc29uYWwvTmV4dGpzL2Nvcm9uYS1zdGF0cy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IHVzZVN0YXRzIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlU3RhdHMnO1xuaW1wb3J0IENvdW50cnlTdGF0IGZyb20gJy4uL2NvbXBvbmVudHMvQ291bnRyeVN0YXQnO1xuaW1wb3J0IEdsb2JhbCBmcm9tICcuLi9jb21wb25lbnRzL0dsb2JhbCc7XG5pbXBvcnQgRGFpbHlTdW1tYXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvRGFpbHlTdW1tYXJ5JztcblxuY29uc3QgeyBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIHN0YXRzIH0gPSB1c2VTdGF0cygnaHR0cHM6Ly9jb3ZpZDE5Lm1hdGhkcm8uaWQvYXBpLycpO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8VGl0bGUgbGV2ZWw9ezN9IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgIENPVklELTE5IEdsb2JhbCBTdGF0c1xuICAgICAgPC9UaXRsZT5cbiAgICAgIDxHbG9iYWwgc3RhdHM9e3N0YXRzfSBsb2FkaW5nPXtsb2FkaW5nfSAvPlxuICAgICAgey8qIDxEYWlseVN1bW1hcnkgLz4gKi99XG4gICAgICA8Q291bnRyeVN0YXQgLz5cblxuICAgICAgPHN0eWxlIGpzeD1cInRydWVcIiBnbG9iYWw+e2BcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TZW4mZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTZW4nLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/icode/Codebase/Personal/Nextjs/corona-stats/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.5742201679a3386922de.hot-update.js.map
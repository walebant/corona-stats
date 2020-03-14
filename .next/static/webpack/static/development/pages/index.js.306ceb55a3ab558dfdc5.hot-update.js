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
/* harmony import */ var _useCountryStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCountryStats */ "./components/useCountryStats.js");
var _jsxFileName = "/home/icode/Codebase/Personal/Nextjs/first-app/components/CountryStat.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CountryStat() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('NG'),
      seleceted = _useState[0],
      setSeleceted = _useState[1];

  var _useCountryStats = Object(_useCountryStats__WEBPACK_IMPORTED_MODULE_1__["default"])(seleceted),
      loading = _useCountryStats.loading,
      error = _useCountryStats.error,
      stats = _useCountryStats.stats;

  var handleChange = function handleChange(e) {
    return setSeleceted(e.target.value);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("select", {
    onChange: handleChange,
    value: seleceted,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, (stats === null || stats === void 0 ? void 0 : stats.countries) && Object.entries(stats.countries).map(function (country, i) {
    return __jsx("option", {
      value: country[1],
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, country[0]);
  })));
}

/***/ }),

/***/ "./components/useCountryStats.js":
/*!***************************************!*\
  !*** ./components/useCountryStats.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCountryStats; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useCountryStats(selected) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    confirmed: {
      value: 22
    },
    recovered: {
      value: 22
    },
    deaths: {
      value: 22
    }
  }),
      stats = _useState3[0],
      setStats = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function fetchData() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              setError(null);
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://covid19.mathdro.id/api/countries/".concat(selected)).then(function (res) {
                return res.json();
              })["catch"](function (err) {
                return setError(err);
              }));

            case 4:
              data = _context.sent;
              setStats(data);
              setLoading(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }

    fetchData();
    return function () {};
  }, [selected]);
  return {
    loading: loading,
    error: error,
    stats: stats
  };
}

/***/ })

})
//# sourceMappingURL=index.js.306ceb55a3ab558dfdc5.hot-update.js.map
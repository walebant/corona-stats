webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/useDailyStats.js":
/*!*************************************!*\
  !*** ./components/useDailyStats.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDailyStats; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useDailyStats(url) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      stats = _useState3[0],
      setStats = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      summary = _useState4[0],
      setSummary = _useState4[1];

  var dayNow = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var dateNow = "2020/0".concat(month, "/").concat(dayNow);
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
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url).then(function (res) {
                return res.json();
              })["catch"](function (err) {
                return setError(err);
              }));

            case 4:
              data = _context.sent;
              // setStats(data);
              data.map(function (day) {
                if (day.reportDateString === dateNow) {
                  setSummary(day);
                }
              });
              setLoading(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }

    stats.map(function (day) {
      if (day.reportDateString === dateNow) {
        setSummary(day);
      }
    });
    fetchData();
    return function () {}; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    loading: loading,
    error: error,
    summary: summary
  };
}

/***/ })

})
//# sourceMappingURL=index.js.2e214eca71eeec18fa64.hot-update.js.map
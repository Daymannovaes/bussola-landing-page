webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daymannovaes/workspace/bussola-landing-page/components/PostCard.js";



var PostCard = function PostCard(_ref) {
  var cover = _ref.cover,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: cover,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, children));
};

PostCard.propTypes = {
  cover: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./components/PostImg.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Link */ "./components/Link.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_ResponsiveTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ResponsiveTitle */ "./components/ResponsiveTitle.js");
/* harmony import */ var _config_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/style-guide */ "./config/style-guide.js");
var _jsxFileName = "/Users/daymannovaes/workspace/bussola-landing-page/pages/index.js";






s;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2202355445", [_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"] * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2202355445",
    css: "@media only screen and (max-width:270px){h3.__jsx-style-dynamic-selector{font-size:0.7em;}}h4.__jsx-style-dynamic-selector{font-weight:100;margin:0;margin-top:3em;}div.__jsx-style-dynamic-selector a{padding:".concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px ").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"] * 2, "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXltYW5ub3ZhZXMvd29ya3NwYWNlL2J1c3NvbGEtbGFuZGluZy1wYWdlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNhLEFBSXFDLEFBS0osQUFNc0QsZ0JBVnRFLEFBS1MsU0FDTSxlQUNuQiw4QkFJQSIsImZpbGUiOiIvVXNlcnMvZGF5bWFubm92YWVzL3dvcmtzcGFjZS9idXNzb2xhLWxhbmRpbmctcGFnZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9jb21wb25lbnRzL0xpbmsnO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xuaW1wb3J0IFJlc3BvbnNpdmVUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1Jlc3BvbnNpdmVUaXRsZSc7XG5pbXBvcnQgeyBQQURESU5HX1VOSVQsIExPR09fSEVJR0hUIH0gZnJvbSAnLi4vY29uZmlnL3N0eWxlLWd1aWRlJztcbnNcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjcwcHgpIHtcbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM2VtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXYgOmdsb2JhbChhKSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogJHtQQURESU5HX1VOSVR9cHggJHtQQURESU5HX1VOSVQgKiAyfXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgIDxSZXNwb25zaXZlVGl0bGU+QnVzc29sYTxzcGFuIGNsYXNzTmFtZT1cImhpZGUteHNcIj4uc2Nob29sPC9zcGFuPjwvUmVzcG9uc2l2ZVRpdGxlPlxuXG4gICAgICAgIDxoMz5cbiAgICAgICAgICAgIEVzY29sYSBkZSBkZXNlbnZvbHZpbWVudG8gcGVzc29hbFxuICAgICAgICA8L2gzPlxuXG4gICAgICAgIDxoND5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5RdWVybyBzYWJlciBtYWlzPC9MaW5rPlxuICAgICAgICA8L2g0PlxuXG4gICAgICAgIDxQb3N0Q2FyZCBzcmM9XCIvc3RhdGljL3RleHRvLTEtY292ZXIuanBnXCI+XG4gICAgICAgICAgICBDb21vIHRlciBtb3RpdmHDp8Ojbz9cbiAgICAgICAgPC9Qb3N0Q2FyZD5cbiAgICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/daymannovaes/workspace/bussola-landing-page/pages/index.js */"),
    dynamic: [_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"] * 2],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ResponsiveTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Bussola", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2202355445", [_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"] * 2]]]) + " " + "hide-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, ".school")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2202355445", [_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"] * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Escola de desenvolvimento pessoal"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2202355445", [_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"] * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Quero saber mais")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: "/static/texto-1-cover.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Como ter motiva\xE7\xE3o?"));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.bf193eef9c69466a3b82.hot-update.js.map
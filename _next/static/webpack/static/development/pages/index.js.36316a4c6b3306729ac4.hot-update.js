webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/style-guide */ "./config/style-guide.js");
var _jsxFileName = "/Users/daymannovaes/workspace/bussola-landing-page/components/PostCard.js";





var PostCard = function PostCard(_ref) {
  var cover = _ref.cover,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2884202653", [_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.midlight, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.light, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].strongblue]]]) + " " + "postCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2884202653",
    css: ".postCard.__jsx-style-dynamic-selector{color:white;max-width:600px;border-radius:".concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], "px;}.head.__jsx-style-dynamic-selector,.body.__jsx-style-dynamic-selector{height:200px;overflow:hidden;-webkit-transition:600ms all;transition:600ms all;}img.__jsx-style-dynamic-selector,.head.__jsx-style-dynamic-selector{width:100%;border-radius:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], "px ").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], "px 0 0;display:block;}img.__jsx-style-dynamic-selector{width:calc(100% - 60px);margin:0 auto;}.head.__jsx-style-dynamic-selector{background:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.midlight, ";}.body.__jsx-style-dynamic-selector{background:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].deepblue, ";border-top:none;border-radius:0 0 ").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], "px ").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], "px;}.postCard.__jsx-style-dynamic-selector:hover .head.__jsx-style-dynamic-selector{background:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.light, ";}.postCard.__jsx-style-dynamic-selector:hover .body.__jsx-style-dynamic-selector{background:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].strongblue, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXltYW5ub3ZhZXMvd29ya3NwYWNlL2J1c3NvbGEtbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvUG9zdENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT29CLEFBRzZCLEFBTUMsQUFPRixBQU1hLEFBS2dCLEFBSUEsQUFNQSxBQUlBLFdBeEJ3QyxDQWJoRSxDQU1BLFdBYUYsSUFsQitCLENBT3hCLFNBWXpCLEVBSUEsQUFJb0IsQUFNcEIsQUFJQSxnQkFUb0YsaUJBM0JwRixNQU9BLFlBS2tCLGNBQ2xCLCtCQWVBIiwiZmlsZSI6Ii9Vc2Vycy9kYXltYW5ub3ZhZXMvd29ya3NwYWNlL2J1c3NvbGEtbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvUG9zdENhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgY29sb3JzLCBCT1JERVJfUkFESVVTLCBQQURESU5HX1VOSVQgfSBmcm9tICcuLi9jb25maWcvc3R5bGUtZ3VpZGUnO1xuXG5jb25zdCBQb3N0Q2FyZCA9ICh7IGNvdmVyLCBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0Q2FyZFwiPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucG9zdENhcmQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7Qk9SREVSX1JBRElVU31weDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWQsIC5ib2R5IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiA2MDBtcyBhbGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZywgLmhlYWQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7Qk9SREVSX1JBRElVU31weCAke0JPUkRFUl9SQURJVVN9cHggMCAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLnRyYW5zcGFyZW50Lm1pZGxpZ2h0fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmRlZXBibHVlfTtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAke0JPUkRFUl9SQURJVVN9cHggJHtCT1JERVJfUkFESVVTfXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdENhcmQ6aG92ZXIgLmhlYWQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLnRyYW5zcGFyZW50LmxpZ2h0fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RDYXJkOmhvdmVyIC5ib2R5IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5zdHJvbmdibHVlfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtjb3Zlcn0gYWx0PXtjb3Zlcn0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xuICAgIGNvdmVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcbiJdfQ== */\n/*@ sourceURL=/Users/daymannovaes/workspace/bussola-landing-page/components/PostCard.js */"),
    dynamic: [_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.midlight, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.light, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].strongblue],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2884202653", [_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.midlight, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.light, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].strongblue]]]) + " " + "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: cover,
    alt: cover,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2884202653", [_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.midlight, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.light, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].strongblue]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2884202653", [_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.midlight, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.light, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].strongblue]]]) + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, children));
};

PostCard.propTypes = {
  cover: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ })

})
//# sourceMappingURL=index.js.36316a4c6b3306729ac4.hot-update.js.map
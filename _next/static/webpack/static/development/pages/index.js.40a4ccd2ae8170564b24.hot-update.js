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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2378806604", [_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.midlight, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.light, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].strongblue]]]) + " " + "postCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2378806604",
    css: ".postCard.__jsx-style-dynamic-selector{color:white;max-width:600px;border-radius:".concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], "px;margin:0 auto;cursor:pointer;border:2px solid transparent;}.head.__jsx-style-dynamic-selector,.body.__jsx-style-dynamic-selector{height:200px;overflow:hidden;-webkit-transition:600ms all;transition:600ms all;}img.__jsx-style-dynamic-selector,.head.__jsx-style-dynamic-selector{border-radius:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], "px ").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], "px 0 0;}img.__jsx-style-dynamic-selector{width:calc(100% - 60px);margin:0 auto;display:block;}.head.__jsx-style-dynamic-selector{background:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.midlight, ";}.body.__jsx-style-dynamic-selector{background:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].deepblue, ";border-top:none;border-radius:0 0 ").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], "px ").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], "px;}.postCard.__jsx-style-dynamic-selector:hover .head.__jsx-style-dynamic-selector{background:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.light, ";border:2px solid red;}.postCard.__jsx-style-dynamic-selector:hover .body.__jsx-style-dynamic-selector{background:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].strongblue, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXltYW5ub3ZhZXMvd29ya3NwYWNlL2J1c3NvbGEtbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvUG9zdENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT29CLEFBRzZCLEFBV0MsQUFPbUUsQUFJeEQsQUFNZ0IsQUFJQSxBQU1BLEFBTUEsWUEzQ3hCLENBV0EsV0FXRixJQXJCK0IsQ0FZeEIsU0FVUCxFQUtsQixBQUlvQixBQU9LLEFBS3pCLFlBcEJBLElBU29GLEtBT3BGLFlBckNrQixNQVdsQixDQUlBLE9BZG1CLGVBRWMsNkJBQ2pDLEtBMkJBIiwiZmlsZSI6Ii9Vc2Vycy9kYXltYW5ub3ZhZXMvd29ya3NwYWNlL2J1c3NvbGEtbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvUG9zdENhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgY29sb3JzLCBCT1JERVJfUkFESVVTLCBQQURESU5HX1VOSVQgfSBmcm9tICcuLi9jb25maWcvc3R5bGUtZ3VpZGUnO1xuXG5jb25zdCBQb3N0Q2FyZCA9ICh7IGNvdmVyLCBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0Q2FyZFwiPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucG9zdENhcmQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7Qk9SREVSX1JBRElVU31weDtcblxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZCwgLmJvZHkge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDYwMG1zIGFsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1nLCAuaGVhZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHtCT1JERVJfUkFESVVTfXB4ICR7Qk9SREVSX1JBRElVU31weCAwIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMudHJhbnNwYXJlbnQubWlkbGlnaHR9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMuZGVlcGJsdWV9O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwICR7Qk9SREVSX1JBRElVU31weCAke0JPUkRFUl9SQURJVVN9cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0Q2FyZDpob3ZlciAuaGVhZCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMudHJhbnNwYXJlbnQubGlnaHR9O1xuXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdENhcmQ6aG92ZXIgLmJvZHkge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLnN0cm9uZ2JsdWV9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2NvdmVyfSBhbHQ9e2NvdmVyfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4pO1xuXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XG4gICAgY292ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xuIl19 */\n/*@ sourceURL=/Users/daymannovaes/workspace/bussola-landing-page/components/PostCard.js */"),
    dynamic: [_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.midlight, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.light, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].strongblue],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2378806604", [_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.midlight, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.light, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].strongblue]]]) + " " + "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: cover,
    alt: cover,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2378806604", [_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.midlight, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.light, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].strongblue]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2378806604", [_config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.midlight, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].transparent.light, _config_style_guide__WEBPACK_IMPORTED_MODULE_3__["colors"].strongblue]]]) + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
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
//# sourceMappingURL=index.js.40a4ccd2ae8170564b24.hot-update.js.map
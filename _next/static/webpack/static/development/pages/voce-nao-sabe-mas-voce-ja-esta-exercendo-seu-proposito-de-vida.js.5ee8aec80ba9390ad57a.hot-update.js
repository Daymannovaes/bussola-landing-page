webpackHotUpdate("static/development/pages/voce-nao-sabe-mas-voce-ja-esta-exercendo-seu-proposito-de-vida.js",{

/***/ "./components/MailChimp.js":
/*!*********************************!*\
  !*** ./components/MailChimp.js ***!
  \*********************************/
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
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var _AnimateForever__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimateForever */ "./components/AnimateForever.js");
/* harmony import */ var _config_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/style-guide */ "./config/style-guide.js");
var _jsxFileName = "/Users/daymannovaes/workspace/bussola-landing-page/components/MailChimp.js";


/* eslint-disable max-len  */






var MailChimp = function MailChimp(_ref) {
  var text = _ref.text,
      buttonText = _ref.buttonText,
      placeholder = _ref.placeholder,
      id = _ref.id,
      buttonAnimationDelay = _ref.buttonAnimationDelay,
      inputRef = _ref.inputRef,
      light = _ref.light,
      location = _ref.location,
      coloredBg = _ref.coloredBg;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "form-".concat(id),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1433783362", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + ((coloredBg ? 'colored-bg' : '') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1433783362",
    css: "input[type=\"email\"].__jsx-style-dynamic-selector{padding:0 ".concat(2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;margin:0 ").concat(2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;font-size:1rem;background-color:#fff;background-image:none;border-radius:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], "px;border:0;color:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, ";}.mc-field-group.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:").concat(2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px 0;}#form-").concat(id, ".__jsx-style-dynamic-selector{margin-top:").concat(7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;}.colored-bg.__jsx-style-dynamic-selector{background:").concat(coloredBg, ";max-width:none;margin-left:-").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], "px;margin-right:-").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], "px;padding-left:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], "px;padding-right:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], "px;}.mc-field-group.__jsx-style-dynamic-selector input,.mc-field-group.__jsx-style-dynamic-selector button{padding:0 ").concat(2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;min-height:").concat(6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;}.mc-field-group.__jsx-style-dynamic-selector>*{margin-top:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;margin-bottom:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXltYW5ub3ZhZXMvd29ya3NwYWNlL2J1c3NvbGEtbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvTWFpbENoaW1wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCYSxBQUcwRCxBQVc1QixBQVM2QixBQUlGLEFBV0UsQUFLQyx3Q0FkNUIsQ0F6QnlCLENBb0I1QyxBQWUrQyxDQUtHLFlBZEYsbUJBZnpCLE9BVkosSUFtQ25CLElBS0EsT0F2QzBCLEdBeUJ1QixtQkF4QnZCLHNCQUN1QixHQVExQixDQWlCMEIseUNBeEJwQyxJQXlCcUMsS0F4QlgsbUNBQ3ZDLE1Bd0JBLENBbEIyQixtR0FFaUIsd0NBQzVDIiwiZmlsZSI6Ii9Vc2Vycy9kYXltYW5ub3ZhZXMvd29ya3NwYWNlL2J1c3NvbGEtbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvTWFpbENoaW1wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCBBbmltYXRlRm9yZXZlciBmcm9tICcuL0FuaW1hdGVGb3JldmVyJztcbmltcG9ydCB7IGNvbG9ycywgUEFERElOR19VTklULCBNQUlOX1BBRERJTkcsIEJPUkRFUl9SQURJVVMgfSBmcm9tICcuLi9jb25maWcvc3R5bGUtZ3VpZGUnO1xuXG5jb25zdCBNYWlsQ2hpbXAgPSAoe1xuICAgIHRleHQsXG4gICAgYnV0dG9uVGV4dCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpZCxcbiAgICBidXR0b25BbmltYXRpb25EZWxheSxcbiAgICBpbnB1dFJlZixcbiAgICBsaWdodCxcbiAgICBsb2NhdGlvbixcbiAgICBjb2xvcmVkQmcsXG59KSA9PiAoXG4gICAgPGRpdiBpZD17YGZvcm0tJHtpZH1gfSBjbGFzc05hbWU9e2NvbG9yZWRCZyA/ICdjb2xvcmVkLWJnJyA6ICcnfT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgJHsyICogUEFERElOR19VTklUfXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAkezIgKiBQQURESU5HX1VOSVR9cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAke0JPUkRFUl9SQURJVVN9cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5kZWVwYmx1ZX07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYy1maWVsZC1ncm91cCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBtYXJnaW46ICR7MiAqIFBBRERJTkdfVU5JVH1weCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjZm9ybS0ke2lkfSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJHs3ICogUEFERElOR19VTklUfXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29sb3JlZC1iZyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcmVkQmd9O1xuXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJHtNQUlOX1BBRERJTkd9cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtJHtNQUlOX1BBRERJTkd9cHg7XG5cbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6ICR7TUFJTl9QQURESU5HfXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICR7TUFJTl9QQURESU5HfXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWMtZmllbGQtZ3JvdXAgIDpnbG9iYWwoaW5wdXQpLCAubWMtZmllbGQtZ3JvdXAgOmdsb2JhbChidXR0b24pIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICR7MiAqIFBBRERJTkdfVU5JVH1weDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAkezYgKiBQQURESU5HX1VOSVR9cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYy1maWVsZC1ncm91cCA+IDpnbG9iYWwoKikge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6ICR7UEFERElOR19VTklUfXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7UEFERElOR19VTklUfXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Zm9ybSBhY3Rpb249e2BodHRwczovL2RheW1hbi51czEyLmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmUvcG9zdD91PTUyZjZlN2EzM2IyZDU0NDc5YzVmYzU0ZWUmaWQ9YjNhY2NkMTlhZiZTSUdOVVA9JHtsb2NhdGlvbn1gfSBtZXRob2Q9XCJwb3N0XCIgaWQ9XCJtYy1lbWJlZGRlZC1zdWJzY3JpYmUtZm9ybVwiIG5hbWU9XCJtYy1lbWJlZGRlZC1zdWJzY3JpYmUtZm9ybVwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgbm9WYWxpZGF0ZT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtY19lbWJlZF9zaWdudXBfc2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtY2UtRU1BSUxcIj57dGV4dH08L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYy1maWVsZC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZUZvcmV2ZXIgZGVsYXk9ezEwMDB9IGFuaW1hdGVJbnRlcnZhbD17MyAqIGJ1dHRvbkFuaW1hdGlvbkRlbGF5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17aW5wdXRSZWZ9IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJFTUFJTFwiIGNsYXNzTmFtZT1cInJlcXVpcmVkIGVtYWlsXCIgaWQ9XCJtY2UtRU1BSUxcIiBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlRm9yZXZlcj5cblxuICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZUZvcmV2ZXIgYW5pbWF0ZUludGVydmFsPXtidXR0b25BbmltYXRpb25EZWxheX0gZGVsYXk9e2J1dHRvbkFuaW1hdGlvbkRlbGF5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbGlnaHQ9e2xpZ2h0fSBkZWZhdWx0VmFsdWU9e2J1dHRvblRleHR9IG5hbWU9XCJzdWJzY3JpYmVcIiBpZD1cIm1jLWVtYmVkZGVkLXN1YnNjcmliZVwiPntidXR0b25UZXh0fTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVGb3JldmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtY2UtcmVzcG9uc2VzXCIgY2xhc3NOYW1lPVwiY2xlYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNwb25zZVwiIGlkPVwibWNlLWVycm9yLXJlc3BvbnNlXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzcG9uc2VcIiBpZD1cIm1jZS1zdWNjZXNzLXJlc3BvbnNlXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnLTUwMDBweCcgfX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJfNTJmNmU3YTMzYjJkNTQ0NzljNWZjNTRlZV9iM2FjY2QxOWFmXCIgdGFiSW5kZXg9ey0xfSAvPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbik7XG5cbk1haWxDaGltcC5wcm9wVHlwZXMgPSB7XG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBidXR0b25UZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJ1dHRvbkFuaW1hdGlvbkRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2xvcmVkQmc6IFByb3BUeXBlcy5ib29sLFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG59O1xuXG5NYWlsQ2hpbXAuZGVmYXVsdFByb3BzID0ge1xuICAgIHRleHQ6ICdDYWRhc3RyZS1zZSBwYXJhIHJlY2ViZXIgbmEgw61udGVncmEgYXMgbm92aWRhZGVzIScsXG4gICAgYnV0dG9uVGV4dDogJ0luc2NyZXZlcicsXG4gICAgcGxhY2Vob2xkZXI6ICdkaWdpdGUgc2V1IGVtYWlsIGFxdWknLFxuICAgIGlkOiAnc2lnbnVwJyxcbiAgICBidXR0b25BbmltYXRpb25EZWxheTogMTAwMDAsXG4gICAgbGlnaHQ6IGZhbHNlLFxuICAgIGxvY2F0aW9uOiAnZW5kLW9mLXBvc3QnLFxuICAgIGNvbG9yZWRCZzogZmFsc2UsXG4gICAgaW5wdXRSZWY6IFJlYWN0LmNyZWF0ZVJlZigpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbENoaW1wO1xuIl19 */\n/*@ sourceURL=/Users/daymannovaes/workspace/bussola-landing-page/components/MailChimp.js */"),
    dynamic: [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    action: "https://dayman.us12.list-manage.com/subscribe/post?u=52f6e7a33b2d54479c5fc54ee&id=b3accd19af&SIGNUP=".concat(location),
    method: "post",
    id: "mc-embedded-subscribe-form",
    name: "mc-embedded-subscribe-form",
    target: "_blank",
    noValidate: true,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1433783362", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "validate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mc_embed_signup_scroll",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1433783362", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "mce-EMAIL",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1433783362", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1433783362", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "mc-field-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AnimateForever__WEBPACK_IMPORTED_MODULE_4__["default"], {
    delay: 1000,
    animateInterval: 3 * buttonAnimationDelay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1433783362", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    ref: inputRef,
    type: "email",
    name: "EMAIL",
    id: "mce-EMAIL",
    placeholder: placeholder,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1433783362", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "required email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AnimateForever__WEBPACK_IMPORTED_MODULE_4__["default"], {
    animateInterval: buttonAnimationDelay,
    delay: buttonAnimationDelay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    light: light,
    defaultValue: buttonText,
    name: "subscribe",
    id: "mc-embedded-subscribe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, buttonText))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mce-responses",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1433783362", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mce-error-response",
    style: {
      display: 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1433783362", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "response",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mce-success-response",
    style: {
      display: 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1433783362", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "response",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      position: 'absolute',
      left: '-5000px'
    },
    "aria-hidden": "true",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1433783362", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "b_52f6e7a33b2d54479c5fc54ee_b3accd19af",
    tabIndex: -1,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1433783362", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })))));
};

MailChimp.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  buttonText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  buttonAnimationDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  light: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  coloredBg: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object // eslint-disable-line react/forbid-prop-types

};
MailChimp.defaultProps = {
  text: 'Cadastre-se para receber na íntegra as novidades!',
  buttonText: 'Inscrever',
  placeholder: 'digite seu email aqui',
  id: 'signup',
  buttonAnimationDelay: 10000,
  light: false,
  location: 'end-of-post',
  coloredBg: false,
  inputRef: react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef()
};
/* harmony default export */ __webpack_exports__["default"] = (MailChimp);

/***/ })

})
//# sourceMappingURL=voce-nao-sabe-mas-voce-ja-esta-exercendo-seu-proposito-de-vida.js.5ee8aec80ba9390ad57a.hot-update.js.map
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1607981003", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + ((coloredBg ? 'colored-bg' : '') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1607981003",
    css: "input[type=\"email\"].__jsx-style-dynamic-selector{padding:0 ".concat(2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;margin:0 ").concat(2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;font-size:1rem;background-color:#fff;background-image:none;border-radius:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], "px;border:0;color:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, ";}.mc-field-group.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:").concat(2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px 0;}#form-").concat(id, ".__jsx-style-dynamic-selector{margin-top:").concat(7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;}.colored-bg.__jsx-style-dynamic-selector{background:").concat(coloredBg, ";max-width:none;margin-left:-").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], "px;margin-right:-").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], "px;padding:").concat(4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px 0;}.colored-bg.__jsx-style-dynamic-selector>form.__jsx-style-dynamic-selector{margin:0 auto;max-width:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], "px;}.mc-field-group.__jsx-style-dynamic-selector input,.mc-field-group.__jsx-style-dynamic-selector button{padding:0 ").concat(2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;min-height:").concat(6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;}.mc-field-group.__jsx-style-dynamic-selector>*{margin-top:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;margin-bottom:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXltYW5ub3ZhZXMvd29ya3NwYWNlL2J1c3NvbGEtbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvTWFpbENoaW1wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCYSxBQUcwRCxBQVc1QixBQVM2QixBQUlGLEFBVTFCLEFBSzRCLEFBS0MsY0FURCwwQkFUM0IsQ0F6QnlCLENBb0I1QyxBQW1CK0MsQ0FLRyxZQWxCRixDQVNoRCxrQkF4QnVCLE9BVkosSUF1Q25CLElBS0EsT0EzQzBCLEdBeUJ1QixtQkF4QnZCLHNCQUN1QixHQVExQixDQWlCdUIseUNBeEJqQyxDQXlCYixRQXhCdUMsbUNBQ3ZDLE9BTTJCLG1HQUVpQix3Q0FDNUMiLCJmaWxlIjoiL1VzZXJzL2RheW1hbm5vdmFlcy93b3Jrc3BhY2UvYnVzc29sYS1sYW5kaW5nLXBhZ2UvY29tcG9uZW50cy9NYWlsQ2hpbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IEFuaW1hdGVGb3JldmVyIGZyb20gJy4vQW5pbWF0ZUZvcmV2ZXInO1xuaW1wb3J0IHsgY29sb3JzLCBQQURESU5HX1VOSVQsIFBPU1RfV0lEVEgsIE1BSU5fUEFERElORywgQk9SREVSX1JBRElVUyB9IGZyb20gJy4uL2NvbmZpZy9zdHlsZS1ndWlkZSc7XG5cbmNvbnN0IE1haWxDaGltcCA9ICh7XG4gICAgdGV4dCxcbiAgICBidXR0b25UZXh0LFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlkLFxuICAgIGJ1dHRvbkFuaW1hdGlvbkRlbGF5LFxuICAgIGlucHV0UmVmLFxuICAgIGxpZ2h0LFxuICAgIGxvY2F0aW9uLFxuICAgIGNvbG9yZWRCZyxcbn0pID0+IChcbiAgICA8ZGl2IGlkPXtgZm9ybS0ke2lkfWB9IGNsYXNzTmFtZT17Y29sb3JlZEJnID8gJ2NvbG9yZWQtYmcnIDogJyd9PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAkezIgKiBQQURESU5HX1VOSVR9cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwICR7MiAqIFBBRERJTkdfVU5JVH1weDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7Qk9SREVSX1JBRElVU31weDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmRlZXBibHVlfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1jLWZpZWxkLWdyb3VwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIG1hcmdpbjogJHsyICogUEFERElOR19VTklUfXB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNmb3JtLSR7aWR9IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAkezcgKiBQQURESU5HX1VOSVR9cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb2xvcmVkLWJnIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yZWRCZ307XG5cbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0ke01BSU5fUEFERElOR31weDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0ke01BSU5fUEFERElOR31weDtcblxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICR7NCAqIFBBRERJTkdfVU5JVH1weCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29sb3JlZC1iZyA+IGZvcm0ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogJHtQT1NUX1dJRFRIfXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWMtZmllbGQtZ3JvdXAgIDpnbG9iYWwoaW5wdXQpLCAubWMtZmllbGQtZ3JvdXAgOmdsb2JhbChidXR0b24pIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICR7MiAqIFBBRERJTkdfVU5JVH1weDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAkezYgKiBQQURESU5HX1VOSVR9cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYy1maWVsZC1ncm91cCA+IDpnbG9iYWwoKikge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6ICR7UEFERElOR19VTklUfXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7UEFERElOR19VTklUfXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Zm9ybSBhY3Rpb249e2BodHRwczovL2RheW1hbi51czEyLmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmUvcG9zdD91PTUyZjZlN2EzM2IyZDU0NDc5YzVmYzU0ZWUmaWQ9YjNhY2NkMTlhZiZTSUdOVVA9JHtsb2NhdGlvbn1gfSBtZXRob2Q9XCJwb3N0XCIgaWQ9XCJtYy1lbWJlZGRlZC1zdWJzY3JpYmUtZm9ybVwiIG5hbWU9XCJtYy1lbWJlZGRlZC1zdWJzY3JpYmUtZm9ybVwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgbm9WYWxpZGF0ZT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtY19lbWJlZF9zaWdudXBfc2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtY2UtRU1BSUxcIj57dGV4dH08L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYy1maWVsZC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZUZvcmV2ZXIgZGVsYXk9ezEwMDB9IGFuaW1hdGVJbnRlcnZhbD17MyAqIGJ1dHRvbkFuaW1hdGlvbkRlbGF5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17aW5wdXRSZWZ9IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJFTUFJTFwiIGNsYXNzTmFtZT1cInJlcXVpcmVkIGVtYWlsXCIgaWQ9XCJtY2UtRU1BSUxcIiBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlRm9yZXZlcj5cblxuICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZUZvcmV2ZXIgYW5pbWF0ZUludGVydmFsPXtidXR0b25BbmltYXRpb25EZWxheX0gZGVsYXk9e2J1dHRvbkFuaW1hdGlvbkRlbGF5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbGlnaHQ9e2xpZ2h0fSBkZWZhdWx0VmFsdWU9e2J1dHRvblRleHR9IG5hbWU9XCJzdWJzY3JpYmVcIiBpZD1cIm1jLWVtYmVkZGVkLXN1YnNjcmliZVwiPntidXR0b25UZXh0fTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVGb3JldmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtY2UtcmVzcG9uc2VzXCIgY2xhc3NOYW1lPVwiY2xlYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNwb25zZVwiIGlkPVwibWNlLWVycm9yLXJlc3BvbnNlXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzcG9uc2VcIiBpZD1cIm1jZS1zdWNjZXNzLXJlc3BvbnNlXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnLTUwMDBweCcgfX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJfNTJmNmU3YTMzYjJkNTQ0NzljNWZjNTRlZV9iM2FjY2QxOWFmXCIgdGFiSW5kZXg9ey0xfSAvPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbik7XG5cbk1haWxDaGltcC5wcm9wVHlwZXMgPSB7XG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBidXR0b25UZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJ1dHRvbkFuaW1hdGlvbkRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2xvcmVkQmc6IFByb3BUeXBlcy5ib29sLFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG59O1xuXG5NYWlsQ2hpbXAuZGVmYXVsdFByb3BzID0ge1xuICAgIHRleHQ6ICdDYWRhc3RyZS1zZSBwYXJhIHJlY2ViZXIgbmEgw61udGVncmEgYXMgbm92aWRhZGVzIScsXG4gICAgYnV0dG9uVGV4dDogJ0luc2NyZXZlcicsXG4gICAgcGxhY2Vob2xkZXI6ICdkaWdpdGUgc2V1IGVtYWlsIGFxdWknLFxuICAgIGlkOiAnc2lnbnVwJyxcbiAgICBidXR0b25BbmltYXRpb25EZWxheTogMTAwMDAsXG4gICAgbGlnaHQ6IGZhbHNlLFxuICAgIGxvY2F0aW9uOiAnZW5kLW9mLXBvc3QnLFxuICAgIGNvbG9yZWRCZzogZmFsc2UsXG4gICAgaW5wdXRSZWY6IFJlYWN0LmNyZWF0ZVJlZigpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbENoaW1wO1xuIl19 */\n/*@ sourceURL=/Users/daymannovaes/workspace/bussola-landing-page/components/MailChimp.js */"),
    dynamic: [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    action: "https://dayman.us12.list-manage.com/subscribe/post?u=52f6e7a33b2d54479c5fc54ee&id=b3accd19af&SIGNUP=".concat(location),
    method: "post",
    id: "mc-embedded-subscribe-form",
    name: "mc-embedded-subscribe-form",
    target: "_blank",
    noValidate: true,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1607981003", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "validate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mc_embed_signup_scroll",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1607981003", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "mce-EMAIL",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1607981003", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1607981003", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "mc-field-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AnimateForever__WEBPACK_IMPORTED_MODULE_4__["default"], {
    delay: 1000,
    animateInterval: 3 * buttonAnimationDelay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1607981003", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    ref: inputRef,
    type: "email",
    name: "EMAIL",
    id: "mce-EMAIL",
    placeholder: placeholder,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1607981003", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "required email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AnimateForever__WEBPACK_IMPORTED_MODULE_4__["default"], {
    animateInterval: buttonAnimationDelay,
    delay: buttonAnimationDelay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    light: light,
    defaultValue: buttonText,
    name: "subscribe",
    id: "mc-embedded-subscribe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, buttonText))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mce-responses",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1607981003", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mce-error-response",
    style: {
      display: 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1607981003", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "response",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mce-success-response",
    style: {
      display: 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1607981003", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "response",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      position: 'absolute',
      left: '-5000px'
    },
    "aria-hidden": "true",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1607981003", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "b_52f6e7a33b2d54479c5fc54ee_b3accd19af",
    tabIndex: -1,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1607981003", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
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
//# sourceMappingURL=voce-nao-sabe-mas-voce-ja-esta-exercendo-seu-proposito-de-vida.js.3aeae344c3a93d704de3.hot-update.js.map
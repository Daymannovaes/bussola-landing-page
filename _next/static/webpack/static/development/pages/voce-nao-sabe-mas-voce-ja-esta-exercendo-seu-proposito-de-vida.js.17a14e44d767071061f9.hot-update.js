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
      lightText = _ref.lightText,
      location = _ref.location,
      coloredBg = _ref.coloredBg;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "form-".concat(id),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2624504356", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, lightText ? '#e5f2ff' : _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + ((coloredBg ? 'colored-bg' : '') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2624504356",
    css: "input[type=\"email\"].__jsx-style-dynamic-selector{padding:0 ".concat(2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;margin:0 ").concat(2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;font-size:1rem;background-color:#fff;background-image:none;border-radius:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], "px;border:0;color:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, ";}.mc-field-group.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:").concat(2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px 0;}#form-").concat(id, ".__jsx-style-dynamic-selector{color:").concat(lightText ? '#e5f2ff' : _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, ";margin-top:").concat(7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;}.colored-bg.__jsx-style-dynamic-selector{background:").concat(coloredBg, ";max-width:none;margin-left:-").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], "px;margin-right:-").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], "px;padding:").concat(4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px 0;}.colored-bg.__jsx-style-dynamic-selector>form.__jsx-style-dynamic-selector{margin:0 auto;max-width:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], "px;}.mc-field-group.__jsx-style-dynamic-selector input,.mc-field-group.__jsx-style-dynamic-selector button{padding:0 ").concat(2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;min-height:").concat(6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;}.mc-field-group.__jsx-style-dynamic-selector>*{margin-top:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;margin-bottom:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXltYW5ub3ZhZXMvd29ya3NwYWNlL2J1c3NvbGEtbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvTWFpbENoaW1wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCYSxBQUcwRCxBQVc1QixBQVNzQixBQUtLLEFBVTFCLEFBSzRCLEFBS0MsY0FURCxxQkFmQSxLQU0zQixDQTFCeUIsQ0F3Q0csQ0FLRyxZQWxCRixDQVNoRCxrQkF6QnVCLEdBVXZCLElBcEJtQixJQXdDbkIsSUFLQSxPQTVDMEIsR0EwQndCLG1CQXpCeEIsc0JBQ3VCLEdBUTFCLEVBa0J1Qix3Q0F6QmpDLEVBMEJiLE9BekJ1QyxtQ0FDdkMsT0FNMkIsbUdBRWlCLHdDQUM1QyIsImZpbGUiOiIvVXNlcnMvZGF5bWFubm92YWVzL3dvcmtzcGFjZS9idXNzb2xhLWxhbmRpbmctcGFnZS9jb21wb25lbnRzL01haWxDaGltcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgQW5pbWF0ZUZvcmV2ZXIgZnJvbSAnLi9BbmltYXRlRm9yZXZlcic7XG5pbXBvcnQgeyBjb2xvcnMsIFBBRERJTkdfVU5JVCwgUE9TVF9XSURUSCwgTUFJTl9QQURESU5HLCBCT1JERVJfUkFESVVTIH0gZnJvbSAnLi4vY29uZmlnL3N0eWxlLWd1aWRlJztcblxuY29uc3QgTWFpbENoaW1wID0gKHtcbiAgICB0ZXh0LFxuICAgIGJ1dHRvblRleHQsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaWQsXG4gICAgYnV0dG9uQW5pbWF0aW9uRGVsYXksXG4gICAgaW5wdXRSZWYsXG4gICAgbGlnaHQsXG4gICAgbGlnaHRUZXh0LFxuICAgIGxvY2F0aW9uLFxuICAgIGNvbG9yZWRCZyxcbn0pID0+IChcbiAgICA8ZGl2IGlkPXtgZm9ybS0ke2lkfWB9IGNsYXNzTmFtZT17Y29sb3JlZEJnID8gJ2NvbG9yZWQtYmcnIDogJyd9PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAkezIgKiBQQURESU5HX1VOSVR9cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwICR7MiAqIFBBRERJTkdfVU5JVH1weDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7Qk9SREVSX1JBRElVU31weDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmRlZXBibHVlfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1jLWZpZWxkLWdyb3VwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIG1hcmdpbjogJHsyICogUEFERElOR19VTklUfXB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNmb3JtLSR7aWR9IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtsaWdodFRleHQgPyAnI2U1ZjJmZicgOiBjb2xvcnMuZGVlcGJsdWV9O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6ICR7NyAqIFBBRERJTkdfVU5JVH1weDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbG9yZWQtYmcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JlZEJnfTtcblxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLSR7TUFJTl9QQURESU5HfXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLSR7TUFJTl9QQURESU5HfXB4O1xuXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJHs0ICogUEFERElOR19VTklUfXB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb2xvcmVkLWJnID4gZm9ybSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAke1BPU1RfV0lEVEh9cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYy1maWVsZC1ncm91cCAgOmdsb2JhbChpbnB1dCksIC5tYy1maWVsZC1ncm91cCA6Z2xvYmFsKGJ1dHRvbikge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgJHsyICogUEFERElOR19VTklUfXB4O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICR7NiAqIFBBRERJTkdfVU5JVH1weDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1jLWZpZWxkLWdyb3VwID4gOmdsb2JhbCgqKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJHtQQURESU5HX1VOSVR9cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHtQQURESU5HX1VOSVR9cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxmb3JtIGFjdGlvbj17YGh0dHBzOi8vZGF5bWFuLnVzMTIubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0P3U9NTJmNmU3YTMzYjJkNTQ0NzljNWZjNTRlZSZpZD1iM2FjY2QxOWFmJlNJR05VUD0ke2xvY2F0aW9ufWB9IG1ldGhvZD1cInBvc3RcIiBpZD1cIm1jLWVtYmVkZGVkLXN1YnNjcmliZS1mb3JtXCIgbmFtZT1cIm1jLWVtYmVkZGVkLXN1YnNjcmliZS1mb3JtXCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIiB0YXJnZXQ9XCJfYmxhbmtcIiBub1ZhbGlkYXRlPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm1jX2VtYmVkX3NpZ251cF9zY3JvbGxcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1jZS1FTUFJTFwiPnt0ZXh0fTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1jLWZpZWxkLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBbmltYXRlRm9yZXZlciBkZWxheT17MTAwMH0gYW5pbWF0ZUludGVydmFsPXszICogYnV0dG9uQW5pbWF0aW9uRGVsYXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dFJlZn0gdHlwZT1cImVtYWlsXCIgbmFtZT1cIkVNQUlMXCIgY2xhc3NOYW1lPVwicmVxdWlyZWQgZW1haWxcIiBpZD1cIm1jZS1FTUFJTFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVGb3JldmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxBbmltYXRlRm9yZXZlciBhbmltYXRlSW50ZXJ2YWw9e2J1dHRvbkFuaW1hdGlvbkRlbGF5fSBkZWxheT17YnV0dG9uQW5pbWF0aW9uRGVsYXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsaWdodD17bGlnaHR9IGRlZmF1bHRWYWx1ZT17YnV0dG9uVGV4dH0gbmFtZT1cInN1YnNjcmliZVwiIGlkPVwibWMtZW1iZWRkZWQtc3Vic2NyaWJlXCI+e2J1dHRvblRleHR9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZUZvcmV2ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1jZS1yZXNwb25zZXNcIiBjbGFzc05hbWU9XCJjbGVhclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3BvbnNlXCIgaWQ9XCJtY2UtZXJyb3ItcmVzcG9uc2VcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNwb25zZVwiIGlkPVwibWNlLXN1Y2Nlc3MtcmVzcG9uc2VcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICctNTAwMHB4JyB9fSBhcmlhLWhpZGRlbj1cInRydWVcIj48aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYl81MmY2ZTdhMzNiMmQ1NDQ3OWM1ZmM1NGVlX2IzYWNjZDE5YWZcIiB0YWJJbmRleD17LTF9IC8+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuKTtcblxuTWFpbENoaW1wLnByb3BUeXBlcyA9IHtcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJ1dHRvblRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYnV0dG9uQW5pbWF0aW9uRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGlnaHQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGxpZ2h0VGV4dDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sb3JlZEJnOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLm9iamVjdCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlc1xufTtcblxuTWFpbENoaW1wLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZXh0OiAnQ2FkYXN0cmUtc2UgcGFyYSByZWNlYmVyIG5hIMOtbnRlZ3JhIGFzIG5vdmlkYWRlcyEnLFxuICAgIGJ1dHRvblRleHQ6ICdJbnNjcmV2ZXInLFxuICAgIHBsYWNlaG9sZGVyOiAnZGlnaXRlIHNldSBlbWFpbCBhcXVpJyxcbiAgICBpZDogJ3NpZ251cCcsXG4gICAgYnV0dG9uQW5pbWF0aW9uRGVsYXk6IDEwMDAwLFxuICAgIGxpZ2h0OiBmYWxzZSxcbiAgICBsaWdodFRleHQ6IGZhbHNlLFxuICAgIGxvY2F0aW9uOiAnZW5kLW9mLXBvc3QnLFxuICAgIGNvbG9yZWRCZzogZmFsc2UsXG4gICAgaW5wdXRSZWY6IFJlYWN0LmNyZWF0ZVJlZigpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbENoaW1wO1xuIl19 */\n/*@ sourceURL=/Users/daymannovaes/workspace/bussola-landing-page/components/MailChimp.js */"),
    dynamic: [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, lightText ? '#e5f2ff' : _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    action: "https://dayman.us12.list-manage.com/subscribe/post?u=52f6e7a33b2d54479c5fc54ee&id=b3accd19af&SIGNUP=".concat(location),
    method: "post",
    id: "mc-embedded-subscribe-form",
    name: "mc-embedded-subscribe-form",
    target: "_blank",
    noValidate: true,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2624504356", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, lightText ? '#e5f2ff' : _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "validate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mc_embed_signup_scroll",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2624504356", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, lightText ? '#e5f2ff' : _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "mce-EMAIL",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2624504356", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, lightText ? '#e5f2ff' : _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2624504356", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, lightText ? '#e5f2ff' : _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "mc-field-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AnimateForever__WEBPACK_IMPORTED_MODULE_4__["default"], {
    delay: 1000,
    animateInterval: 3 * buttonAnimationDelay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2624504356", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, lightText ? '#e5f2ff' : _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    ref: inputRef,
    type: "email",
    name: "EMAIL",
    id: "mce-EMAIL",
    placeholder: placeholder,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2624504356", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, lightText ? '#e5f2ff' : _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "required email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AnimateForever__WEBPACK_IMPORTED_MODULE_4__["default"], {
    animateInterval: buttonAnimationDelay,
    delay: buttonAnimationDelay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    light: light,
    defaultValue: buttonText,
    name: "subscribe",
    id: "mc-embedded-subscribe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, buttonText))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mce-responses",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2624504356", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, lightText ? '#e5f2ff' : _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mce-error-response",
    style: {
      display: 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2624504356", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, lightText ? '#e5f2ff' : _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "response",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mce-success-response",
    style: {
      display: 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2624504356", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, lightText ? '#e5f2ff' : _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "response",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      position: 'absolute',
      left: '-5000px'
    },
    "aria-hidden": "true",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2624504356", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, lightText ? '#e5f2ff' : _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "b_52f6e7a33b2d54479c5fc54ee_b3accd19af",
    tabIndex: -1,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2624504356", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, lightText ? '#e5f2ff' : _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], 4 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
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
  lightText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
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
  lightText: false,
  location: 'end-of-post',
  coloredBg: false,
  inputRef: react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef()
};
/* harmony default export */ __webpack_exports__["default"] = (MailChimp);

/***/ })

})
//# sourceMappingURL=voce-nao-sabe-mas-voce-ja-esta-exercendo-seu-proposito-de-vida.js.17a14e44d767071061f9.hot-update.js.map
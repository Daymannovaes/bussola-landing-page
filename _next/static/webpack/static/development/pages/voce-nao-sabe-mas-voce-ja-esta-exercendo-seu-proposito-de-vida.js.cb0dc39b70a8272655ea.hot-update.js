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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3868859644", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + ((coloredBg ? 'colored-bg' : '') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3868859644",
    css: "input[type=\"email\"].__jsx-style-dynamic-selector{padding:0 ".concat(2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;margin:0 ").concat(2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;font-size:1rem;background-color:#fff;background-image:none;border-radius:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], "px;border:0;color:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, ";}.mc-field-group.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:").concat(2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px 0;}#form-").concat(id, ".__jsx-style-dynamic-selector{margin-top:").concat(7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;}.colored-bg.__jsx-style-dynamic-selector{background:").concat(coloredBg, ";max-width:none;margin-left:-").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], "px;margin-right:-").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], "px;}.colored-bg.__jsx-style-dynamic-selector>form.__jsx-style-dynamic-selector{margin:0 auto;max-width:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], "px;}.mc-field-group.__jsx-style-dynamic-selector input,.mc-field-group.__jsx-style-dynamic-selector button{padding:0 ").concat(2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;min-height:").concat(6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;}.mc-field-group.__jsx-style-dynamic-selector>*{margin-top:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;margin-bottom:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXltYW5ub3ZhZXMvd29ya3NwYWNlL2J1c3NvbGEtbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvTWFpbENoaW1wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCYSxBQUcwRCxBQVc1QixBQVM2QixBQUlGLEFBUTFCLEFBSzRCLEFBS0MsY0FURCwwQkFQM0IsQ0F6QnlCLENBb0I1QyxBQWlCK0MsQ0FLRyxZQWhCRixDQU9oRCxrQkF0QnVCLE9BVkosSUFxQ25CLElBS0EsT0F6QzBCLEdBeUJ1QixtQkF4QnZCLHNCQUN1QixHQVExQixDQWdCdkIseUNBdkJhLFNBQzBCLG1DQUN2QyxPQU0yQixtR0FFaUIsd0NBQzVDIiwiZmlsZSI6Ii9Vc2Vycy9kYXltYW5ub3ZhZXMvd29ya3NwYWNlL2J1c3NvbGEtbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvTWFpbENoaW1wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCBBbmltYXRlRm9yZXZlciBmcm9tICcuL0FuaW1hdGVGb3JldmVyJztcbmltcG9ydCB7IGNvbG9ycywgUEFERElOR19VTklULCBQT1NUX1dJRFRILCBNQUlOX1BBRERJTkcsIEJPUkRFUl9SQURJVVMgfSBmcm9tICcuLi9jb25maWcvc3R5bGUtZ3VpZGUnO1xuXG5jb25zdCBNYWlsQ2hpbXAgPSAoe1xuICAgIHRleHQsXG4gICAgYnV0dG9uVGV4dCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpZCxcbiAgICBidXR0b25BbmltYXRpb25EZWxheSxcbiAgICBpbnB1dFJlZixcbiAgICBsaWdodCxcbiAgICBsb2NhdGlvbixcbiAgICBjb2xvcmVkQmcsXG59KSA9PiAoXG4gICAgPGRpdiBpZD17YGZvcm0tJHtpZH1gfSBjbGFzc05hbWU9e2NvbG9yZWRCZyA/ICdjb2xvcmVkLWJnJyA6ICcnfT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgJHsyICogUEFERElOR19VTklUfXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAkezIgKiBQQURESU5HX1VOSVR9cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAke0JPUkRFUl9SQURJVVN9cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5kZWVwYmx1ZX07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYy1maWVsZC1ncm91cCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBtYXJnaW46ICR7MiAqIFBBRERJTkdfVU5JVH1weCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjZm9ybS0ke2lkfSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJHs3ICogUEFERElOR19VTklUfXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29sb3JlZC1iZyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcmVkQmd9O1xuXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJHtNQUlOX1BBRERJTkd9cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtJHtNQUlOX1BBRERJTkd9cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb2xvcmVkLWJnID4gZm9ybSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAke1BPU1RfV0lEVEh9cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYy1maWVsZC1ncm91cCAgOmdsb2JhbChpbnB1dCksIC5tYy1maWVsZC1ncm91cCA6Z2xvYmFsKGJ1dHRvbikge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgJHsyICogUEFERElOR19VTklUfXB4O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICR7NiAqIFBBRERJTkdfVU5JVH1weDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1jLWZpZWxkLWdyb3VwID4gOmdsb2JhbCgqKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJHtQQURESU5HX1VOSVR9cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHtQQURESU5HX1VOSVR9cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxmb3JtIGFjdGlvbj17YGh0dHBzOi8vZGF5bWFuLnVzMTIubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0P3U9NTJmNmU3YTMzYjJkNTQ0NzljNWZjNTRlZSZpZD1iM2FjY2QxOWFmJlNJR05VUD0ke2xvY2F0aW9ufWB9IG1ldGhvZD1cInBvc3RcIiBpZD1cIm1jLWVtYmVkZGVkLXN1YnNjcmliZS1mb3JtXCIgbmFtZT1cIm1jLWVtYmVkZGVkLXN1YnNjcmliZS1mb3JtXCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIiB0YXJnZXQ9XCJfYmxhbmtcIiBub1ZhbGlkYXRlPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm1jX2VtYmVkX3NpZ251cF9zY3JvbGxcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1jZS1FTUFJTFwiPnt0ZXh0fTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1jLWZpZWxkLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBbmltYXRlRm9yZXZlciBkZWxheT17MTAwMH0gYW5pbWF0ZUludGVydmFsPXszICogYnV0dG9uQW5pbWF0aW9uRGVsYXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dFJlZn0gdHlwZT1cImVtYWlsXCIgbmFtZT1cIkVNQUlMXCIgY2xhc3NOYW1lPVwicmVxdWlyZWQgZW1haWxcIiBpZD1cIm1jZS1FTUFJTFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVGb3JldmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxBbmltYXRlRm9yZXZlciBhbmltYXRlSW50ZXJ2YWw9e2J1dHRvbkFuaW1hdGlvbkRlbGF5fSBkZWxheT17YnV0dG9uQW5pbWF0aW9uRGVsYXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsaWdodD17bGlnaHR9IGRlZmF1bHRWYWx1ZT17YnV0dG9uVGV4dH0gbmFtZT1cInN1YnNjcmliZVwiIGlkPVwibWMtZW1iZWRkZWQtc3Vic2NyaWJlXCI+e2J1dHRvblRleHR9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZUZvcmV2ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1jZS1yZXNwb25zZXNcIiBjbGFzc05hbWU9XCJjbGVhclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3BvbnNlXCIgaWQ9XCJtY2UtZXJyb3ItcmVzcG9uc2VcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNwb25zZVwiIGlkPVwibWNlLXN1Y2Nlc3MtcmVzcG9uc2VcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICctNTAwMHB4JyB9fSBhcmlhLWhpZGRlbj1cInRydWVcIj48aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYl81MmY2ZTdhMzNiMmQ1NDQ3OWM1ZmM1NGVlX2IzYWNjZDE5YWZcIiB0YWJJbmRleD17LTF9IC8+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuKTtcblxuTWFpbENoaW1wLnByb3BUeXBlcyA9IHtcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJ1dHRvblRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYnV0dG9uQW5pbWF0aW9uRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGlnaHQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbG9yZWRCZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5vYmplY3QsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbn07XG5cbk1haWxDaGltcC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGV4dDogJ0NhZGFzdHJlLXNlIHBhcmEgcmVjZWJlciBuYSDDrW50ZWdyYSBhcyBub3ZpZGFkZXMhJyxcbiAgICBidXR0b25UZXh0OiAnSW5zY3JldmVyJyxcbiAgICBwbGFjZWhvbGRlcjogJ2RpZ2l0ZSBzZXUgZW1haWwgYXF1aScsXG4gICAgaWQ6ICdzaWdudXAnLFxuICAgIGJ1dHRvbkFuaW1hdGlvbkRlbGF5OiAxMDAwMCxcbiAgICBsaWdodDogZmFsc2UsXG4gICAgbG9jYXRpb246ICdlbmQtb2YtcG9zdCcsXG4gICAgY29sb3JlZEJnOiBmYWxzZSxcbiAgICBpbnB1dFJlZjogUmVhY3QuY3JlYXRlUmVmKCksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWlsQ2hpbXA7XG4iXX0= */\n/*@ sourceURL=/Users/daymannovaes/workspace/bussola-landing-page/components/MailChimp.js */"),
    dynamic: [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    action: "https://dayman.us12.list-manage.com/subscribe/post?u=52f6e7a33b2d54479c5fc54ee&id=b3accd19af&SIGNUP=".concat(location),
    method: "post",
    id: "mc-embedded-subscribe-form",
    name: "mc-embedded-subscribe-form",
    target: "_blank",
    noValidate: true,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3868859644", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "validate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mc_embed_signup_scroll",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3868859644", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "mce-EMAIL",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3868859644", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3868859644", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "mc-field-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AnimateForever__WEBPACK_IMPORTED_MODULE_4__["default"], {
    delay: 1000,
    animateInterval: 3 * buttonAnimationDelay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3868859644", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    ref: inputRef,
    type: "email",
    name: "EMAIL",
    id: "mce-EMAIL",
    placeholder: placeholder,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3868859644", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "required email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AnimateForever__WEBPACK_IMPORTED_MODULE_4__["default"], {
    animateInterval: buttonAnimationDelay,
    delay: buttonAnimationDelay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    light: light,
    defaultValue: buttonText,
    name: "subscribe",
    id: "mc-embedded-subscribe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, buttonText))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mce-responses",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3868859644", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mce-error-response",
    style: {
      display: 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3868859644", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "response",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mce-success-response",
    style: {
      display: 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3868859644", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]) + " " + "response",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      position: 'absolute',
      left: '-5000px'
    },
    "aria-hidden": "true",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3868859644", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "b_52f6e7a33b2d54479c5fc54ee_b3accd19af",
    tabIndex: -1,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3868859644", [2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["BORDER_RADIUS"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], id, 7 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], coloredBg, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["MAIN_PADDING"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["POST_WIDTH"], 2 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], 6 * _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
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
//# sourceMappingURL=voce-nao-sabe-mas-voce-ja-esta-exercendo-seu-proposito-de-vida.js.cb0dc39b70a8272655ea.hot-update.js.map
webpackHotUpdate("static/development/pages/404.js",{

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorPage; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LayoutMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LayoutMain */ "./components/LayoutMain.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Link */ "./components/Link.js");
/* harmony import */ var _config_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/style-guide */ "./config/style-guide.js");
var _jsxFileName = "/Users/daymannovaes/workspace/bussola-landing-page/pages/404.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_2___default()(),
    _getConfig$publicRunt = _getConfig.publicRuntimeConfig.pages,
    pages = _getConfig$publicRunt === void 0 ? [] : _getConfig$publicRunt;

var ErrorPage =
/*#__PURE__*/
function (_Component) {
  _inherits(ErrorPage, _Component);

  function ErrorPage(props) {
    var _this;

    _classCallCheck(this, ErrorPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorPage).call(this, props));
    _this.state = {
      path: '',
      filteredPages: ErrorPage.getPages()
    };
    return _this;
  }

  _createClass(ErrorPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        path: document.location.pathname
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          path = _this$state.path,
          filteredPages = _this$state.filteredPages;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_LayoutMain__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["152494368", [_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"] * 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "152494368",
        css: "span.__jsx-style-dynamic-selector{color:".concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, ";}h3.__jsx-style-dynamic-selector{font-size:1em;}li.__jsx-style-dynamic-selector{font-size:0.7em;display:inline;}ul.__jsx-style-dynamic-selector{margin:0;padding:0;margin-top:3em;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector:first-child{margin:0 ").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px;}li.__jsx-style-dynamic-selector a{padding:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], "px ").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"] * 2, "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXltYW5ub3ZhZXMvd29ya3NwYWNlL2J1c3NvbGEtbGFuZGluZy1wYWdlL3BhZ2VzLzQwNC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ3lCLEFBRzRELEFBSXJCLEFBSUUsQUFLUCxBQU9kLEFBRzJFLFNBVDVELEtBVGQsRUFJbUIsR0FNQSxZQUxuQixHQU1BLENBZkEsS0FtQkEsOEJBSUEiLCJmaWxlIjoiL1VzZXJzL2RheW1hbm5vdmFlcy93b3Jrc3BhY2UvYnVzc29sYS1sYW5kaW5nLXBhZ2UvcGFnZXMvNDA0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xuXG5pbXBvcnQgTGF5b3V0TWFpbiBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dE1haW4nO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9MaW5rJztcbmltcG9ydCB7IGNvbG9ycywgUEFERElOR19VTklUIH0gZnJvbSAnLi4vY29uZmlnL3N0eWxlLWd1aWRlJztcblxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnOiB7IHBhZ2VzID0gW10gfSB9ID0gZ2V0Q29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICAgIGZpbHRlcmVkUGFnZXM6IEVycm9yUGFnZS5nZXRQYWdlcygpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIHBhZ2VzXG4gICAgICAgICAgICAuZmlsdGVyKHBhZ2UgPT4gIXBhZ2UubWF0Y2goLzQwNC8pKVxuICAgICAgICAgICAgLmZpbHRlcihwYWdlID0+ICFwYWdlLm1hdGNoKC9eXy8pKVxuICAgICAgICAgICAgLm1hcChwYWdlID0+IHBhZ2UucmVwbGFjZSgvXFwuanMkLywgJycpKVxuICAgICAgICAgICAgLm1hcChwYWdlID0+IHBhZ2UucmVwbGFjZSgvaW5kZXgvLCAnaG9tZScpKVxuICAgICAgICAgICAgLm1hcChwYWdlID0+ICh7IHRpdGxlOiBwYWdlLCB1cmw6IHBhZ2UgPT09ICdob21lJyA/ICcvJyA6IGAvJHtwYWdlfWAgfSkpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGF0aDogZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHBhdGgsIGZpbHRlcmVkUGFnZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0TWFpbj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuZGVlcGJsdWV9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAke1BBRERJTkdfVU5JVH1weFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGkgOmdsb2JhbChhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAke1BBRERJTkdfVU5JVH1weCAke1BBRERJTkdfVU5JVCAqIDJ9cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Qw6FnaW5hIG7Do28gZW5jb250cmFkYTwvaDE+XG5cbiAgICAgICAgICAgICAgICAgICAgPGgzPk7Do28gY29uc2VndWltb3MgZW5jb250cmEgYSBww6FnaW5hIDxzcGFuPntwYXRofTwvc3Bhbj48L2gzPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGVudGUgYWxndW1hIGRlc3NhczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyZWRQYWdlcy5tYXAocGFnZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cGFnZS51cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwYWdlLnVybH0+XG4gICAgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhZ2UudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xheW91dE1haW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/daymannovaes/workspace/bussola-landing-page/pages/404.js */"),
        dynamic: [_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"] * 2],
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["152494368", [_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"] * 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "P\xE1gina n\xE3o encontrada"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["152494368", [_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"] * 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "N\xE3o conseguimos encontra a p\xE1gina ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["152494368", [_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"] * 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, path)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["152494368", [_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"] * 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["152494368", [_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"] * 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Tente alguma dessas"), filteredPages.map(function (page) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: page.url,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["152494368", [_config_style_guide__WEBPACK_IMPORTED_MODULE_5__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_5__["PADDING_UNIT"] * 2]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
          href: page.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, "/", page.title));
      }))));
    }
  }], [{
    key: "getPages",
    value: function getPages() {
      return pages.filter(function (page) {
        return !page.match(/404/);
      }).filter(function (page) {
        return !page.match(/^_/);
      }).map(function (page) {
        return page.replace(/\.js$/, '');
      }).map(function (page) {
        return page.replace(/index/, 'home');
      }).map(function (page) {
        return {
          title: page,
          url: page === 'home' ? '/' : "/".concat(page)
        };
      });
    }
  }]);

  return ErrorPage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/404")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=404.js.016effcb0b01f0867494.hot-update.js.map
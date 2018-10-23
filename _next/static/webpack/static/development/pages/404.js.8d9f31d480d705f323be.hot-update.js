webpackHotUpdate("static/development/pages/404.js",{

/***/ "./components/Flex.js":
false,

/***/ "./components/LayoutMain.js":
false,

/***/ "./components/Logo.js":
false,

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
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Link */ "./components/Link.js");
/* harmony import */ var _config_style_guide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/style-guide */ "./config/style-guide.js");
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4151425571", [_config_style_guide__WEBPACK_IMPORTED_MODULE_4__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"] * 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4151425571",
        css: "span.__jsx-style-dynamic-selector{color:".concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_4__["colors"].deepblue, ";}h3.__jsx-style-dynamic-selector{font-size:1em;}li.__jsx-style-dynamic-selector{font-size:0.7em;display:inline;}ul.__jsx-style-dynamic-selector{margin:0;padding:0;margin-top:3em;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector:first-child{margin:0 ").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], "px;}li.__jsx-style-dynamic-selector a{padding:").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], "px ").concat(_config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"] * 2, "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXltYW5ub3ZhZXMvd29ya3NwYWNlL2J1c3NvbGEtbGFuZGluZy1wYWdlL3BhZ2VzLzQwNC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ3FCLEFBR3dELEFBSXJCLEFBSUUsQUFLUCxBQU9kLEFBRzJFLFNBVDVELEtBVGQsRUFJbUIsR0FNQSxZQUxuQixHQU1BLENBZkEsS0FtQkEsOEJBSUEiLCJmaWxlIjoiL1VzZXJzL2RheW1hbm5vdmFlcy93b3Jrc3BhY2UvYnVzc29sYS1sYW5kaW5nLXBhZ2UvcGFnZXMvNDA0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xuXG5pbXBvcnQgTGluayBmcm9tICcuLi9jb21wb25lbnRzL0xpbmsnO1xuaW1wb3J0IHsgY29sb3JzLCBQQURESU5HX1VOSVQgfSBmcm9tICcuLi9jb25maWcvc3R5bGUtZ3VpZGUnO1xuXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWc6IHsgcGFnZXMgPSBbXSB9IH0gPSBnZXRDb25maWcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgICAgZmlsdGVyZWRQYWdlczogRXJyb3JQYWdlLmdldFBhZ2VzKCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFBhZ2VzKCkge1xuICAgICAgICByZXR1cm4gcGFnZXNcbiAgICAgICAgICAgIC5maWx0ZXIocGFnZSA9PiAhcGFnZS5tYXRjaCgvNDA0LykpXG4gICAgICAgICAgICAuZmlsdGVyKHBhZ2UgPT4gIXBhZ2UubWF0Y2goL15fLykpXG4gICAgICAgICAgICAubWFwKHBhZ2UgPT4gcGFnZS5yZXBsYWNlKC9cXC5qcyQvLCAnJykpXG4gICAgICAgICAgICAubWFwKHBhZ2UgPT4gcGFnZS5yZXBsYWNlKC9pbmRleC8sICdob21lJykpXG4gICAgICAgICAgICAubWFwKHBhZ2UgPT4gKHsgdGl0bGU6IHBhZ2UsIHVybDogcGFnZSA9PT0gJ2hvbWUnID8gJy8nIDogYC8ke3BhZ2V9YCB9KSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXRoOiBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aCwgZmlsdGVyZWRQYWdlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmRlZXBibHVlfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdWwgbGk6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgJHtQQURESU5HX1VOSVR9cHhcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsaSA6Z2xvYmFsKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJHtQQURESU5HX1VOSVR9cHggJHtQQURESU5HX1VOSVQgKiAyfXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICAgICAgICAgIDxoMT5Qw6FnaW5hIG7Do28gZW5jb250cmFkYTwvaDE+XG5cbiAgICAgICAgICAgICAgICA8aDM+TsOjbyBjb25zZWd1aW1vcyBlbmNvbnRyYSBhIHDDoWdpbmEgPHNwYW4+e3BhdGh9PC9zcGFuPjwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+VGVudGUgYWxndW1hIGRlc3NhczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZFBhZ2VzLm1hcChwYWdlID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3BhZ2UudXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwYWdlLnVybH0+XG4vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/daymannovaes/workspace/bussola-landing-page/pages/404.js */"),
        dynamic: [_config_style_guide__WEBPACK_IMPORTED_MODULE_4__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"] * 2],
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4151425571", [_config_style_guide__WEBPACK_IMPORTED_MODULE_4__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"] * 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "P\xE1gina n\xE3o encontrada"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4151425571", [_config_style_guide__WEBPACK_IMPORTED_MODULE_4__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"] * 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "N\xE3o conseguimos encontra a p\xE1gina ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4151425571", [_config_style_guide__WEBPACK_IMPORTED_MODULE_4__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"] * 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, path)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4151425571", [_config_style_guide__WEBPACK_IMPORTED_MODULE_4__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"] * 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4151425571", [_config_style_guide__WEBPACK_IMPORTED_MODULE_4__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"] * 2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Tente alguma dessas"), filteredPages.map(function (page) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: page.url,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4151425571", [_config_style_guide__WEBPACK_IMPORTED_MODULE_4__["colors"].deepblue, _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"], _config_style_guide__WEBPACK_IMPORTED_MODULE_4__["PADDING_UNIT"] * 2]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
          href: page.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "/", page.title));
      })));
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
//# sourceMappingURL=404.js.8d9f31d480d705f323be.hot-update.js.map
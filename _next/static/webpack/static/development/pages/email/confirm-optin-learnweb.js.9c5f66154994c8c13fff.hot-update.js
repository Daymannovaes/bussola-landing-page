webpackHotUpdate("static/development/pages/email/confirm-optin-learnweb.js",{

/***/ "./pages/email/confirm-optin-learnweb.js":
/*!***********************************************!*\
  !*** ./pages/email/confirm-optin-learnweb.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OptinPage; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button */ "./components/Button.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Link */ "./components/Link.js");
/* harmony import */ var _components_Video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Video */ "./components/Video.js");
var _jsxFileName = "/Users/daymannovaes/workspace/bussola-landing-page/pages/email/confirm-optin-learnweb.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var OptinPage =
/*#__PURE__*/
function (_Component) {
  _inherits(OptinPage, _Component);

  function OptinPage(props) {
    var _this;

    _classCallCheck(this, OptinPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OptinPage).call(this, props));

    _this.setState({
      confirm: false
    });

    return _this;
  }

  _createClass(OptinPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        confirm: !!document.location.search.match(/confirm=yes/)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var confirm = this.state.confirm;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1757655629",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1757655629",
        css: "h4.jsx-1757655629{margin-top:3em;font-weight:100;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXltYW5ub3ZhZXMvd29ya3NwYWNlL2J1c3NvbGEtbGFuZGluZy1wYWdlL3BhZ2VzL2VtYWlsL2NvbmZpcm0tb3B0aW4tbGVhcm53ZWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJxQixBQUd3QyxlQUNDLGdCQUNwQiIsImZpbGUiOiIvVXNlcnMvZGF5bWFubm92YWVzL3dvcmtzcGFjZS9idXNzb2xhLWxhbmRpbmctcGFnZS9wYWdlcy9lbWFpbC9jb25maXJtLW9wdGluLWxlYXJud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaW5rJztcbmltcG9ydCBWaWRlbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZpZGVvJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW5QYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb25maXJtOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29uZmlybTogISFkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2gubWF0Y2goL2NvbmZpcm09eWVzLyksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjb25maXJtIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgICAgICAgICA8aDE+SW5zY3Jpw6fDo28gJHtjb25maXJtID8gJ2NvbmZpcm1hZGEnIDogJ2NhbmNlbGFkYSd9LCBvYnJpZ2FkbyE8L2gxPlxuXG4gICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICBBZ29yYSDDqSBzbyBhbGVncmlhIVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgQmFzdGEgZXNwZXJhciBhcyBub3ZpZGFkZXMgc2HDrXJlbSBxdWUgdm9jw6ogdmFpIHJlY2ViZS1sYXMgbm8gY29uZm9ydG8gZGUgc3VhIGNhc2FcbiAgICAgICAgICAgICAgICA8L2g0PlxuXG4gICAgICAgICAgICAgICAgPFZpZGVvIHRpdGxlPVwiTyBxdWUgw6kgYSBCdXNzb2xhLnNjaG9vbD9cIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9vdkZPaU5fUldzY1wiIC8+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBub3N0eWxlIGhyZWY9XCJodHRwczovL2J1c3NvbGEuc2Nob29sXCI+UmV0b3JuYXIgYW8gc2l0ZTwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/daymannovaes/workspace/bussola-landing-page/pages/email/confirm-optin-learnweb.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-1757655629",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Inscri\xE7\xE3o $", confirm ? 'confirmada' : 'cancelada', ", obrigado!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-1757655629",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Agora \xE9 so alegria!", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1757655629",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), "Basta esperar as novidades sa\xEDrem que voc\xEA vai recebe-las no conforto de sua casa"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Video__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: "O que \xE9 a Bussola.school?",
        src: "https://www.youtube.com/embed/ovFOiN_RWsc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        nostyle: true,
        href: "https://bussola.school",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Retornar ao site")));
    }
  }]);

  return OptinPage;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/email/confirm-optin-learnweb")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=confirm-optin-learnweb.js.9c5f66154994c8c13fff.hot-update.js.map
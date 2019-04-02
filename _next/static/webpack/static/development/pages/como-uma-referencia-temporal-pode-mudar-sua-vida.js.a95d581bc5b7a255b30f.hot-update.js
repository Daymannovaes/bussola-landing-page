webpackHotUpdate("static/development/pages/como-uma-referencia-temporal-pode-mudar-sua-vida.js",{

/***/ "./components/PostImgColored.js":
/*!**************************************!*\
  !*** ./components/PostImgColored.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostImgColored; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostImg */ "./components/PostImg.js");
var _jsxFileName = "/Users/daymannovaes/workspace/bussola-landing-page/components/PostImgColored.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // Slightly modified version to quickly return a string
// https://stackoverflow.com/a/5624139/1218980

function hexToRgb(color) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = color.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? "rgb(".concat([parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)].join(', '), ")") : color;
}

function extractColorFromString(rgb) {
  var _rgb$match = rgb.match(/rgba?\((\d+), ?(\d+), ?(\d+)/),
      _rgb$match2 = _slicedToArray(_rgb$match, 4),
      r = _rgb$match2[1],
      g = _rgb$match2[2],
      b = _rgb$match2[3];

  r = parseInt(r, 10);
  g = parseInt(g, 10);
  b = parseInt(b, 10);
  return [r, g, b];
}

function getColorFromElement(element) {
  var color = hexToRgb(window.getComputedStyle(element, null)['background-color']);
  return extractColorFromString(color);
}

var PostImgColored =
/*#__PURE__*/
function (_Component) {
  _inherits(PostImgColored, _Component);

  function PostImgColored(props) {
    var _this;

    _classCallCheck(this, PostImgColored);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostImgColored).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScroll", function () {
      if (!_this.ticking) {
        _this.ticking = true;

        var percentage = _this.getDistanceFromMidPercentage(_this.getPercentageHeight());

        var _this$props = _this.props,
            textColor = _this$props.textColor,
            _this$props$percentag = _this$props.percentageToChangeText,
            percentageToChangeText = _this$props$percentag === void 0 ? 0.46 : _this$props$percentag;

        if (percentage === 0) {
          _this.ticking = false;
          if (!_this.didChange) return null;
          _this.didChange = false;
          _this.didChangeText = false;

          _this.mainElement.removeAttribute('style');

          _this.sectionElement.removeAttribute('style');

          return null;
        }

        _this.didChange = true;
        window.requestAnimationFrame(function () {
          var finalRGB = [_this.initialRGB[0] + percentage * _this.diffRGB[0], _this.initialRGB[1] + percentage * _this.diffRGB[1], _this.initialRGB[2] + percentage * _this.diffRGB[2]];

          _this.mainElement.setAttribute('style', "background-color: rgb(".concat(finalRGB[0], ", ").concat(finalRGB[1], ", ").concat(finalRGB[2], ") !important;"));

          _this.didChangeText = _this.didChangeText && percentage < percentageToChangeText;

          if (textColor && !_this.didChangeText && percentage > percentageToChangeText) {
            _this.didChangeText = true;

            _this.sectionElement.setAttribute('style', "color: rgb(".concat(textColor[0], ", ").concat(textColor[1], ", ").concat(textColor[2], ") !important;"));
          } else if (percentage < percentageToChangeText) {
            _this.sectionElement.removeAttribute('style');
          }

          _this.ticking = false;
        });
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPercentageHeight", function () {
      var viewport = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

      var elementOffset = _this.ref.current.getBoundingClientRect().top;

      var imageHeight = _this.ref.current.querySelector('img').offsetHeight;

      var offsetMiddle = elementOffset + imageHeight / 2;
      return offsetMiddle / viewport;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getDistanceFromMidPercentage", function (height) {
      var dist = Math.abs(_this.midPercentage - height);
      var percentDiff = 1 - Math.pow(dist, _this.speed) / Math.pow(_this.halfRange, _this.speed);
      return Math.max(0, percentDiff);
    });

    _this.ref = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.startPercentage = 0.7;
    _this.endPercentage = 0.3;
    _this.midPercentage = (_this.startPercentage + _this.endPercentage) / 2;
    _this.range = _this.startPercentage - _this.endPercentage;
    _this.halfRange = _this.range / 2;
    _this.ticking = false;
    _this.didChange = false;
    _this.speed = 2;
    return _this;
  }

  _createClass(PostImgColored, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mainElement = window.document.querySelector('main');
      this.sectionElement = window.document.querySelector('main section');
      this.initialRGB = getColorFromElement(this.mainElement);
      var finalRGB = this.props.bgColor;
      this.diffRGB = [finalRGB[0] - this.initialRGB[0], finalRGB[1] - this.initialRGB[1], finalRGB[2] - this.initialRGB[2]];
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var src = props.src;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        ref: this.ref,
        className: "jsx-1533993255",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1533993255",
        css: "div.jsx-1533993255{max-width:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXltYW5ub3ZhZXMvd29ya3NwYWNlL2J1c3NvbGEtbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvUG9zdEltZ0NvbG9yZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUpxQixBQUc0QyxlQUNuQiIsImZpbGUiOiIvVXNlcnMvZGF5bWFubm92YWVzL3dvcmtzcGFjZS9idXNzb2xhLWxhbmRpbmctcGFnZS9jb21wb25lbnRzL1Bvc3RJbWdDb2xvcmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUG9zdEltZyBmcm9tICcuL1Bvc3RJbWcnO1xuXG4vLyBTbGlnaHRseSBtb2RpZmllZCB2ZXJzaW9uIHRvIHF1aWNrbHkgcmV0dXJuIGEgc3RyaW5nXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTYyNDEzOS8xMjE4OTgwXG5mdW5jdGlvbiBoZXhUb1JnYihjb2xvcikge1xuICAgIC8vIEV4cGFuZCBzaG9ydGhhbmQgZm9ybSAoZS5nLiBcIjAzRlwiKSB0byBmdWxsIGZvcm0gKGUuZy4gXCIwMDMzRkZcIilcbiAgICBjb25zdCBzaG9ydGhhbmRSZWdleCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XG4gICAgY29uc3QgaGV4ID0gY29sb3IucmVwbGFjZShzaG9ydGhhbmRSZWdleCwgKG0sIHIsIGcsIGIpID0+IChcbiAgICAgICAgciArIHIgKyBnICsgZyArIGIgKyBiXG4gICAgKSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgICByZXR1cm4gcmVzdWx0ID8gYHJnYigke1tcbiAgICAgICAgcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgICAgIHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgICAgICBwYXJzZUludChyZXN1bHRbM10sIDE2KSxcbiAgICBdLmpvaW4oJywgJyl9KWAgOiBjb2xvcjtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdENvbG9yRnJvbVN0cmluZyhyZ2IpIHtcbiAgICBsZXQgWywgciwgZywgYl0gPSByZ2IubWF0Y2goL3JnYmE/XFwoKFxcZCspLCA/KFxcZCspLCA/KFxcZCspLyk7XG4gICAgciA9IHBhcnNlSW50KHIsIDEwKTtcbiAgICBnID0gcGFyc2VJbnQoZywgMTApO1xuICAgIGIgPSBwYXJzZUludChiLCAxMCk7XG5cbiAgICByZXR1cm4gW3IsIGcsIGJdO1xufVxuXG5mdW5jdGlvbiBnZXRDb2xvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBjb2xvciA9IGhleFRvUmdiKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpWydiYWNrZ3JvdW5kLWNvbG9yJ10pO1xuXG4gICAgcmV0dXJuIGV4dHJhY3RDb2xvckZyb21TdHJpbmcoY29sb3IpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0SW1nQ29sb3JlZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgICAgIHRoaXMuc3RhcnRQZXJjZW50YWdlID0gMC43O1xuICAgICAgICB0aGlzLmVuZFBlcmNlbnRhZ2UgPSAwLjM7XG4gICAgICAgIHRoaXMubWlkUGVyY2VudGFnZSA9ICh0aGlzLnN0YXJ0UGVyY2VudGFnZSArIHRoaXMuZW5kUGVyY2VudGFnZSkgLyAyO1xuXG4gICAgICAgIHRoaXMucmFuZ2UgPSB0aGlzLnN0YXJ0UGVyY2VudGFnZSAtIHRoaXMuZW5kUGVyY2VudGFnZTtcbiAgICAgICAgdGhpcy5oYWxmUmFuZ2UgPSB0aGlzLnJhbmdlIC8gMjtcblxuICAgICAgICB0aGlzLnRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaWRDaGFuZ2UgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNwZWVkID0gMjtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5tYWluRWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgICAgIHRoaXMuc2VjdGlvbkVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiBzZWN0aW9uJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsUkdCID0gZ2V0Q29sb3JGcm9tRWxlbWVudCh0aGlzLm1haW5FbGVtZW50KTtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBiZ0NvbG9yOiBmaW5hbFJHQixcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdGhpcy5kaWZmUkdCID0gW1xuICAgICAgICAgICAgZmluYWxSR0JbMF0gLSB0aGlzLmluaXRpYWxSR0JbMF0sXG4gICAgICAgICAgICBmaW5hbFJHQlsxXSAtIHRoaXMuaW5pdGlhbFJHQlsxXSxcbiAgICAgICAgICAgIGZpbmFsUkdCWzJdIC0gdGhpcy5pbml0aWFsUkdCWzJdLFxuICAgICAgICBdO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgfVxuXG4gICAgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMudGlja2luZykge1xuICAgICAgICAgICAgdGhpcy50aWNraW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IHRoaXMuZ2V0RGlzdGFuY2VGcm9tTWlkUGVyY2VudGFnZSh0aGlzLmdldFBlcmNlbnRhZ2VIZWlnaHQoKSk7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgdGV4dENvbG9yLFxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2VUb0NoYW5nZVRleHQgPSAwLjQ2LFxuICAgICAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgICAgIGlmIChwZXJjZW50YWdlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aWNraW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRpZENoYW5nZSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRpZENoYW5nZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlkQ2hhbmdlVGV4dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZGlkQ2hhbmdlID0gdHJ1ZTtcblxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmluYWxSR0IgPSBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbFJHQlswXSArIChwZXJjZW50YWdlICogdGhpcy5kaWZmUkdCWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsUkdCWzFdICsgKHBlcmNlbnRhZ2UgKiB0aGlzLmRpZmZSR0JbMV0pLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxSR0JbMl0gKyAocGVyY2VudGFnZSAqIHRoaXMuZGlmZlJHQlsyXSksXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoJHtmaW5hbFJHQlswXX0sICR7ZmluYWxSR0JbMV19LCAke2ZpbmFsUkdCWzJdfSkgIWltcG9ydGFudDtgKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZGlkQ2hhbmdlVGV4dCA9IHRoaXMuZGlkQ2hhbmdlVGV4dCAmJiAocGVyY2VudGFnZSA8IHBlcmNlbnRhZ2VUb0NoYW5nZVRleHQpO1xuICAgICAgICAgICAgICAgIGlmICh0ZXh0Q29sb3IgJiYgIXRoaXMuZGlkQ2hhbmdlVGV4dCAmJiBwZXJjZW50YWdlID4gcGVyY2VudGFnZVRvQ2hhbmdlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpZENoYW5nZVRleHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25FbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgY29sb3I6IHJnYigke3RleHRDb2xvclswXX0sICR7dGV4dENvbG9yWzFdfSwgJHt0ZXh0Q29sb3JbMl19KSAhaW1wb3J0YW50O2ApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGVyY2VudGFnZSA8IHBlcmNlbnRhZ2VUb0NoYW5nZVRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy50aWNraW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cblxuICAgIGdldFBlcmNlbnRhZ2VIZWlnaHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRPZmZzZXQgPSB0aGlzLnJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcblxuICAgICAgICBjb25zdCBpbWFnZUhlaWdodCA9IHRoaXMucmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcignaW1nJykub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBjb25zdCBvZmZzZXRNaWRkbGUgPSBlbGVtZW50T2Zmc2V0ICsgKGltYWdlSGVpZ2h0IC8gMik7XG5cbiAgICAgICAgcmV0dXJuIG9mZnNldE1pZGRsZSAvIHZpZXdwb3J0O1xuICAgIH07XG5cbiAgICBnZXREaXN0YW5jZUZyb21NaWRQZXJjZW50YWdlID0gKGhlaWdodCkgPT4ge1xuICAgICAgICBjb25zdCBkaXN0ID0gTWF0aC5hYnModGhpcy5taWRQZXJjZW50YWdlIC0gaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgcGVyY2VudERpZmYgPSAxIC0gKChkaXN0ICoqIHRoaXMuc3BlZWQpIC8gKHRoaXMuaGFsZlJhbmdlICoqIHRoaXMuc3BlZWQpKTtcblxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgcGVyY2VudERpZmYpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBwcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9e3RoaXMucmVmfT5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICAgICAgICAgIDxQb3N0SW1nIHNyYz17c3JjfSB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBvc3RJbWdDb2xvcmVkLnByb3BUeXBlcyA9IHtcbiAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBiZ0NvbG9yOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxuICAgIHRleHRDb2xvcjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gICAgcGVyY2VudGFnZVRvQ2hhbmdlVGV4dDogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cblBvc3RJbWdDb2xvcmVkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwZXJjZW50YWdlVG9DaGFuZ2VUZXh0OiBudWxsLFxuICAgIHRleHRDb2xvcjogbnVsbCxcbn07XG4iXX0= */\n/*@ sourceURL=/Users/daymannovaes/workspace/bussola-landing-page/components/PostImgColored.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostImg__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        src: src
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      })));
    }
  }]);

  return PostImgColored;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


PostImgColored.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  bgColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number).isRequired,
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number),
  percentageToChangeText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
PostImgColored.defaultProps = {
  percentageToChangeText: null,
  textColor: null
};

/***/ })

})
//# sourceMappingURL=como-uma-referencia-temporal-pode-mudar-sua-vida.js.a95d581bc5b7a255b30f.hot-update.js.map
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostImg */ "./components/PostImg.js");
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
        console.log(percentage);

        if (percentage === 0) {
          _this.ticking = false;
          if (!_this.didChange) return null;
          _this.didChange = false;
          _this.didChangeText = false;

          _this.mainElement.removeAttribute('style');

          _this.sectionElement.removeAttribute('style');

          return;
        }

        _this.didChange = true;
        window.requestAnimationFrame(function () {
          var finalRGB = [_this.initialRGB[0] + percentage * _this.diffRGB[0], _this.initialRGB[1] + percentage * _this.diffRGB[1], _this.initialRGB[2] + percentage * _this.diffRGB[2]];

          _this.mainElement.setAttribute('style', "background-color: rgb(".concat(finalRGB[0], ", ").concat(finalRGB[1], ", ").concat(finalRGB[2], ") !important;"));

          _this.didChangeText = _this.didChangeText && percentage < percentageToChangeText;
          console.log(_this.didChangeText);

          if (textColor && !_this.didChangeText && percentage > percentageToChangeText) {
            _this.didChangeText = true;

            _this.sectionElement.setAttribute('style', "color: rgb(".concat(textColor[0], ", ").concat(textColor[1], ", ").concat(textColor[2], ") !important;"));
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

    _this.ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: this.ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostImg__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        src: src
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      })));
    }
  }]);

  return PostImgColored;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


PostImgColored.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  bgColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ })

})
//# sourceMappingURL=como-uma-referencia-temporal-pode-mudar-sua-vida.js.ff89dd87b442e412edd3.hot-update.js.map
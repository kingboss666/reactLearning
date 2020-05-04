"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// 总组件
var MyApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MyApp, _React$Component);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(Heaber, null), React.createElement(Action, null), React.createElement(Options, null), React.createElement(AddOption, null));
    }
  }]);

  return MyApp;
}(React.Component);

var Heaber =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Heaber, _React$Component2);

  function Heaber() {
    _classCallCheck(this, Heaber);

    return _possibleConstructorReturn(this, _getPrototypeOf(Heaber).apply(this, arguments));
  }

  _createClass(Heaber, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h1", null, "\u5E2E\u4F60\u505A\u51B3\u5B9A"), React.createElement("p", null, "\u628A\u4F60\u7684\u547D\u8FD0\u4EA4\u7ED9\u7535\u8111\u628A"));
    }
  }]);

  return Heaber;
}(React.Component);

var Action =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, _getPrototypeOf(Action).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("button", null, "\u968F\u673A\u8F93\u51FA\u4E00\u4E2A\u9009\u9879"));
    }
  }]);

  return Action;
}(React.Component);

var Options =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, _getPrototypeOf(Options).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(Option, null), React.createElement(Option, null), React.createElement(Option, null), React.createElement(Option, null));
    }
  }]);

  return Options;
}(React.Component);

var Option =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, _getPrototypeOf(Option).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, "\u6211\u662Fli");
    }
  }]);

  return Option;
}(React.Component);

var AddOption =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddOption).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, "\u6211\u662FAddOption\u7EC4\u4EF6");
    }
  }]);

  return AddOption;
}(React.Component);

var app = document.getElementById("app");
ReactDOM.render(React.createElement(MyApp, null), app);

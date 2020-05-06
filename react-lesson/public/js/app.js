"use strict";

console.log("js运行了111");
console.log(React);
console.log(ReactDOM);
var obj = {
  title: "帮你决定",
  subtitle: "我是副标题",
  options: []
};

var showOptions = function showOptions(options) {
  if (options && options.length > 0) {
    return /*#__PURE__*/React.createElement("p", null, "\u8FD9\u662F\u4E00\u4E2Aoptions");
  } else {
    return /*#__PURE__*/React.createElement("p", null, "\u6CA1\u6709\u4E1C\u897F");
  }
}; // 添加选项


var fromSubmit = function fromSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    obj.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
}; // 清除所有


var removeAll = function removeAll() {
  obj.options = [];
  render();
}; // 随机选择一项


var makeDecision = function makeDecision() {
  var index = Math.floor(Math.random() * obj.options.length);
  var option = obj.options[index];
  alert(option);
}; // 渲染


var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, obj.title), /*#__PURE__*/React.createElement("p", null, obj.subtitle), showOptions(obj.options), /*#__PURE__*/React.createElement("p", null, obj.options.length), /*#__PURE__*/React.createElement("button", {
    onClick: makeDecision,
    disabled: obj.options.length <= 0
  }, "\u968F\u673A\u9009\u62E9\u4E00\u9879"), /*#__PURE__*/React.createElement("button", {
    onClick: removeAll
  }, "\u5220\u9664\u6240\u6709"), /*#__PURE__*/React.createElement("ol", null, obj.options.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: "item".concat(index)
    }, item);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: fromSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "\u6DFB\u52A0\u9009\u9879")));
  var root = document.getElementById("app");
  ReactDOM.render(template, root);
};

render();

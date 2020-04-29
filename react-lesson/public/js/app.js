"use strict";

console.log("js运行了");
console.log(React);
console.log(ReactDOM);
var obj = {
  title: "这是APP",
  subtitle: "我是副标题",
  options: [1]
};

var showOptions = function showOptions(options) {
  if (options && options.length > 0) {
    return React.createElement("p", null, "\u8FD9\u662F\u4E00\u4E2Aoptions");
  } else {
    return React.createElement("p", null, "\u6CA1\u6709\u4E1C\u897F");
  }
};

var template = React.createElement("div", null, React.createElement("h1", null, obj.title), React.createElement("p", null, obj.subtitle), (obj.options && obj.options.length) > 0 && React.createElement("p", null, "\u8FD9\u662F\u4E00\u4E2Aoptions"), showOptions(obj.options), React.createElement("p", null, obj.options && obj.options.length > 0 ? "这是一个options" : "没有东西"), React.createElement("ol", null, React.createElement("li", null, "\u7269\u54C11"), React.createElement("li", null, "\u7269\u54C11")));
var templateTwo = React.createElement("div", null, React.createElement("h1", null, "\u91D1\u745E"), React.createElement("p", null, "age: 22"), React.createElement("p", null, "location: \u676D\u5DDE"));
var count = 0;

var countAdd = function countAdd() {
  count += 1;
  renderCountApp();
};

var countRemove = function countRemove() {
  count -= 1;
  renderCountApp();
};

var countReset = function countReset() {
  count = 0;
  renderCountApp();
};

var renderCountApp = function renderCountApp() {
  var templateThree = React.createElement("div", null, React.createElement("p", null, count), React.createElement("button", {
    className: "button",
    onClick: countAdd
  }, "+1"), React.createElement("button", {
    className: "button",
    onClick: countRemove
  }, "-1"), React.createElement("button", {
    className: "button",
    onClick: countReset
  }, "\u91CD\u7F6E"));
  var root = document.getElementById("app");
  ReactDOM.render(templateThree, root);
};

renderCountApp();

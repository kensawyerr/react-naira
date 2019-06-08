"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Naira = function Naira(props) {
  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2
  });
  return _react["default"].createElement("span", null, "\u20A6", formatter.format(props.children));
};

var _default = Naira;
exports["default"] = _default;

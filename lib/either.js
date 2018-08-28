"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = either;
function either(x, y) {
  if (arguments.length === 1) {
    return function (yHolder) {
      return either(x, yHolder);
    };
  }

  return function (input) {
    return x(input) || y(input);
  };
}
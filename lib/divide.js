"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = divide;
function divide(x, y) {
  if (arguments.length === 1) {
    return function (yHolder) {
      return divide(x, yHolder);
    };
  }

  return x / y;
}
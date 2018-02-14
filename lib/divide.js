"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = divide;
function divide(x, y) {
  if (y === undefined) {
    return function (yHolder) {
      return divide(x, yHolder);
    };
  }

  return x / y;
}
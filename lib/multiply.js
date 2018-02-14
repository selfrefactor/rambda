"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = multiply;
function multiply(x, y) {
  if (y === undefined) {
    return function (yHolder) {
      return multiply(x, yHolder);
    };
  }

  return x * y;
}
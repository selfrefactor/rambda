"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subtract;
function subtract(x, y) {
  if (y === undefined) {
    return function (yHolder) {
      return subtract(x, yHolder);
    };
  }

  return x - y;
}
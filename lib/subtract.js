"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subtract;
function subtract(x, y) {
  if (arguments.length === 1) return function (yHolder) {
    return subtract(x, yHolder);
  };

  return x - y;
}
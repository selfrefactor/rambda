"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = min;
function min(x, y) {
  if (arguments.length === 1) {
    return function (yHolder) {
      return min(x, yHolder);
    };
  }
  return y < x ? y : x;
}
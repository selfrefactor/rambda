"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = max;
function max(x, y) {
  if (arguments.length === 1) {
    return function (yHolder) {
      return max(x, yHolder);
    };
  }
  return y > x ? y : x;
}
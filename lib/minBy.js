"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = minBy;
function minBy(fn, x, y) {
  if (arguments.length === 2) {
    return function (yHolder) {
      return minBy(fn, x, yHolder);
    };
  } else if (arguments.length === 1) {
    return function (xHolder, yHolder) {
      return minBy(fn, xHolder, yHolder);
    };
  }
  return fn(y) < fn(x) ? y : x;
}
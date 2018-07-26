"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = maxBy;
function maxBy(fn, x, y) {
  if (arguments.length === 2) {
    return function (yHolder) {
      return maxBy(fn, x, yHolder);
    };
  } else if (arguments.length === 1) {
    return function (xHolder, yHolder) {
      return maxBy(fn, xHolder, yHolder);
    };
  }
  return fn(y) > fn(x) ? y : x;
}
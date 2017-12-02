"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tap;
function tap(fn, x) {
  if (x === undefined) {
    return function (xHolder) {
      return tap(fn, xHolder);
    };
  }

  fn(x);

  return x;
}
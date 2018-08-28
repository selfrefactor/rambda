"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tap;
function tap(fn, x) {
  if (arguments.length === 1) return function (xHolder) {
    return tap(fn, xHolder);
  };

  fn(x);

  return x;
}
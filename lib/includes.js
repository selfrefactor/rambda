"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = includes;
function includes(x, y) {
  if (arguments.length === 1) {
    return function (yHolder) {
      return includes(x, yHolder);
    };
  }

  return y.includes(x);
}
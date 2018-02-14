"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endsWith;
function endsWith(x, y) {
  if (y === undefined) {
    return function (yHolder) {
      return endsWith(x, yHolder);
    };
  }

  return y.endsWith(x);
}
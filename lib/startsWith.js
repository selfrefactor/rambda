"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startsWith;
function startsWith(x, y) {
  if (y === undefined) {
    return function (yHolder) {
      return startsWith(x, yHolder);
    };
  }

  return y.startsWith(x);
}
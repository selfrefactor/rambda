"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startsWith;
function startsWith(x, y) {
  if (arguments.length === 1) return function (yHolder) {
    return startsWith(x, yHolder);
  };

  return y.startsWith(x);
}
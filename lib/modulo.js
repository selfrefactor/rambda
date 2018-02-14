"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modulo;
function modulo(x, y) {
  if (y === undefined) {
    return function (yHolder) {
      return modulo(x, yHolder);
    };
  }

  return x % y;
}
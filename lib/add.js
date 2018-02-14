"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = add;
function add(x, y) {
  if (y === undefined) {
    return function (yHolder) {
      return add(x, yHolder);
    };
  }

  return x + y;
}
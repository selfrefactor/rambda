"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = both;
function both(x, y) {
  if (arguments.length === 1) {
    return function (yHolder) {
      return both(x, yHolder);
    };
  }

  return function (input) {
    return x(input) && y(input);
  };
}
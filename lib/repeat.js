"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = repeat;
function repeat(x, num) {
  if (arguments.length === 1) {
    return function (numHolder) {
      return repeat(x, numHolder);
    };
  }
  var willReturn = Array(num);

  return willReturn.fill(x);
}
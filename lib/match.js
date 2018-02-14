"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = match;
function match(regex, x) {
  if (x === undefined) {
    return function (xHolder) {
      return match(regex, xHolder);
    };
  }
  var willReturn = x.match(regex);

  return willReturn === null ? [] : willReturn;
}
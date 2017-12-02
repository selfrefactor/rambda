"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;
function reduce(fn, initialValue, arr) {
  if (initialValue === undefined) {
    return function (initialValueHolder, arrHolder) {
      return reduce(fn, initialValueHolder, arrHolder);
    };
  } else if (arr === undefined) {
    return function (arrHolder) {
      return reduce(fn, initialValue, arrHolder);
    };
  }

  return arr.reduce(fn, initialValue);
}
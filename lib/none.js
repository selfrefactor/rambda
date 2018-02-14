"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = none;
function none(fn, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return none(fn, arrHolder);
    };
  }

  return arr.filter(fn).length === 0;
}
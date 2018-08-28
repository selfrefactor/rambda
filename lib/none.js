"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = none;
function none(fn, arr) {
  if (arguments.length === 1) return function (arrHolder) {
    return none(fn, arrHolder);
  };

  return arr.filter(fn).length === 0;
}
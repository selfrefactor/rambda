"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sort;
function sort(fn, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return sort(fn, arrHolder);
    };
  }
  var arrClone = arr.concat();

  return arrClone.sort(fn);
}
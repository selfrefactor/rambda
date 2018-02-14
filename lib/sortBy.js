"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortBy;
function sortBy(fn, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return sortBy(fn, arrHolder);
    };
  }
  var arrClone = arr.concat();

  return arrClone.sort(function (a, b) {
    var fnA = fn(a);
    var fnB = fn(b);

    return fnA < fnB ? -1 : fnA > fnB ? 1 : 0;
  });
}
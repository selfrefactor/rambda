"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findIndex;
function findIndex(fn, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return findIndex(fn, arrHolder);
    };
  }
  var len = arr.length;
  var index = -1;

  while (++index < len) {
    if (fn(arr[index])) {
      return index;
    }
  }

  return -1;
}
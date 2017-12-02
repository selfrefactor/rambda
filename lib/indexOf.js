"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = indexOf;
function indexOf(x, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return indexOf(x, arrHolder);
    };
  }
  var index = -1;
  var length = arr.length;

  while (++index < length) {
    if (arr[index] === x) {
      return index;
    }
  }

  return -1;
}
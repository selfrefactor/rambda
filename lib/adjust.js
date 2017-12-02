"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = adjust;
function adjust(fn, index, arr) {
  if (index === undefined) {
    return function (indexHolder, arrHolder) {
      return adjust(fn, indexHolder, arrHolder);
    };
  } else if (arr === undefined) {
    return function (arrHolder) {
      return adjust(fn, index, arrHolder);
    };
  }

  var clone = arr.concat();

  return clone.map(function (val, key) {
    if (key === index) {
      return fn(arr[index]);
    }

    return val;
  });
}
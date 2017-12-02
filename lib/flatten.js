"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flatten;
function flatten(arr, willReturn) {
  willReturn = willReturn === undefined ? [] : willReturn;

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], willReturn);
    } else {
      willReturn.push(arr[i]);
    }
  }

  return willReturn;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = any;
function any(fn, arr) {
  if (arguments.length === 1) {
    return function (arrHolder) {
      return any(fn, arrHolder);
    };
  }

  var counter = 0;
  while (counter < arr.length) {
    if (fn(arr[counter])) {
      return true;
    }
    counter++;
  }

  return false;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splitEvery;
function splitEvery(num, x) {
  if (x === undefined) {
    return function (xHolder) {
      return splitEvery(num, xHolder);
    };
  }

  var numValue = num > 1 ? num : 1;

  var willReturn = [];
  var counter = 0;

  while (counter < x.length) {
    willReturn.push(x.slice(counter, counter += numValue));
  }

  return willReturn;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = range;
function range(start, end) {
  if (end === undefined) {
    return function (endHolder) {
      return range(start, endHolder);
    };
  }
  var willReturn = [];

  for (var i = start; i < end; i++) {
    willReturn.push(i);
  }

  return willReturn;
}
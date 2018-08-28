"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = range;
function range(start, end) {
  if (arguments.length === 1) return function (endHolder) {
    return range(start, endHolder);
  };

  var willReturn = [];

  for (var i = start; i < end; i++) {
    willReturn.push(i);
  }

  return willReturn;
}
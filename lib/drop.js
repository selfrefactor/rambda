"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drop;
function drop(dropNumber, x) {
  if (x === undefined) {
    return function (xHolder) {
      return drop(dropNumber, xHolder);
    };
  }

  return x.slice(dropNumber);
}
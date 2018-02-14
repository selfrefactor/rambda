"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dropLast;
function dropLast(dropNumber, x) {
  if (x === undefined) {
    return function (xHolder) {
      return dropLast(dropNumber, xHolder);
    };
  }

  return x.slice(0, -dropNumber);
}
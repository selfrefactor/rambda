"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dropLast;
function dropLast(dropNumber, x) {
  if (arguments.length === 1) {
    return function (xHolder) {
      return dropLast(dropNumber, xHolder);
    };
  }

  return x.slice(0, -dropNumber);
}
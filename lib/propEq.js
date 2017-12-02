"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = propEq;
function propEq(key, x, obj) {
  if (x === undefined) {
    return function (xHolder, objHolder) {
      return propEq(key, xHolder, objHolder);
    };
  } else if (obj === undefined) {
    return function (objHolder) {
      return propEq(key, x, objHolder);
    };
  }

  return obj[key] === x;
}
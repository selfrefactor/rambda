"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = is;
function is(xPrototype, x) {
  if (x === undefined) {
    return function (xHolder) {
      return is(xPrototype, xHolder);
    };
  }

  return x instanceof xPrototype || x.constructor === xPrototype;
}
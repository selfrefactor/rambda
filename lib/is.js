"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = is;
function is(xPrototype, x) {
  if (arguments.length === 1) {
    return function (xHolder) {
      return is(xPrototype, xHolder);
    };
  }

  return x != null && x.constructor === xPrototype || x instanceof xPrototype;
}
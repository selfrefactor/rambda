"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = zipObj;
function zipObj(x, y) {
  if (arguments.length === 1) return function (yHolder) {
    return zipObj(x, yHolder);
  };

  return x.reduce(function (prev, xInstance, i) {
    prev[xInstance] = y[i];
    return prev;
  }, {});
}
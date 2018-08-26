"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge(obj, newProps) {
  if (arguments.length === 1) {
    return function (newPropsHolder) {
      return merge(obj, newPropsHolder);
    };
  }

  return Object.assign({}, obj || {}, newProps || {});
}
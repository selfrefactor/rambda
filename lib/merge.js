"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge(obj, newProps) {
  if (newProps === undefined) {
    return function (newPropsHolder) {
      return merge(obj, newPropsHolder);
    };
  }

  return Object.assign({}, obj, newProps);
}
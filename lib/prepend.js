'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prepend;
function prepend(x, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return prepend(x, arrHolder);
    };
  }
  if (typeof arr === 'string') {
    return '' + x + arr;
  }
  var clone = arr.concat();

  clone.unshift(x);

  return clone;
}
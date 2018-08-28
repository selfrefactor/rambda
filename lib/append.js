'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = append;
function append(x, arr) {
  if (arguments.length === 1) {
    return function (arrHolder) {
      return append(x, arrHolder);
    };
  }

  if (typeof arr === 'string') {
    return '' + arr + x;
  }

  var clone = arr.concat();
  clone.push(x);

  return clone;
}
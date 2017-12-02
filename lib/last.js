'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = last;
function last(a) {
  if (typeof a === 'string') {
    return a[a.length - 1] || '';
  }

  return a[a.length - 1];
}
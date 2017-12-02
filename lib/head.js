'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = head;
function head(a) {
  if (typeof a === 'string') {
    return a[0] || '';
  }

  return a[0];
}
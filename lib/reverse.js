"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reverse;
function reverse(arr) {
  var clone = arr.concat();

  return clone.reverse();
}
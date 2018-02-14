"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = complement;
function complement(fn) {
  return function (input) {
    return !fn(input);
  };
}
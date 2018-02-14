"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = always;
function always(x) {
  return function () {
    return x;
  };
}
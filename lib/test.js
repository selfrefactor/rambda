"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = test;
function test(regex, str) {
  if (arguments.length === 1) return function (strHolder) {
    return test(regex, strHolder);
  };

  return str.search(regex) !== -1;
}
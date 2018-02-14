"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = test;
function test(regex, str) {
  if (str === undefined) {
    return function (strHolder) {
      return test(regex, strHolder);
    };
  }

  return str.search(regex) !== -1;
}
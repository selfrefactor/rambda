"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flip;
function flipExport(fn) {
  return function () {
    for (var _len = arguments.length, input = Array(_len), _key = 0; _key < _len; _key++) {
      input[_key] = arguments[_key];
    }

    if (input.length === 1) {
      return function (holder) {
        return fn(holder, input[0]);
      };
    } else if (input.length === 2) {
      return fn(input[1], input[0]);
    }

    return undefined;
  };
}

function flip(fn) {
  return flipExport(fn);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;
//Taken from https://github.com/getify/Functional-Light-JS/blob/master/ch4.md
function compose() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (result) {
    var list = fns.slice();

    while (list.length > 0) {
      result = list.pop()(result);
    }

    return result;
  };
}
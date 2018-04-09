"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;
function compose() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    var list = fns.slice();
    if (list.length > 0) {
      var fn = list.pop();
      var result = fn.apply(undefined, arguments);
      while (list.length > 0) {
        result = list.pop()(result);
      }

      return result;
    }

    return undefined;
  };
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ifElse;
function ifElse(condition, ifFn, elseFn) {
  if (ifFn === undefined) {
    return function (ifFnHolder, elseFnHolder) {
      return ifElse(condition, ifFnHolder, elseFnHolder);
    };
  } else if (elseFn === undefined) {
    return function (elseFnHolder) {
      return ifElse(condition, ifFn, elseFnHolder);
    };
  }

  return function (input) {
    var conditionResult = typeof condition === 'boolean' ? condition : condition(input);

    if (conditionResult === true) {
      return ifFn(input);
    }

    return elseFn(input);
  };
}
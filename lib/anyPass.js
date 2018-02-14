'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = anyPass;

var _any = require('./any');

var _any2 = _interopRequireDefault(_any);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function anyPass(conditions, x) {
  if (arguments.length === 1) {
    return function (xHolder) {
      return anyPass(conditions, xHolder);
    };
  }

  return (0, _any2.default)(function (condition) {
    return condition(x);
  })(conditions);
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = allPass;

var _any = require('./any');

var _any2 = _interopRequireDefault(_any);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function allPass(conditions, x) {
  if (arguments.length === 1) {
    return function (xHolder) {
      return allPass(conditions, xHolder);
    };
  }

  return !(0, _any2.default)(function (condition) {
    return !condition(x);
  }, conditions);
}
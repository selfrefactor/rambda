'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reject;

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reject(fn, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return reject(fn, arrHolder);
    };
  }

  return (0, _filter2.default)(function (x) {
    return !fn(x);
  }, arr);
}
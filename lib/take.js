'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = take;

var _baseSlice = require('./internal/baseSlice');

var _baseSlice2 = _interopRequireDefault(_baseSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function take(num, x) {
  if (x === undefined) {
    return function (xHolder) {
      return take(num, xHolder);
    };
  }
  if (typeof x === 'string') {
    return x.slice(0, num);
  }

  return (0, _baseSlice2.default)(x, 0, num);
}
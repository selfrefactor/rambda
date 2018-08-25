'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endsWith;

var _equals = require('./equals');

var _equals2 = _interopRequireDefault(_equals);

var _takeLast = require('./takeLast');

var _takeLast2 = _interopRequireDefault(_takeLast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function endsWith(suffix, list) {
  switch (arguments.length) {
    case 0:
      return endsWith;
    case 1:
      return function (list) {
        return endsWith(suffix, list);
      };
    default:
      return (0, _equals2.default)(suffix, (0, _takeLast2.default)(suffix.length, list));
  }
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = times;

var _range = require('./range');

var _range2 = _interopRequireDefault(_range);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function times(fn, num) {
  if (num === undefined) {
    return function (numHolder) {
      return times(fn, numHolder);
    };
  }

  return (0, _map2.default)(fn, (0, _range2.default)(0, num));
}
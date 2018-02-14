'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;

var _baseSlice = require('./internal/baseSlice');

var _baseSlice2 = _interopRequireDefault(_baseSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(a) {
  if (typeof a === 'string') {
    return a.slice(0, -1);
  }

  return a.length ? (0, _baseSlice2.default)(a, 0, -1) : [];
}
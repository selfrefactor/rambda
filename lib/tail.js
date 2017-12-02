'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tail;

var _drop = require('./drop');

var _drop2 = _interopRequireDefault(_drop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tail(arr) {
  return (0, _drop2.default)(1, arr);
}
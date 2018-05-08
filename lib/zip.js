'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = zip;

var _addIndex = require('./addIndex');

var _addIndex2 = _interopRequireDefault(_addIndex);

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function zip(x, y) {
  if (y === undefined) {

    return function (yHolder) {
      return zip(x, yHolder);
    };
  }

  return (0, _addIndex2.default)(_reduce2.default)(function (accum, value, index) {
    return y[index] ? accum.concat([[value, y[index]]]) : accum;
  }, [], x);
}
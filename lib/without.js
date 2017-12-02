'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = without;

var _contains = require('./contains');

var _contains2 = _interopRequireDefault(_contains);

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function without(itemsToOmit, collection) {
  return (0, _reduce2.default)(function (accum, item) {
    return !(0, _contains2.default)(item, itemsToOmit) ? accum.concat(item) : accum;
  }, [], collection);
}
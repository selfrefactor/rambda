'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultTo = require('./defaultTo');

var _defaultTo2 = _interopRequireDefault(_defaultTo);

var _path = require('./path');

var _path2 = _interopRequireDefault(_path);

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pathOr(defaultValue, inputPath, inputObject) {
  return (0, _defaultTo2.default)(defaultValue, (0, _path2.default)(inputPath, inputObject));
}

exports.default = (0, _curry2.default)(pathOr);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = partialCurry;

var _merge = require('./merge');

var _merge2 = _interopRequireDefault(_merge);

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function partialCurry(fn) {
  var inputArguments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return function (inputArgumentsHolder) {
    if ((0, _type2.default)(fn) === 'Async' || (0, _type2.default)(fn) === 'Promise') {
      return new Promise(function (resolve, reject) {
        fn((0, _merge2.default)(inputArgumentsHolder, inputArguments)).then(resolve).catch(reject);
      });
    }

    return fn((0, _merge2.default)(inputArgumentsHolder, inputArguments));
  };
}
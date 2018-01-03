'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniqWith;

var _any = require('./any');

var _any2 = _interopRequireDefault(_any);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function uniqWith(fn, arr) {
  if (arguments.length === 1) {
    return function (arrHolder) {
      return uniqWith(fn, arrHolder);
    };
  }

  var index = -1;
  var len = arr.length;
  var willReturn = [];

  var _loop = function _loop() {
    var value = arr[index];
    var flag = (0, _any2.default)(function (willReturnInstance) {
      return fn(value, willReturnInstance);
    }, willReturn);

    if (!flag) {
      willReturn.push(value);
    }
  };

  while (++index < arr.length) {
    _loop();
  }

  return willReturn;
}
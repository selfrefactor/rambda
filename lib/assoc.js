"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assoc;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function assoc(prop, value, obj) {
  switch (arguments.length) {

    case 0:
      return assoc;
    case 1:
      return function (value, obj) {
        return assoc(prop, value, obj);
      };
    case 2:
      return function (obj) {
        return assoc(prop, value, obj);
      };
    default:
      return Object.assign({}, obj, _defineProperty({}, prop, value));

  }
}
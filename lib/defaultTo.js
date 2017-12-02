"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultTo;
function defaultTo(defaultArgument, inputArgument) {
  if (arguments.length === 1) {
    return function (inputArgumentHolder) {
      return defaultTo(defaultArgument, inputArgumentHolder);
    };
  }

  return inputArgument === undefined || inputArgument === null || Number.isNaN(inputArgument) === true ? defaultArgument : inputArgument;
}
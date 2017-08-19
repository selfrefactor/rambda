const curry = require("./internal/curry")

function merge(obj, newProps) {
  return Object.assign({}, obj, newProps)
}

module.exports = curry(merge)

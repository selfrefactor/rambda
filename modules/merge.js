const curryTwo = require("./internal/curryTwo")

function merge(obj, newProps) {
  return Object.assign({}, obj, newProps)
}

module.exports = curryTwo(merge)

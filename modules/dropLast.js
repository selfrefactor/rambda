const curry = require('./internal/curry')

function dropLast (dropNumber, a) {
  return a.slice(0, -dropNumber)
}

module.exports = curry(dropLast)

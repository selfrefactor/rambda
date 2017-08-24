const curry = require('./internal/curry')

function drop (dropNumber, a) {
  return a.slice(dropNumber)
}

module.exports = curry(drop)

const curry = require('./internal/curry')

function append (val, arr) {
  const clone = arr.concat()
  clone.push(val)

  return clone
}

module.exports = curry(append)

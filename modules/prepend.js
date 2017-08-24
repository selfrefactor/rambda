const curry = require('./internal/curry')

function prepend (val, arr) {
  const clone = arr.concat()
  clone.unshift(val)

  return clone
}

module.exports = curry(prepend)

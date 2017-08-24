const curry = require('./internal/curry')

function sort (fn, arr) {
  const arrClone = arr.concat()

  return arrClone.sort(fn)
}

module.exports = curry(sort)

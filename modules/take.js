const baseSlice = require('./internal/baseSlice')
const curry = require('./internal/curry')

function take (takeNumber, a) {
  if (a === undefined) {
    return holder => take(takeNumber, holder)
  } else if (typeof a === 'string') {
    return a.slice(0, takeNumber)
  }

  return baseSlice(a, 0, takeNumber)
}

module.exports = curry(take)

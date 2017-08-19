const curry = require('./internal/curry')

function tap(fn, input){
  fn(input)

  return input
}

module.exports = curry(tap)

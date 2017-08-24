const curry = require('./internal/curry')

function match (regex, str) {
  const willReturn = str.match(regex)

  return willReturn === null ?
    [] :
    willReturn
}

module.exports = curry(match)

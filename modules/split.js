const curry = require('./internal/curry')

function split(glue, str) {

  return str.split(glue)
}

module.exports = curry(split)

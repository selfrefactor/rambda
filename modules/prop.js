const curry = require('./internal/curry')

function prop (key, obj) {
  return obj[ key ]
}

module.exports = curry(prop)

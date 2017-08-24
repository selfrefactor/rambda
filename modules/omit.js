const type = require('./type')

function omit (keys, obj) {
  if (arguments.length === 1) {
    return objHolder => omit(keys, objHolder)
  }
  if (!(type(obj) === 'Object')) {
    return undefined
  }
  if (type(keys) === 'String') {
    keys = keys.split(',').map(x => x.trim())
  }

  const willReturn = {}
  for (const key in obj) {
    if (!keys.includes(key)) {
      willReturn[ key ] = obj[ key ]
    }
  }

  return willReturn
}

module.exports = omit

function omit(keys, obj){
  if (obj === undefined) {
    return holder => omit(keys, holder)
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

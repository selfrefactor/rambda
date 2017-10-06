export default function omit (keys, obj) {
  if (arguments.length === 1) {
    return objHolder => omit(keys, objHolder)
  }
  if (obj === null || obj === undefined) {
    return undefined
  }
  if (typeof keys === 'string') {
    keys = keys.split(',')
  }

  const willReturn = {}
  for (const key in obj) {
    if (!keys.includes(key)) {
      willReturn[ key ] = obj[ key ]
    }
  }

  return willReturn
}

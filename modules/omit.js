export default function omit (keys, obj) {
  if (arguments.length === 1) {
    return objHolder => omit(keys, objHolder)
  }
  if (obj === null || obj === undefined) {
    return undefined
  }

  const keysValue = typeof keys === 'string' ?
    keys = keys.split(',') :
    keys

  const willReturn = {}

  for (const key in obj) {
    if (!keysValue.includes(key)) {
      willReturn[ key ] = obj[ key ]
    }
  }

  return willReturn
}

import type from './type'

export default function omit (keys, obj) {
  if (arguments.length === 1) {
    return objHolder => omit(keys, objHolder)
  }
  if (obj === undefined || obj === null) {
    return undefined
  }
  if (typeof keys === 'string') {
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
